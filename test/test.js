const assert = require('assert');
const hello = require('..');

function test() {
	assert.equal(hello(), "Hello World!");
}

test()