export function randomDates() {
	const startDate = new Date(2019, 0, 1); // 2019/01/01
	const endDate = new Date(2023, 1, 1); // 2023/02/01
	const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
	const dateStart = new Date(randomTime);

	const days = Math.floor(Math.random() * 11);
	const dateEnd = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate() + days);

	return [`${dateStart.getFullYear()}/${(dateStart.getMonth() + 1).toString().padStart(2, '0')}/${dateStart.getDate().toString().padStart(2, '0')}`, `${dateEnd.getFullYear()}/${(dateEnd.getMonth() + 1).toString().padStart(2, '0')}/${dateEnd.getDate().toString().padStart(2, '0')}`];
}
