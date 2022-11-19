import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useEffect } from "react";
import { DefaultSection } from "./DefaultSection";
import Card from "./Card";

const Section2 = () => {
	const text =
		"I'll throw in a few cool looking cards as well cuz why not?".split(
			" "
		);

	return (
		<DefaultSection>
			<div>
				<h1 className="overflow-hidden text-2xl leading-loose text-gray-400">
					{text.map((word, index) => (
						<span
							key={index}
							className="text-animate-up whitespace-pre inline-block"
							style={{
								// @ts-ignore
								"--start": "600ms",
								"--delay": `${index * 0.075}s`,
							}}
						>
							{index === 7 ? (
								<RoughNotation
									type="underline"
									show={true}
									strokeWidth={3}
									animationDuration={400}
									animationDelay={1500}
									color="rgb(253 224 71 / 1)"
								>
									<span className="text-white font-bold ">
										{word}
									</span>
								</RoughNotation>
							) : (
								word
							)}
							{index !== text.length - 1 && " "}
						</span>
					))}
				</h1>
				<div className="pt-4 flex gap-4 flex-wrap relative overflow-hidden">
					<Card
						className="text-animate-up"
						style={{
							// @ts-ignore
							"--start": "750ms",
							"--delay": `${1}s`,
						}}
					>
						<div className="rounded-full bg-gray-500 bg-opacity-10 border border-gray-400 border-opacity-10 w-fit p-2 text-gray-400">
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
									d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
								/>
							</svg>
						</div>
						<div>
							<h2 className="fleading-normal text-xl font-bold text-gray-300">
								What?
							</h2>
							<p className="text-gray-500 max-w-xs mt-0.5">
								C'mon there's no way its this easy. What''s the
								catch?
							</p>
						</div>
					</Card>
					<Card
						className="text-animate-up"
						style={{
							// @ts-ignore
							"--start": "750ms",
							"--delay": `${1.075}s`,
						}}
					>
						<div className="rounded-full bg-gray-500 bg-opacity-10 border border-gray-400 border-opacity-10 w-fit p-2 text-gray-400">
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
									d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
								/>
							</svg>
						</div>
						<div>
							<h2 className="leading-normal text-xl font-bold text-gray-300">
								ANOTHER ONE??
							</h2>
							<p className="text-gray-500 max-w-xs mt-0.5">
								Hell naw now you're just flexin' man. I'm{" "}
								<RoughNotation
									type="circle"
									show={true}
									strokeWidth={3}
									animationDuration={400}
									animationDelay={2500}
									color="rgb(253 224 71 / 0.125)"
								>
									<span className="font-bold ">OUT!</span>
								</RoughNotation>
							</p>
						</div>
					</Card>
				</div>
				<div className="pt-4 flex gap-4 flex-wrap relative overflow-hidden">
					<Card
						className="text-animate-up"
						style={{
							// @ts-ignore
							"--start": "875ms",
							"--delay": `${1}s`,
						}}
					>
						<div className="rounded-full bg-gray-500 bg-opacity-10 border border-gray-400 border-opacity-10 w-fit p-2 text-gray-400">
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
									d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
								/>
							</svg>
						</div>
						<div>
							<h2 className="leading-normal text-xl font-bold text-gray-300">
								Ok I'm not gonna lie
							</h2>
							<p className="text-gray-500 max-w-xs mt-0.5">
								I'm running out of ideas for text to put here.
							</p>
						</div>
					</Card>
					<Card
						className="text-animate-up w-full"
						style={{
							// @ts-ignore
							"--start": "1s",
							"--delay": `${1.075}s`,
						}}
					>
						<div className="rounded-full bg-gray-500 bg-opacity-10 border border-gray-400 border-opacity-10 w-fit p-2 text-gray-400">
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
									d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
								/>
							</svg>
						</div>
						<div>
							<h2 className="leading-normal text-xl font-bold text-gray-300">
								BUT...
							</h2>
							<p className="text-gray-500 max-w-xs mt-0.5">
								You get the{" "}
								<RoughNotation
									type="underline"
									show={true}
									strokeWidth={3}
									animationDuration={400}
									animationDelay={2500}
									color="rgb(253 224 71 / 0.25)"
								>
									<span>point</span>
								</RoughNotation>{" "}
								right?
							</p>
						</div>
					</Card>
				</div>
			</div>
		</DefaultSection>
	);
};

export default Section2;
