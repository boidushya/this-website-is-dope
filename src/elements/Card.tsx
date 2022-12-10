import React, { useRef, useState } from "react";

const Card: React.FC<React.HTMLProps<HTMLDivElement>> = props => {
	const ref: any = useRef<HTMLDivElement>();

	const [mousePosition, setMousePosition] = useState<{
		x: number | null;
		y: number | null;
	}>({
		x: null,
		y: null,
	});

	const handleMouseMove = (e: any) => {
		var bounds = e.currentTarget.getBoundingClientRect();

		var x = e.clientX - bounds.left;
		var y = e.clientY - bounds.top;
		setMousePosition({ x: x, y: y });
	};

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseOut={e => {
				e.currentTarget.style.setProperty("--opacity", "0");
			}}
			onMouseOver={e => {
				e.currentTarget.style.setProperty("--opacity", "1");
			}}
			style={{
				// @ts-ignore
				"--x": `${mousePosition.x}px`,
				"--y": `${mousePosition.y}px`,
				"--opacity": 0,
				...props.style,
			}}
			className={`flex-1 py-4 px-4 text-left rounded-2xl bg-gray-500 bg-opacity-[0.1] border border-gray-400 border-opacity-10 backdrop-blur-xl shadow-md w-fit space-y-4 card-wrapper max-w-xs ${props.className}`}
		>
			{props.children}
		</div>
	);
};

export default Card;
