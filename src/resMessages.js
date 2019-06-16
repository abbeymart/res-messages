/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-03 | @Updated: 2019-06-15
 * @Company: mConnect.biz | @License: MIT
 * @Description: @mconnect/res-messages, response-messages | utility functions
 */

const resMsgParams = require('./resMsgParams');

module.exports = {
    getResMessage(msgType = '', options = {}) {
        let value   = '',
            code    = '',
            resCode = '',
            message = '';

        if (msgType && resMsgParams[msgType]) {
            code    = resMsgParams[msgType].code;
            value   = options && options.value ? options.value : resMsgParams[msgType].value;
            resCode = options && options.resCode ? options.resCode : resMsgParams[msgType].resCode;
            message = options && options.message ? options.message : resMsgParams[msgType].message;
        } else if (msgType && resMsgParams[msgType] === undefined) {
            code    = msgType;
            value   = options && options.value ? options.value : resMsgParams['stdRes'].value;
            resCode = options && options.resCode ? options.resCode : resMsgParams['stdRes'].resCode;
            message = options && options.message ? options.message : resMsgParams['stdRes'].message;
        } else {
            // resMsgParams for default response
            value   = options && options.value ? options.value : resMsgParams['stdRes'].value;
            code    = options && options.code ? options.code : resMsgParams['stdRes'].code;
            resCode = options && options.resCode ? options.resCode : resMsgParams['stdRes'].resCode;
            message = options && options.message ? options.message : resMsgParams['stdRes'].message;
        }
        return msgFunc(value, code, resCode, message);
    },
};

function msgFunc(value, code, resCode, msg) {
    return {
        code   : code,
        resCode: resCode,
        value  : value,
        message: msg,
    };
}
