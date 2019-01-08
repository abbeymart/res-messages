/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-03 | @Updated: 2019-01-03
 * @Company: mConnect.biz | @License: MIT
 * @Description: mc-res-messages testing: checkError
 */

const suite             = require('mocha').suite;
const test              = require('mocha').test;
const before            = require('mocha').before;
const HTTPStatusCode    = require('http-status-codes');
const { getResMessage } = require('../index');
const ok                = require('./assert');

let res,
    msgType = '',
    options = {};


before(() => {
    msgType = 'checkError';
    options = {
        value  : '',
        code   : '',
        resCode: '',
        message: '',
    };
    res     = {
        code   : 'paramsError',
        resCode: HTTPStatusCode.NOT_ACCEPTABLE,
        value  : '',
        message: 'Parameters checking error',
    };
});

suite('@mconnect/res-messages package Testing - checkError:', () => {
    suite('Positive testing:', () => {
        test('should return paramsError code for checkError-message', () => {
            const req = getResMessage(msgType, options);
            ok(res.code === req.code, 'response-code should be: paramError');
        });
        test('should return NOT_ACCEPTABLE/406 resCode', () => {
            const req = getResMessage(msgType);
            ok(res.resCode === req.resCode, 'resCode should be: NOT_ACCEPTABLE/406');
        });
        test('should return Parameters checking error message', () => {
            const req = getResMessage(msgType);
            ok(res.message === req.message, 'message should be: Parameters checking error');
        });
    });

    suite('Negative testing:', () => {
        test('should return paramError for checkError-message', () => {
            res       = {
                code   : 'unauthorised',
                resCode: HTTPStatusCode.OK,
                value  : '',
                message: 'Parameters checking error',
            };
            const req = getResMessage(msgType);
            ok(res.code !== req.code, 'response-code should be: paramError, not unauthorised');
        });
    });
});
