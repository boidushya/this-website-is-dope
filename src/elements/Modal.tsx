import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal: React.FC<{
	isOpen: boolean;
	handleClose: () => void;
}> = ({ isOpen, handleClose }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			closeTimeoutMS={200}
			onRequestClose={handleClose}
			style={{
				content: {
					border: "",
					inset: "8rem",
					background: "",
					borderRadius: "",
					padding: "",
				},
			}}
			shouldCloseOnOverlayClick={true}
		>
			Hi
		</ReactModal>
	);
};

export default Modal;
