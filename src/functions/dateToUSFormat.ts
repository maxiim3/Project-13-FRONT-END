export const dateToUSFormat = (date: Date) =>
	date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})