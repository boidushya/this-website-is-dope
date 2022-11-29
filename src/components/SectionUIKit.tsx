import Divider from "@/elements/Divider";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { ContainerSection, DefaultSection } from "@/elements/DefaultSection";
import Modal from "@/elements/Modal";

const HeadingSection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	return (
		<ContainerSection className="w-full">
			<Divider text="Heading" />
			<div className="space-y-1 mx-auto w-fit">
				{Array(6)
					.fill(0)
					.map((_, index) => {
						const H = `h${
							index + 1
						}` as keyof JSX.IntrinsicElements;
						return (
							<H key={index}>
								<span
									className="text-animate-up overflow-hidden whitespace-pre"
									style={{
										// @ts-ignore
										"--start": `${startDelay}ms`,
										"--delay": `${index * 0.1}s`,
									}}
								>
									Headline{" "}
								</span>
								<span
									className="text-animate-up overflow-hidden"
									style={{
										// @ts-ignore
										"--start": `${startDelay + 100}ms`,
										"--delay": `${index * 0.1}s`,
									}}
								>
									{index + 1}
								</span>
							</H>
						);
					})}
			</div>
		</ContainerSection>
	);
};

const FontFamilySection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	return (
		<ContainerSection>
			<Divider text="Font Family" />
			<div className="space-y-12 mx-auto w-fit">
				<div
					className="space-y-1 block-animate-up "
					style={{
						// @ts-ignore
						"--start": `${startDelay}ms`,
						"--delay": "50ms",
					}}
				>
					<h1>AaBbCc</h1>
					<h4 className="font-tertiary">1234567890</h4>
					<h6 className="font-secondary text-sm font-extra">
						SPECIMEN [Avenir (Mac) / Manrope]
					</h6>
				</div>
				<div
					className="space-y-1 block-animate-up"
					style={{
						// @ts-ignore
						"--start": `${startDelay}ms`,
						"--delay": "150ms",
					}}
				>
					<h1 className="font-serif italic bold">AaBbCc</h1>
					<h4 className="font-serif bold font-tertiary">
						1234567890
					</h4>
					<h6 className="font-serif italic bold font-secondary text-sm font-extra">
						SPECIMEN [Playfair Display]
					</h6>
				</div>
			</div>
		</ContainerSection>
	);
};

const FontWeightSection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	const weightMap = {
		"200": "font-extralight",
		"300": "font-light",
		"400": "font-normal",
		"500": "font-medium",
		"600": "font-semibold",
		"700": "bold",
		"800": "font-extrabold",
	};
	return (
		<ContainerSection>
			<Divider text="Font Weight" />
			<div className="flex gap-12 flex-wrap justify-center">
				{Object.keys(weightMap).map((weight, index) => {
					return (
						<h1
							key={index}
							className={`text-animate-up ${
								weightMap[weight as keyof typeof weightMap]
							}`}
							style={{
								// @ts-ignore
								"--start": `${startDelay}ms`,
								"--delay": `${index * 0.1}s`,
							}}
						>
							{weight}
						</h1>
					);
				})}
			</div>
		</ContainerSection>
	);
};

const ModalSection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<ContainerSection>
			<Divider text="Modals" />
			<div className="flex gap-12 flex-wrap justify-center">
				<button
					onClick={() => setIsOpen(true)}
					className="bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center cursor-pointer"
				>
					Open modal
				</button>
				<Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
			</div>
		</ContainerSection>
	);
};

const SectionUIKit = () => {
	return (
		<div>
			<HeadingSection startDelay={150} />
			<FontFamilySection startDelay={1000} />
			<FontWeightSection startDelay={1200} />
			<ModalSection startDelay={1400} />
		</div>
	);
};

export default SectionUIKit;
