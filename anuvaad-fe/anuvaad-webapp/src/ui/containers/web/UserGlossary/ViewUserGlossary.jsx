import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { translate } from "../../../../assets/localisation";
import NewCorpusStyle from "../../../styles/web/Newcorpus";
import Header from './ViewUserGlossaryHeader';
import APITransport from "../../../../flux/actions/apitransport/apitransport";
import DeleteIcon from "@material-ui/icons/Delete";
import ViewGlossary from '../../../../flux/actions/apis/user_glossary/fetch_user_glossary';
import Spinner from "../../../components/web/common/Spinner";
import DeleteGlossary from '../../../../flux/actions/apis/user_glossary/delete_glossary';
import Snackbar from "../../../components/web/common/Snackbar";

const getMuiTheme = () =>
    createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    padding: "3px 10px 3px",
                    overflow: "auto"
                },
            },
        },
    });

class MyGlossary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            open: false,
            message: "",
            variant: 'success'
        }
    }
    getUserGlossary = () => {
        const { APITransport } = this.props
        let userID = JSON.parse(localStorage.getItem("userProfile")).userID
        let apiObj = new ViewGlossary(userID)
        APITransport(apiObj)
    }
    componentDidMount() {
        if (this.props.glossaryData.count === 0) {
            this.setState({ loading: true })
            this.getUserGlossary();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.glossaryData.hasOwnProperty("deleted") && !this.props.glossaryData.delete && this.state.loading) {
            this.setState({ loading: false })
        }
        if (prevProps.glossaryData.count > this.props.glossaryData.count && this.props.glossaryData.deleted) {
            this.setState({ open: true, message: 'Glossary deleted successfully', variant: 'success' })
        }
    }

    handleDeleteGlossary = (dataArray) => {
        this.setState({ open: true, message: 'Glossary deletion in progress...', variant: 'info' })
        let apiObj = new DeleteGlossary(dataArray[2], dataArray[0], dataArray[1], dataArray[3], dataArray[4])
        fetch(apiObj.apiEndPoint(), {
            method: 'post',
            headers: apiObj.getHeaders().headers,
            body: JSON.stringify(apiObj.getBody())
        })
            .then(async res => {
                if (res.ok) {
                    this.setState({ open: false })
                    let apiObj = new ViewGlossary(dataArray[2])
                    let { APITransport } = this.props
                    APITransport(apiObj)
                } else {
                    this.setState({ open: true, message: 'Glossary deletion failed', variant: 'error' })
                }
            })
    }

    handleClose = () => {
        this.setState({ open: false })
    }
    render() {
        const columns = [
            {
                name: "src",
                label: translate("common.page.label.source"),
                options: {
                    filter: false,
                    sort: false,
                },
            },
            {
                name: "tgt",
                label: translate("common.page.label.target"),
                options: {
                    filter: false,
                    sort: false,
                },
            },
            {
                name: "userID",
                label: "User ID",
                options: {
                    filter: false,
                    sort: false,
                    display: 'excluded'
                },
            },
            {
                name: "locale",
                label: "Locale",
                options: {
                    filter: false,
                    sort: false,
                    display: 'excluded'
                },
            },
            {
                name: "context",
                label: "Context",
                options: {
                    filter: false,
                    sort: false,
                    display: 'excluded'
                },
            },
            {
                name: "Action",
                label: translate("common.page.label.action"),
                options: {
                    filter: true,
                    sort: false,
                    empty: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        if (tableMeta.rowData) {
                            return (
                                <div>
                                    <Tooltip title="Delete Glossary" placement="left">
                                        <IconButton
                                            style={{ color: "#233466", padding: "5px" }}
                                            component="a"
                                            onClick={() => this.handleDeleteGlossary(tableMeta.rowData)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            );
                        }
                    },
                },
            },
        ];

        const options = {
            textLabels: {
                body: {
                    // noMatch: this.props.glossaryData.count > 0 ? "Loading...." : translate("gradeReport.page.muiNoTitle.sorryRecordNotFound"),
                },
                toolbar: {
                    search: translate("graderReport.page.muiTable.search"),
                    viewColumns: translate("graderReport.page.muiTable.viewColumns"),
                },
                pagination: {
                    rowsPerPage: translate("graderReport.page.muiTable.rowsPerPages"),
                },
                options: { sortDirection: "desc" },
            },
            rowsPerPageOptions: [10],
            count: 0,
            filterType: "checkbox",
            download: true,
            print: false,
            fixedHeader: true,
            filter: false,
            selectableRows: "none",
            sortOrder: {
                name: "timestamp",
                direction: "desc",
            },
        };
        return (
            <div style={{ maxHeight: window.innerHeight, height: window.innerHeight, overflow: "auto" }}>
                <div style={{ margin: "0% 3% 3% 3%", paddingTop: "7%" }}>
                    <Header />
                    {this.state.loading ?
                        <Spinner />
                        :
                        <MuiThemeProvider theme={getMuiTheme()}>
                            <MUIDataTable
                                title={translate("common.page.title.glossary")}
                                columns={columns}
                                options={options}
                                data={this.props.glossaryData.result}
                            />
                        </MuiThemeProvider>
                    }
                </div>
                {this.state.open &&
                    <Snackbar
                        open={this.state.open}
                        message={this.state.message}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        autoHideDuration={3000}
                        onClose={this.handleClose}
                        variant={this.state.variant}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    glossaryData: state.fetchglossary,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            APITransport
        },
        dispatch
    );

export default withRouter(
    withStyles(NewCorpusStyle)(
        connect(mapStateToProps, mapDispatchToProps)(MyGlossary)
    )
);