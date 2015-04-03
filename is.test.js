/*
 * Tests for Is.js
 */

Tinytest.add('Is::object', function (test) {
	test.equal(Is.object({}), true);
});

Tinytest.add('Is::array', function (test) {
	test.equal(Is.array([]), true);
});

Tinytest.add('Is::string', function (test) {
	test.equal(Is.array('a'), true);
});

Tinytest.add('Is::number', function (test) {
	test.equal(Is.array(1), true);
});

Tinytest.add('Is::proc', function (test) {
	test.equal(Is.proc(function(){}), true);
});

Tinytest.add('Is::boolean', function (test) {
	test.equal(Is.boolean(true), true);
});

Tinytest.add('Is::defined', function (test) {
	var a = 1;
	test.equal(Is.defined(a), true);
});