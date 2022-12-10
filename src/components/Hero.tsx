import React from "react";
import { RoughNotation } from "react-rough-notation";
import { useRef } from "react";
import { DefaultSection } from "../elements/DefaultSection";

export const Hero = () => {
	const textSub = "Ok so, fyi".split(" ");
	const textMain = "This Website Is".split(" ");
	return (
		<DefaultSection>
			<div className="text-left">
				<p className="overflow-hidden">
					{textSub.map((word, index) => (
						<span
							key={index}
							className="text-animate-up whitespace-pre"
							style={{
								// @ts-ignore
								"--start": "150ms",
								"--delay": `${index * 0.1}s`,
							}}
						>
							{word}
							{index !== textSub.length - 1 && " "}
						</span>
					))}
				</p>
				<h1 className="text-5xl font-bold overflow-hidden">
					{textMain.map((word, index) => (
						<span
							key={index}
							className="whitespace-pre text-animate-up "
							style={{
								// @ts-ignore
								"--start": "400ms",
								"--delay": `${index * 0.1}s`,
							}}
						>
							{word}{" "}
						</span>
					))}
					<RoughNotation
						type="box"
						show={true}
						strokeWidth={3}
						animationDuration={400}
						animationDelay={1000}
						color="rgb(253 224 71 / 1)"
					>
						<span className="font-serif italic main-text-in">
							Dope
						</span>
					</RoughNotation>
				</h1>
			</div>
		</DefaultSection>
	);
};
