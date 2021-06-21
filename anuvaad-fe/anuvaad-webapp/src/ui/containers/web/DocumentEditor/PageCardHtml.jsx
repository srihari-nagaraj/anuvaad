import { Paper } from "@material-ui/core"
import React from 'react';
import DownloadFile from "../../../../flux/actions/apis/download/download_zip_file";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuid4 } from 'uuid'
import { clearHighlighBlock } from '../../../../flux/actions/users/translator_actions';
import { bindActionCreators } from "redux";

const $ = require('jquery');


class PageCardHtml extends React.Component {
    constructor(props) {
        super(props);
        this.prev_sid = React.createRef()
        this.page_no = React.createRef()
        this.state = {
            loaded: false
        }
    }
    replaceNbsps(str) {
        let cleanedHtml = str.replace(/&#160;/g, String.fromCharCode(32));
        return cleanedHtml.replace(/\s{2,}/g, ' ');
    }

    getHTML = () => {
        let inputField = this.props.match.params.inputfileid
        let filename = inputField.substr(inputField.indexOf('-') + 1).replace('.json', '.html')
        let obj = new DownloadFile(filename)
        fetch('https://anuvaad1.s3.ap-south-1.amazonaws.com/pdf_test/NDEAR+-+short+version+v2.0-html.html', {
            method: 'get',
            headers: obj.getHeaders().headers
        })
            .then(async res => {
                if (res.status === 200) {
                    let html = await res.text()
                    let cleanedHtml = this.replaceNbsps(html)
                    $('#paper').html(cleanedHtml)
                    let src = `https://anuvaad1.s3.ap-south-1.amazonaws.com/pdf_test/${$('img').attr('src')}`
                    $('img').attr('src', src)
                    $('body').css('width', '100%')
                    this.setState({ loaded: true })
                } else {
                    $('#paper').html('Failed to load...')
                }
            })
    }

    highlight = (source, color, id) => {
        if (source) {
            const paper = $('#paper').html()
            let index = paper.indexOf(source)
            if (index >= 0) {
                let firstHalf = paper.substr(0, index)
                let secondHalf = `<font id=${id} style='background-color:${color};padding:3px 0'>${paper.substr(index, source.length)}</font>`
                let thirdHalf = paper.substr(index + source.length)
                $('#paper').html(`${firstHalf}${secondHalf}${thirdHalf}`)
            }
        }
    }


    getSource = (fetchContent, pageNo) => {
        let tokenized_source
        fetchContent && fetchContent['result']['data'].forEach(value => {
            if (value.page_no === pageNo) {
                tokenized_source = value['text_blocks'].filter(text => {
                    return text.text !== ''
                })
            }
        })
        if (Array.isArray(tokenized_source) &&
            tokenized_source[0].hasOwnProperty('tokenized_sentences')
            && tokenized_source[0]['tokenized_sentences'][0]
        )
            return tokenized_source[0]['tokenized_sentences'][0]['s0_src']

    }

    componentDidMount() {
        $('#paper').html('Loading...')
        this.getHTML()
    }

    componentDidUpdate(prevProps) {
        const { highlightBlock } = this.props
        if (this.page_no !== this.props.active_page && this.state.loaded) {
            this.page_no = this.props.active_page
            let source = this.getSource(this.props.fetchContent, this.page_no)
            if (this.prev_sid) {
                var font = document.getElementsByTagName('font');
                var counter = font.length - 1;
                for (let i = counter; i >= 0; i--) {
                    font[i].outerHTML = font[i].innerHTML;
                }
            }
            if (source) {
                this.prev_sid = uuid4()
                this.highlight(source, 'white', this.prev_sid)
                let sentenceToHighlight = document.getElementById(this.prev_sid)
                if (sentenceToHighlight) sentenceToHighlight.scrollIntoView({ behavior: "smooth", inline: "nearest" })
            }
            this.props.clearHighlighBlock();
        } else if (highlightBlock.block) {
            let { src } = highlightBlock.block
            if (highlightBlock.current_sid !== highlightBlock.prev_sid && highlightBlock.prev_sid) {
                var font = document.getElementsByTagName('font');
                var counter = font.length - 1;
                for (let i = counter; i >= 0; i--) {
                    font[i].outerHTML = font[i].innerHTML;
                }
                this.prev_sid = uuid4()
                this.highlight(src, 'orange', this.prev_sid)
                let current = document.getElementById(this.prev_sid)
                current && current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
            } else if (highlightBlock.current_sid && !highlightBlock.prev_sid) {
                this.prev_sid = uuid4()
                this.highlight(src, 'orange', this.prev_sid)
                let current = document.getElementById(this.prev_sid)
                current && current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
            } else if (highlightBlock.current_sid === highlightBlock.prev_sid && highlightBlock.prev_sid) {
                var font = document.getElementsByTagName('font');
                var counter = font.length - 1;
                for (let i = counter; i >= 0; i--) {
                    font[i].outerHTML = font[i].innerHTML;
                }
            }
        }
    }

    render() {
        return (
            <span style={{ zoom: `${this.props.zoomPercent}%` }}>
                <Paper style={{ padding: '3%' }} id='paper'></Paper>
            </span>

        )
    }
}


const mapStateToProps = state => ({
    highlightBlock: state.block_highlight,
    active_page: state.active_page_number.page_number,
    fetchContent: state.fetchContent
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        clearHighlighBlock
    },
    dispatch
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageCardHtml));
