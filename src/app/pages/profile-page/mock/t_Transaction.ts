export interface T_Transaction {
	transaction_id: string
	amount: number
	date_emitted_received?: Array<string>
	emitter_id_receiver_id?: Array<string>
}
