/**
 * # getRandomKey
 * @description Convert a string to camel case format
 * @param {string} label
 * @return {string}
 */
export function textToCamelCase(label: string) {
	let id = label.trim().split(" ")
	id[0] = id[0].toLowerCase()
	return id.join("")
}
