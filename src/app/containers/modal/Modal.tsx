import $style from "./modal.module.scss"
import React from "react"

type T_ModalProps = {
	modalRef: React.RefObject<HTMLDialogElement>
	children: JSX.Element | Array<JSX.Element>
	onClose?: () => void
}
export const Modal = ({children, modalRef, onClose}: T_ModalProps) => {
	return (
		<dialog
			className={$style.modal}
			// aria-expanded={isVisible} // todo figure out accessibility for open/close
			aria-modal={"true"}
			// role={"dialog"}
			ref={modalRef}>
			<header>
				<button onClick={onClose}>
					<i className="fa fa-close" />
				</button>
			</header>
			{children}
		</dialog>
	)
}
