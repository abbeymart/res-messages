/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-06 | @Updated: 2019-01-06
 * @Company: mConnect.biz | @License: MIT
 * @Description: @abbeymart/res-messages, response-messages | settings, default values
 */

const HTTPStatusCode = require('http-status-codes');

// message options => code, resCode, message, value
const resMsgParams = {
    checkError: {
        code   : 'paramsError',
        resCode: HTTPStatusCode.NOT_ACCEPTABLE,
        message: 'Parameters checking error',
        value  : '',
    },
    connectError: {
        code   : 'connectionError',
        resCode: HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRED,
        message: 'Connection error',
        value  : '',
    },
    validateError: {
        code   : 'paramsError',
        resCode: HTTPStatusCode.NOT_ACCEPTABLE,
        message: 'Validation error for inputs parameters',
        value  : '',
    },
    tokenExpired: {
        code   : 'tokenExpired',
        resCode: HTTPStatusCode.UNAUTHORIZED,
        message: 'Unauthorized. Token / Access-key has expired. Please login again',
        value  : '',
    },
    unAuthorized: {
        code   : 'unAuthorized',
        resCode: HTTPStatusCode.UNAUTHORIZED,
        message: 'Unauthorised Action or Task',
        value  : '',
    },
    notFound: {
        code   : 'notFound',
        resCode: HTTPStatusCode.NOT_FOUND,
        message: 'Requested information not found',
        value  : '',
    },
    success: {
        code   : 'success',
        resCode: HTTPStatusCode.OK,
        message: 'Request completed successfully',
        value  : '',
    },
    removeDenied: {
        code   : 'removeDenied',
        resCode: HTTPStatusCode.UNAUTHORIZED,
        message: 'Remove action/task denied/unauthorised',
        value  : '',
    },
    removeError: {
        code   : 'removeError',
        resCode: HTTPStatusCode.NOT_MODIFIED,
        message: 'Error removing/deleting information, retry or contact system-admin',
        value  : '',
    },
    removed: {
        code   : 'removed',
        resCode: HTTPStatusCode.OK,
        message: 'Record(s) deleted/removed successfully',
        value  : '',
    },
    subItems: {
        code   : 'paramsError',
        resCode: HTTPStatusCode.NOT_MODIFIED,
        message: 'Record includes sub-items, which must be removed first',
        value  : '',
    },
    duplicateRec: {
        code   : 'duplicate',
        resCode: HTTPStatusCode.NOT_MODIFIED,
        message: 'Duplicate record exists',
        value  : '',
    },
    updated: {
        code   : 'updated',
        resCode: HTTPStatusCode.OK,
        message: 'Information update action completed successfully',
        value  : '',
    },
    updateError: {
        code   : 'updateError',
        resCode: HTTPStatusCode.NOT_MODIFIED,
        message: 'Error updating information/record(s)',
        value  : '',
    },
    updateDenied: {
        code   : 'updateDenied',
        resCode: HTTPStatusCode.UNAUTHORIZED,
        message: 'Update action/task not authorised',
        value  : '',
    },
    inserted: {
        code   : 'inserted',
        resCode: HTTPStatusCode.OK,
        message: 'Information/record(s) inserted/created successfully',
        value  : '',
    },
    insertError: {
        code   : 'insertError',
        resCode: HTTPStatusCode.NOT_MODIFIED,
        message: 'Error inserting/creating new information/record',
        value  : '',
    },
    recExist: {
        code   : 'exists',
        resCode: HTTPStatusCode.NOT_MODIFIED,
        message: 'Document/record exists',
        value  : '',
    },
    stdRes    : {
        code   : 'unknown',
        resCode: HTTPStatusCode.UNPROCESSABLE_ENTITY,
        message: 'Unspecified response/error message',
        value  : '',
    },
};

module.exports = resMsgParams;

