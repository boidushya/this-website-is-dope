import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useEffect } from "react";
import { DefaultSection } from "./DefaultSection";

const Section1 = () => {
	const text = "No Fancy Illustrations".split(" ");
	const subText =
		"B-but everything's so Smooth and Catchy A-AND CRISPY !??".split(" ");

	return (
		<DefaultSection>
			<div>
				<h1 className="overflow-hidden text-4xl leading-loose">
					{text.map((word, index) => (
						<span
							key={index}
							className="text-animate-up whitespace-pre inline-block overflow-hidden"
							style={{
								// @ts-ignore
								"--start": "150ms",
								"--delay": `${index * 0.1}s`,
							}}
						>
							{index === 2 ? (
								<RoughNotation
									type="underline"
									show={true}
									strokeWidth={3}
									animationDuration={400}
									animationDelay={1000}
									color="rgb(253 224 71 / 1)"
								>
									{word}
								</RoughNotation>
							) : (
								word
							)}
							{index !== text.length - 1 && " "}
						</span>
					))}
				</h1>
				<h1 className="overflow-hidden text-2xl leading-loose text-gray-400">
					{subText.map((word, index) => (
						<span
							key={index}
							className="text-animate-up whitespace-pre inline-block"
							style={{
								// @ts-ignore
								"--start": "600ms",
								"--delay": `${index * 0.1}s`,
							}}
						>
							{index === 3 || index === 5 || index === 7 ? (
								<span className="font-serif italic text-white text-4xl">
									{word}
								</span>
							) : (
								word
							)}
							{index !== subText.length - 1 && " "}
						</span>
					))}
				</h1>
			</div>
		</DefaultSection>
	);
};

export default Section1;
