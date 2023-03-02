import {T_CheckingTransaction} from "./t_CheckingTransaction"
import {getRandomKey} from "../../../functions/getRandomKey()"
import {getRandomAmount} from "./getRandomAmount"
import {randomDates} from "./randomDates"
import {generateTransaction} from "../generateTransaction"
import {T_SavingTransaction} from "./t_SavingTransaction"
import {T_CreditTransaction} from "./t_CreditTransaction"

const credit: T_CreditTransaction[] = []
const saving: T_SavingTransaction[] = []
const checking: T_CheckingTransaction[] = []
for (let i = 0; i < 50; i++) {
	checking.push({
		category: "checking",
		transaction_id: getRandomKey(),
		amount: getRandomAmount({max: 450}),
		date_emitted_received: randomDates(),
		emitter_id_receiver_id: generateTransaction(),
		transaction_type: null,
	})
}
for (let i = 0; i < 20; i++) {
	saving.push({
		category: "saving",
		transaction_id: getRandomKey(),
		amount: getRandomAmount({min: 250, max: 1200}),
		date_emitted_received: randomDates(),
		emitter_id_receiver_id: generateTransaction(),
		transaction_type: null,
	})
}
for (let i = 0; i < 12; i++) {
	credit.push({
		category: "credit",
		transaction_id: getRandomKey(),
		amount: getRandomAmount({min: 50, max: 7000}),
		date_emitted_received: randomDates(),
		emitter_id_receiver_id: generateTransaction(),
		transaction_type: null,
	})
}

export const transactionsData = [...credit, ...saving, ...checking]
