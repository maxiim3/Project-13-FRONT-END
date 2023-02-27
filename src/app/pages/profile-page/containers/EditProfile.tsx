import React, {RefObject, useMemo, useRef} from "react"
import {Form} from "../../../components/form/Form"
import {inputFactory} from "../../../components/form/factory/InputFactory"
import $style from "../profile.module.scss"

interface EditProfileProps {
	firstName: string
	lastName: string
}

const firstNameInput = inputFactory({
	label: "First Name",
	minLength: 4,
	inputType: "text",
})
const lastNameInput = inputFactory({
	label: "Last Name",
	minLength: 4,
	inputType: "text",
})

type T_ModalProps = {
	ref: React.RefObject<HTMLDivElement>
	children: JSX.Element | Array<JSX.Element>
}

function Modal({ref, children}: T_ModalProps) {
	return {children}
}

export function EditProfile({firstName, lastName}: EditProfileProps) {
	const inputCollection = useMemo(() => [firstNameInput, lastNameInput], [])
	const modalRef = useRef() as RefObject<HTMLDialogElement>

	// todo add accessibility
	return (
		<>
			<button
				className={$style.button}
				onClick={() => modalRef.current && modalRef.current.showModal()}>
				Edit Name
			</button>
			<dialog
				className={$style.modal}
				// aria-expanded={isVisible} // todo figure out accessibility for open/close
				aria-modal={"true"}
				// role={"dialog"}

				ref={modalRef}>
				<header>
					<button
						className={$style.closeModalBtn}
						onClick={() => {
							modalRef.current!.dataset.closing = "true"
							setTimeout(() => {
								modalRef.current && modalRef.current.close()
								modalRef.current!.dataset.closing = "false"
							}, 850)
						}}>
						<i className="fa fa-close" />
					</button>
				</header>

				<Form
					description={""}
					title={"Edit Profile"}
					inputCollection={inputCollection}
					handleSubmit={() => console.log("Handle something...")}
				/>
			</dialog>
		</>
	)
}
