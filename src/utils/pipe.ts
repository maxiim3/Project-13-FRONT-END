/**
 * # Pipe
 * @description Pipe function that takes an array of functions and an initial value. The value is provided and mutated over each function.
 * @param {Array<(value: any) => typeof input>} funs : Array of functions that must return the same value as the input
 * **warning** : Each function must return the same value as the input value.
 * @param input : any value
 * @return {(value: any) => typeof input}
 * @example :
 * 	- pipe([addOne, multipleByTwo, addOne], 7) // (((7 + 1) * 2 ) + 1) = 17
 * 	- pipe([addOne, addOne, multipleByTwo ], 7) // (((7 + 1) + 1) * 2) = 18
 */
export const pipe = (funs: Array<(value: typeof input) => typeof input>, input: any) =>
	funs.reduce((accumulator, next) => next(accumulator), input)
