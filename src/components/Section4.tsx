import React, { useState } from "react";
import { DefaultSection } from "../elements/DefaultSection";
import { RoughNotation } from "react-rough-notation";

const Section4 = () => {
	const [show, setShow] = useState(false);
	return (
		<footer className="py-4 absolute bottom-0 grid place-items-center left-0 w-full px-8">
			<p className="text-gray-600 lg:divide-x divide-gray-700 tracking-tight text-center">
				<span className="inline-block pr-2">
					&copy; copyright 2022{" "}
					<a
						className="hover:text-white transition-colors duration-400"
						href={`/`}
					>
						this website is dope
					</a>
				</span>
				<span className="inline-block pl-2">
					made by{" "}
					<a
						className="hover:text-white transition-colors duration-400"
						href={`https://boidushya.com`}
						target="_blank"
						rel="noreferrer"
						onMouseOut={() => setShow(false)}
						onMouseOver={() => setShow(true)}
					>
						<RoughNotation
							type="underline"
							show={show}
							strokeWidth={3}
							animationDuration={400}
							animationDelay={0}
							color="rgb(253 224 71 / 0.25)"
						>
							<span>boidushya</span>
						</RoughNotation>{" "}
					</a>
				</span>
			</p>
		</footer>
	);
};

export default Section4;
