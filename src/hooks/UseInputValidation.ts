export function useInputValidation(input: HTMLInputElement) {
	// move in the reducer
	const minimalLength = input.minLength
	const parent = input.parentElement as HTMLDivElement
	if (input.value.length !== 0) {
		if (input.value.length < minimalLength) {
			parent.dataset.validation = "error"
			parent.dataset.message = `${input.ariaRoleDescription} length must be greater than ${minimalLength}`
			return false
		} else {
			parent.dataset.validation = "success"
			parent.dataset.message = `${input.ariaRoleDescription} length is greater than ${minimalLength}`
			return true
		}
	}
	if (input.value.length === 0) {
		parent.dataset.validation = "none"
		return false
	}
	return false
}
