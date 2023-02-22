export function useTextToCamelCase(label: string) {
	let id = label.trim().split(" ")
	id[0] = id[0].toLowerCase()
	return id.join("")
}