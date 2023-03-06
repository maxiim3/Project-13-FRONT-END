/**
 * # Capitalize First Letter
 * @description Capitalizes the first letter of a string
 * @param {string} label
 * @return {string}
 */
export function capitalizeFirstLetter(label: string) {
	const split = label.split("")
	split[0] = split[0].toUpperCase()
	return split.join("")
}