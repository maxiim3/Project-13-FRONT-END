export function getRandomAmount(props: {min?: number; max?: number}) {
	const min = props.min || 1
	const max = props.max || 4000
	const amount = Math.floor(Math.random() * (max - min + 1) + min)
	const cents = Math.floor(Math.random() * 100)
	return amount + cents / 100
}
