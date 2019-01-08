/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-06 | @Updated: 2019-01-06
 * @Company: mConnect.biz | @License: MIT
 * @Description: mc-res-messages testing, custom message with default params
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
    res = {
        code   : 'unknown',
        resCode: HTTPStatusCode.UNPROCESSABLE_ENTITY,
        value  : '',
        message: 'Unspecified response/error message',
    };
});

suite('@mconnect/res-messages package Testing - custom messages(default params):', () => {
    suite('Positive testing:', () => {
        test('should return default response-message-code', () => {
            const req = getResMessage(msgType, options);
            ok(res.code === req.code, `response-code should be: ${res.code}`);
        });
        test('should return default HTTP code', () => {
            const req = getResMessage(msgType, options);
            ok(res.resCode === req.resCode, `response-code should be: ${res.resCode}`);
        });
        test('should return correct message', () => {
            const req = getResMessage(msgType, options);
            ok(res.message === req.message, `response-code should be: ${res.message}`);
        });
        test('should return correct response value', () => {
            const req = getResMessage(msgType, options);
            console.log('req.value: ', req.value);
            console.log('res.value: ', res.value);
            ok(req.value.toString() === res.value.toString(),
                `response-value should be: ${res.value.toString()}`
            );
        });
    });

    suite('Negative testing:', () => {
        test('should return default HTTP code', () => {
            res       = {
                code   : 'unauthorised',
                resCode: HTTPStatusCode.OK,
                value  : '',
                message: 'Request completed successfully.',
            };
            const req = getResMessage(msgType, options);
            ok(req.code !== res.code, `response-code should be: ${req.code} not ${res.code}`);
        });
    });
});
