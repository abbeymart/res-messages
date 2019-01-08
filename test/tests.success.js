/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-03 | @Updated: 2019-01-03
 * @Company: mConnect.biz | @License: MIT
 * @Description: @abbeymart/res-messages testing, success
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
    msgType = 'success';
    options = {
        value  : '',
        code   : '',
        resCode: '',
        message: '',
    };
    res     = {
        code   : 'success',
        resCode: HTTPStatusCode.OK,
        value  : '',
        message: 'Request completed successfully',
    };
});

suite('@mconnect/res-messages package Testing - success:', () => {
    suite('Positive testing:', () => {
        test('should return success code for success-message', () => {
            const req = getResMessage(msgType, options);
            ok(res.code === req.code, 'response-code should be: success');
        });
        test('should return ok/200 resCode for success-message', () => {
            const req = getResMessage(msgType);
            ok(res.resCode === req.resCode, 'resCode should be: OK/200');
        });
        test('should return Completed successfully message for success-message', () => {
            const req = getResMessage(msgType);
            ok(res.message === req.message, 'message should be: Completed successfully');
        });
    });

    suite('Negative testing:', () => {
        test('should return ok/200 resCode for success-message', () => {
            res       = {
                code   : 'unauthorised',
                resCode: HTTPStatusCode.OK,
                value  : '',
                message: 'Request completed successfully.',
            };
            const req = getResMessage(msgType);
            ok(res.code !== req.code, 'response-code should be: success, not unauthorised');
        });
    });
});