var tape = require('tape');
var objectFlip = require('./');

tape('flip string values', function(t) {
	var obj = {
		foo: 'bar123',
		bar: 'foo123'
	};

	var result = objectFlip(obj);
	var expected = {
		foo123: 'bar',
		bar123: 'foo'
	}

	t.same( result, expected );

	t.end();
});

tape('flip and stringify integer values', function(t) {
	var obj = {
		foo: 123,
		123: 'bar'
	};

	var result = objectFlip(obj);
	var expected = {
		123: 'foo',
		bar: '123'
	}

	t.same( result, expected );

	t.end();
});

tape('skip objects and arrays', function(t) {
	var obj = {
		foo: 123,
		bar: [1, 2, 3],
		foobar: { x: 1 }
	};

	var result = objectFlip(obj);
	var expected = {
		123: 'foo'
	}

	t.same( result, expected );

	t.end();
});

tape('same object property values are overridden', function(t) {
	var obj = {
		foo: 123,
		bar: 123
	};

	var result = objectFlip(obj);
	var expected = {
		123: 'bar'
	}

	t.same( result, expected );

	t.end();
});