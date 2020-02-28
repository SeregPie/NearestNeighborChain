let assert = require('assert').strict;

let NearestNeighborChain = require('./index');

{
	let array = [4, 90, 12, 61, 29];
	let clusters = NearestNeighborChain(array, (a, b) => Math.abs(a - b));
	assert.deepEqual(clusters, [[29, [4, 12]], [90, 61]]);
}
{
	let intersection = function(a, b) {
		a = new Set(a);
		b = new Set(b);
		return [...a].filter(v => b.has(v));
	};
	let array = ['ac', 'ab', 'baab', 'aba', 'bc'];
	let clusters = NearestNeighborChain(array, (a, b) => -intersection(a, b).length);
	assert.deepEqual(clusters, ['ac', 'bc', ['ab', 'baab', 'aba']]);
}
{
	let array = [1, 1, 1, 1, 1];
	let clusters = NearestNeighborChain(array, (a, b) => Math.abs(a - b));
	assert.deepEqual(clusters, [1, 1, 1, 1, 1]);
}
{
	let array = [];
	let clusters = NearestNeighborChain(array, (a, b) => Math.abs(a - b));
	assert.deepEqual(clusters, []);
}
