/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-06 | @Updated: 2019-01-06
 * @Company: mConnect.biz | @License: MIT
 * @Description: @mconnect/res-messages testing, custom message with set params
 */

const suite             = require('mocha').suite;
const test              = require('mocha').test;
const before            = require('mocha').before;
const HTTPStatusCode    = require('http-status-codes');
const { getResMessage } = require('../index');
const ok                = require('./assert');

let res,
    msgType = 'success',
    options = {};

before(() => {
    options = {
        value  : [ 'a', 'b', 'c' ],
        code   : 'success',
        resCode: HTTPStatusCode.OK,
        message: 'Successful',
    };
});

suite('@mconnect/res-messages package Testing - custom messages(set params):', () => {
    suite('Positive testing:', () => {
        test('should return success code for success-message', () => {
            const req = getResMessage(msgType, options);
            ok(options.code === req.code, `response-code should be: ${options.code}`);
        });
        test('should return ok/200 resCode for success-message', () => {
            const req = getResMessage(msgType, options);
            ok(options.resCode === req.resCode, `response-code should be: ${options.resCode}`);
        });
        test('should return correct message', () => {
            const req = getResMessage(msgType, options);
            ok(options.message === req.message, `response-code should be: ${options.message}`);
        });
        test('should return correct response value', () => {
            const req = getResMessage(msgType, options);
            ok(req.value.toString() === options.value.toString(),
                `response-value should be: ${options.value.toString()}`
            );
        });
    });

    suite('Negative testing:', () => {
        test('should return ok/200 resCode for success-message', () => {
            res       = {
                code   : 'unauthorised',
                resCode: HTTPStatusCode.OK,
                value  : '',
                message: 'Successful...',
            };
            const req = getResMessage(options);
            ok(req.code !== res.code, `response-code should be: ${options.code} not ${res.code}`);
        });
    });
});