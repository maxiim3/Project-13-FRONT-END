export function generateTransaction() {
	const users = ['tony@stark.com', 'steve@rogers.com', 'bruce@banner.com'];
	const emitter = users[Math.floor(Math.random() * users.length)];
	let receiver;
	do {
		receiver = users[Math.floor(Math.random() * users.length)];
	} while (emitter === receiver);
	return [emitter, receiver];
}
