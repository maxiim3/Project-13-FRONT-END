/**
 * # dateToUSFormat
 * @description Converts a date to a US string format
 * @param {Date} date
 * @return {string}
 */
export const dateToUSFormat = (date: Date) =>
	date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})