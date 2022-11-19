import React from "react";
import { RoughNotation } from "react-rough-notation";
import { DefaultSection } from "./DefaultSection";

const Section3 = () => {
	return (
		<DefaultSection>
			<div className="extra-wrapper">
				<div
					style={{
						// @ts-ignore
						"--opacity": "0",
					}}
					className={`relative z-10 text-xl text-gray-400 py-12 px-8 rounded-2xl bg-[var(--box-bg)] border border-gray-400 border-opacity-10 shadow-md space-y-4 w-full text-center`}
				>
					Yes I'm{" "}
					<span className="font-serif italic text-4xl text-white">
						<RoughNotation
							type="bracket"
							brackets={["left", "right"]}
							show={true}
							strokeWidth={3}
							animationDuration={400}
							animationDelay={1000}
							color="rgb(253 224 71 / 0.5)"
						>
							Extra Asf ✨
						</RoughNotation>
					</span>{" "}
					and I'm not sorry
					<p className="text-gray-500 text-base">
						Ok gotta go now byeee peace ✌️
					</p>
				</div>
			</div>
		</DefaultSection>
	);
};

export default Section3;
