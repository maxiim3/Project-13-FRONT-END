import {RefObject, useCallback, useRef} from "react"

export const useModal = () => {
	const modalRef = useRef() as RefObject<HTMLDialogElement>

	const closeModal = useCallback(() => {
		modalRef.current!.dataset.closing = "true"
		setTimeout(() => {
			modalRef.current && modalRef.current.close()
			modalRef.current!.dataset.closing = "false"
		}, 850)
	}, [])
	const openModal = () => modalRef.current && modalRef.current.showModal()

	return {modalRef, closeModal, openModal}
}