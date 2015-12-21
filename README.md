# object-flip

Exchange object property keys with their associated values.

[![Build Status](https://travis-ci.org/tyxla/object-flip.svg?branch=master)](https://travis-ci.org/tyxla/object-flip)

## About

This will swap each property key of the specified object with its corresponding value.

The swapping will work only for integer and string values, while other types will be omitted from the result object.

Please, note that properties with the same values will override each other, as there can be only one property with a certain key.

## Syntax

``` js
objectFlip(objectToFlip);
```

#### objectToFlip

This is the object that you wish to flip.

## Usage

Pass the object you want to flip, and you will receive the flipped object with swapped keys and values.

``` js
var result = objectExtract({
	foo: 123,
	456: 'bar'
});

console.log(result);
/*
{
	123: 'foo',
	'bar': '456'
}
*/

```

## License

MIT