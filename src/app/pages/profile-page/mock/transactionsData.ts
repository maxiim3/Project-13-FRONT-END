import {T_CheckingTransaction} from "./t_CheckingTransaction"
import {getRandomKey} from "../../../../utils/getRandomKey()"
import {getRandomAmount} from "../../../../utils/getRandomAmount"
import {randomDates} from "../../../../utils/randomDates"
import {generateTransaction} from "../../../../utils/generateTransaction"
import {T_SavingTransaction} from "./t_SavingTransaction"
import {T_CreditTransaction} from "./t_CreditTransaction"

const credit: T_CreditTransaction[] = []
const saving: T_SavingTransaction[] = []
const checking: T_CheckingTransaction[] = []
for (let i = 0; i < 700; i++) {
	checking.push({
		transaction_type: "checking",
		transaction_id: getRandomKey(),
		amount: getRandomAmount({max: 450}),
		date_emitted_received: randomDates(),
		emitter_id_receiver_id: generateTransaction(),
	})
}
for (let i = 0; i < 200; i++) {
	saving.push({
		transaction_type: "saving",
		transaction_id: getRandomKey(),
		amount: getRandomAmount({min: 250, max:1200}),
		date_emitted_received: randomDates(),
		emitter_id_receiver_id: generateTransaction(),
	})
}
for (let i = 0; i < 125; i++) {
	credit.push({
		transaction_type: "credit",
		transaction_id: getRandomKey(),
		amount: getRandomAmount({min: 50, max: 7000}),
		date_emitted_received: randomDates(),
		emitter_id_receiver_id: generateTransaction(),
	})
}

export const transactionsData = [...credit, ...saving, ...checking]
