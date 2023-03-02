import {getRandomKey} from "../../../functions/getRandomKey()"
import $table from "./transactionTable.module.scss"
import {BsFillTriangleFill} from "react-icons/bs"
import React, {MouseEvent} from "react"

type T_HeaderCellProps = {
	label: string
}

export function HeaderCell({label}: T_HeaderCellProps) {
	return (
		<th
			id={getRandomKey()}
			className={$table.headerCell}
			scope={"col"}
			aria-sort="none">
			<button className={$table.button} >
				<p>{label}</p>
				{/*<BsFillTriangleFill className={$table.icon} />*/}
			</button>
		</th>
	)
}