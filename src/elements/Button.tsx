import { useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	variant: "primary" | "secondary" | "tertiary";
}
const Button: React.FC<Props> = ({
	variant,
	onClick,
	children,
	className,
	style,
}) => {
	let baseClassName = useRef("");
	switch (variant) {
		case "primary":
			baseClassName.current =
				"bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center";
			break;
		case "secondary":
			baseClassName.current =
				"justify-center bg-transparent bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-50 hover:shadow-md";
			break;
		case "tertiary":
			baseClassName.current =
				"bg-gray-400 bg-opacity-25 border border-gray-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center";
			break;
		default:
			baseClassName.current =
				"bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center";
			break;
	}
	return (
		<button
			onClick={onClick}
			className={`${baseClassName.current} ${className}`}
			style={style}
		>
			{children}
		</button>
	);
};

export default Button;
