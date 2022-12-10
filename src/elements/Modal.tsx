import ReactModal from "react-modal";
import Button from "./Button";

ReactModal.setAppElement("#root");

const Modal: React.FC<{
	isOpen: boolean;
	handleClose: () => void;
	children?: React.ReactNode;
	isPrompt?: boolean;
	title?: string;
}> = ({ isOpen, handleClose, children, isPrompt = false, title = "Modal" }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			closeTimeoutMS={200}
			onRequestClose={handleClose}
			style={{
				overlay: {
					display: "grid",
					placeItems: "center",
				},
				content: {
					border: "",
					inset: "",
					width: "90%",
					maxHeight: "clamp(300px, 90vmin, 500px)",
					background: "",
					borderRadius: "",
					padding: "",
				},
			}}
			shouldCloseOnOverlayClick={true}
		>
			<div className="flex justify-between py-6 px-8 text-lg font-secondary sticky bg-zinc-900 top-0 left-0 z-20 border-b border-gray-400 border-opacity-10">
				<span>{title}</span>
				<a
					onClick={handleClose}
					className="cursor-pointer text-zinc-600 hover:text-zinc-400 transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</a>
			</div>
			<div className="w-fit relative px-8 py-8">{children}</div>
			{isPrompt && (
				<div className="mt-0 sticky flex flex-row-reverse gap-4 bottom-0 right-0 px-8 py-6 bg-zinc-900 border-t border-gray-400 border-opacity-10">
					<Button variant="primary" onClick={handleClose}>
						Okay
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</div>
			)}
		</ReactModal>
	);
};

export default Modal;
