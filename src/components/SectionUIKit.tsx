import Divider from "@/elements/Divider";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { ContainerSection, DefaultSection } from "@/elements/DefaultSection";
import Modal from "@/elements/Modal";
import Button from "@/elements/Button";

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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPromptOpen, setIsPromptOpen] = useState(false);
	const DUMMY_TEXT = `According to all known laws of aviation, there is no
						way a bee should be able to fly. Its wings are too small
						to get its fat little body off the ground. The bee, of
						course, flies anyway because bees don't care what humans
						think is impossible. Yellow, black. Yellow, black.
						Yellow, black. Yellow, black. Ooh, black and yellow!
						Let's shake it up a little. Barry! Breakfast is ready!
						Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan
						you believe this is happening? - I can't. I'll pick you
						up. Looking sharp. Use the stairs. Your father paid good
						money for those. Sorry. I'm excited. Here's the
						graduate. We're very proud of you, son. A perfect report
						card, all B's. Very proud. Ma! I got a thing going here.
						- You got lint on your fuzz. - Ow! That's me! - Wave to
						us! We'll be in row 118,000. - Bye! Barry, I told you,
						stop flying in the house! - Hey, Adam. - Hey, Barry. -
						Is that fuzz gel? - A little. Special day, graduation.
						Never thought I'd make it. Three days grade school,
						three days high school. Those were awkward. Three days
						college. I'm glad I took a day and hitchhiked around the
						hive. You did come back different. - Hi, Barry. - Artie,
						growing a mustache? Looks good. - Hear about Frankie? -
						Yeah. - You going to the funeral? - No, I'm not going.
						Everybody knows, sting someone, you die. Don't waste it
						on a squirrel. Such a hothead. I guess he could have
						just gotten out of the way. I love this incorporating an
						amusement park into our day. That's why we don't need
						vacations. Boy, quite a bit of pomp... under the
						circumstances. - Well, Adam, today we are men. - We are!
						- Bee-men.`;
	return (
		<ContainerSection>
			<Divider text="Modals/Prompts" />
			<div
				className="ReactModal__Content overflow-hidden block-animate-up"
				style={{
					// @ts-ignore
					"--start": "750ms",
					"--delay": `${0.25}s`,
				}}
			>
				<div className="flex justify-between py-6 px-8 text-lg font-secondary sticky bg-zinc-900 top-0 left-0 z-20 border-b border-gray-400 border-opacity-10">
					<span>Modal</span>
					<a className="cursor-pointer text-zinc-600 hover:text-zinc-400 transition-colors">
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
				<div className="w-fit relative max-h-[22rem px-8 py-12">
					<h4>This is a Modal</h4>
				</div>
			</div>
			<div
				className="ReactModal__Content overflow-hidden block-animate-up mt-4"
				style={{
					// @ts-ignore
					"--start": "750ms",
					"--delay": `${0.375}s`,
				}}
			>
				<div className="flex justify-between py-6 px-8 text-lg font-secondary sticky bg-zinc-900 top-0 left-0 z-20 border-b border-gray-400 border-opacity-10">
					<span>Prompt</span>
					<a className="cursor-pointer text-zinc-600 hover:text-zinc-400 transition-colors">
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
				<div className="w-fit relative max-h-[22rem px-8 py-12">
					<h4>This is a Prompt</h4>
				</div>
				<div className="mt-0 sticky flex flex-row-reverse gap-4 bottom-0 right-0 px-8 py-6 bg-zinc-900 border-t border-gray-400 border-opacity-10">
					<Button variant="primary">Okay</Button>
					<Button variant="secondary">Close</Button>
				</div>
			</div>
			<div className="flex gap-12 flex-wrap justify-center mt-8 ">
				<button
					onClick={() => setIsModalOpen(true)}
					style={{
						// Dummy
						// @ts-ignore
						"--start": "1.5s",
						"--delay": `${0.25}s`,
					}}
					className="block-animate-up bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center cursor-pointer"
				>
					Open modal
				</button>
				<Modal
					title="Bee Movie Script"
					handleClose={() => setIsModalOpen(false)}
					isOpen={isModalOpen}
				>
					<h4>{DUMMY_TEXT}</h4>
				</Modal>
				<button
					onClick={() => setIsPromptOpen(true)}
					style={{
						// @ts-ignore
						"--start": "1.5s",
						"--delay": `${0.375}s`,
					}}
					className="block-animate-up bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center cursor-pointer"
				>
					Open prompt
				</button>
				<Modal
					title="Bee Movie Script"
					isPrompt={true}
					handleClose={() => setIsPromptOpen(false)}
					isOpen={isPromptOpen}
				>
					<h4>{DUMMY_TEXT}</h4>
				</Modal>
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
