'use strict';

let base64 = require('base-64');

let encodedAuthStr = `Basic ${base64.encode('tester:pass123')}`;

console.log('encodedAuthStr', encodedAuthStr);