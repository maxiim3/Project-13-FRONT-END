export function capitalizeFirstLetter(label: string) {
	const split = label.split("")
	split[0] = split[0].toUpperCase()
	return split.join("")
}