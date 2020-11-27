/*
 * @Author: ghost
 * @Date: 2018-07-03 17:45:01
 * @Last Modified by:   aroop.ghosh@tarento.com
 * @Last Modified time: 2018-07-03 17:45:01
 */
const constants = {

    APISTATUS: 'APISTATUS',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    QNA: 'QNA',
    AUTO_ML: 'AUTO_ML',
    NMT: 'NMT',
    ACTIVATE: 'ACTIVATE',
    NMTSP: 'NMTSP',
    CREATE_CORPUS: 'CREATE_CORPUS',
    CREATE_TRANSLATIONS: 'CREATE_TRANSLATIONS',
    BENCHMARK: 'BENCHMARK',
    FETCH_CORP: 'FETCH_CORP',
    FETCH_SENTENCES: 'FETCH_SENTENCES',
    FETCH_TRANSLATION_SENTENCES: 'FETCH_TRANSLATION_SENTENCES',
    FETCH_TRANSLATIONS: 'FETCH_TRANSLATIONS',
    UPDATE_SENTENCE:'UPDATE_SENTENCE',
    UPDATE_SENTENCE_STATUS:'UPDATE_SENTENCE_STATUS',
    UPDATE_SENTENCE_GRADE:'UPDATE_SENTENCE_GRADE',
    SOURCE_TRANSLATE:'SOURCE_TRANSLATE',
    USER_AUTH:'USER_AUTH',
    CREATE_PARALLEL_CORPUS:'CREATE_PARALLEL_CORPUS',
    UPDATE_PASSWORD:'UPDATE_PASSWORD',
    FETCH_LANGUAGE: 'FETCH_LANGUAGE',
    FETCH_MODEL: 'FETCH_MODEL',
    FETCH_BENCH: 'FETCH_BENCH',
    FETCH_BENCHMARK_MODEL: 'FETCH_BENCHMARK_MODEL',
    FETCH_GRADER_REPORT: 'FETCH_GRADER_REPORT',
    UPLOAD_BENCHMARK : 'UPLOAD_BENCHMARK',
    FETCH_BENCHMARK_COMPARE_MODEL: "FETCH_BENCHMARK_COMPARE_MODEL",
    BENCHMARK_TRANSLATE: 'BENCHMARK_TRANSLATE',
    FETCH_COMPARISON_REPORT: 'FETCH_COMPARISON_REPORT',
    TRANSLATION: 'TRANSLATION',
    SIGNUP:'SIGNUP',
    FORGOTPASSWORD:'FORGOTPASSWORD',
    SET_PASSWORD:'SET_PASSWORD',
    DELETE: 'DELETE',
    USER_DIRECTORY: 'USER_DIRECTORY',
    USER_ROLES: 'USER_ROLES',
    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    UPLOAD_AUDIO: 'UPLOAD_AUDIO',
    HINDI: 'HINDI',
    MARATHI: 'MARATHI',
    TELUGU: 'TELUGU',
    TAMIL: 'TAMIL',
    KANNADA: 'KANNADA',
    MALAYALAM: 'MALAYALAM',
    PUNJABI: 'PUNJABI',
    BENGALI: 'BENGALI',
    GUJARATI: 'GUJARATI',
    CONFIGUPLOAD: 'CONFIGUPLOAD',
    // RUNEXPERIMENT: 'RUNEXPERIMENT',
    // FETCH_WORKSPACE: 'FETCH_WORKSPACE',
    // FETCH_WORKSPACE_DETAILS: 'FETCH_WORKSPACE_DETAILS',
    UPLOAD_TOKEN: "UPLOAD_TOKEN",
    // FETCH_DEFAULT_CONFIG: "FETCH_DEFAULT_CONFIG",
    UPLOAD_TRANSLATED: "UPLOAD_TRANSLATED",
    CREATEWORKSPACE: 'CREATEWORKSPACE',
    COURT_LIST: 'COURT_LIST',
    // FETCH_SEARCH_REPLACE: 'FETCH_SEARCH_REPLACE',
    // SENTENCEREPLACE: 'SENTENCEREPLACE',
    // FEEDBACK_QUESTIONS: 'FEEDBACK_QUESTIONS',
    UPLOADPDF: 'UPLOADPDF',
    PDFCONFIGUPLOAD: 'PDFCONFIGUPLOAD',
    // FETCH_PDFSENTENCE: 'FETCH_PDFSENTENCE',
    INTRACTIVE_TRANSLATE: 'INTRACTIVE_TRANSLATE',
    PDF_TO_DOC: 'PDF_TO_DOC',
    UPDATEINTERACTIVESENTENCE: 'UPDATEINTERACTIVESENTENCE',
    // DOWNLOAD_DOC: 'DOWNLOAD_DOC',
    MERGEINTERACTIVESENTENCE: 'MERGEINTERACTIVESENTENCE',
    UPDATE_PDF_TABLE: 'UPDATE_PDF_TABLES',
    UPDATESOURCESENTENCE: 'UPDATESOURCESENTENCE',
    DELETE_SENTENCE: 'DELETE_SENTENCE',
    DELETE_TABLE: 'DELETE_TABLE',
    INSERT_SENTENCE: 'INSERT_SENTENCE',
    WORKFLOW: 'WORKFLOW',
    DOCUMENTUPLOAD:'DOCUMENTUPLOAD',
    FETCHDOCUMENT: 'FETCHDOCUMENT',
    FETCHDOCUMENT_NEWJOB: 'FETCHDOCUMENT_NEWJOB',
    FETCHDOCUMENT_NEXTPAGE: 'FETCHDOCUMENT_NEXTPAGE',
    FETCHDOCUMENT_EXISTING: 'FETCHDOCUMENT_EXISTING',
    FETCHFILEDETAILS: 'FETCHFILEDETAILS',
    FETCH_CONTENT: 'FETCH_CONTENT',
    CLEAR_CONTENT: 'CLEAR_CONTENT',
    DOCUMENT_CONVERTER: 'DOCUMENT_CONVERTER',
    DOWNLOAD_FILE: 'DOWNLOAD_FILE',

    WORD_DICTIONARY:"WORD_DICTIONARY",
    SAVE_CONTENT: "SAVE_CONTENT",
    MARK_INACTIVE: "MARK_INACTIVE",
    JOBSTATUS: "JOBSTATUS",

    /**
     * Asynchronous Job action
     */
    CREATE_JOB_ENTRY        :   'CREATE_JOB_ENTRY',
    CLEAR_JOB_ENTRY         :   'CLEAR_JOB_ENTRY',

    /**
     * actions for merge and split operation
     */
    HIGHLIGHT_BLOCK :               'HIGHLIGHT_BLOCK',
    HIGHLIGHT_SENTENCE  :           'HIGHLIGHT_SENTENCE',
    MERGE_SENTENCE_STARTED    :     'MERGE_SENTENCE_STARTED',
    MERGE_SENTENCE_INPROGRESS  :    'MERGE_SENTENCE_INPROGRESS',
    MERGE_SENTENCE_FINISHED    :    'MERGE_SENTENCE_FINISHED',
    MERGE_SENTENCE_CANCEL      :    'MERGE_SENTENCE_CANCEL',
    CLEAR_HIGHLIGHT_BLOCK      :    'CLEAR_HIGHLIGHT_BLOCK',
    SENTENCE_ACTION_API_STARTED:    'SENTENCE_ACTION_API_STARTED',
    SENTENCE_ACTION_API_STOPPED:    'SENTENCE_ACTION_API_STOPPED',
    FETCH_CONTENT_UPDATE:           'FETCH_CONTENT_UPDATE',
    CONTENT_UPDATE_STARTED:         'CONTENT_UPDATE_STARTED',
    UPDATE_SENTENCE_CONTENT    :   'UPDATE_SENTENCE_CONTENT',
    UPDATE_BLOCK_CONTENT        :   'UPDATE_BLOCK_CONTENT',
    CLEAR_FETCH_CONTENT         :    "CLEAR_FETCH_CONTENT",
    EDITOR_MODE_CLEAR          :   "EDITOR_MODE_CLEAR",
    EDITOR_MODE_NORMAL          :   "EDITOR_MODE_NORMAL",
    EDITOR_MODE_MERGE           :   "EDITOR_MODE_MERGE",
    

     /**
     * actions for header
     */
    SHOW_PDF : 'SHOW_PDF',
    SHOW_SIDEBAR : "SHOW_SIDEBAR",

    /**
     * actions for pagination
     */
    JOBPROGRESSSTATUS            : 'JOBPROGRESSSTATUS',
    UPDATE_PAGENUMBER           :   "UPDATE_PAGENUMBER",
}
export default constants;
