export function useInputValidation(input: HTMLInputElement, number: number) {
	// move in the reducer
	const parent = input.parentElement as HTMLDivElement
	if (input.value.length !== 0) {
		if (input.value.length < number) {
			parent.dataset.validation = "error"
			parent.dataset.message = `${input.ariaRoleDescription} length must be greater than ${number}`
			return false
		}
		else {
			parent.dataset.validation = "success"
			parent.dataset.message = `${input.ariaRoleDescription} length is greater than ${number}`
			return true
		}
	}
	if (input.value.length === 0) {
		parent.dataset.validation = "none"
		return false
	}
	return false
}