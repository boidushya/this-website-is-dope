import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo-white.svg";
import { RoughNotation } from "react-rough-notation";

const Nav = () => {
	const [show, setShow] = useState(false);

	const [top, setTop] = useState(false);
	const handleScroll = () => {
		const position = window.pageYOffset;
		position < 10 ? setTop(true) : setTop(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav
			className={`fixed w-full z-50 top-0 px-6 py-4 ${
				!top &&
				`backdrop-blur-3xl border-b-2 border-neutral-900 border-opacity-50`
			} flex justify-between items-center`}
		>
			<a href="/" className="w-fit">
				<img src={Logo} alt="Logo" className="w-12 h-12" />
			</a>
			<a
				onMouseOver={() => setShow(true)}
				onTouchStart={() => setShow(true)}
				onMouseOut={() => setShow(false)}
				onTouchEnd={() => setShow(false)}
				href="https://twitter.com/boidushya"
				target={`_blank`}
				rel="noreferrer"
				className="bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-bold rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md"
			>
				<RoughNotation
					type="underline"
					show={show}
					strokeWidth={3}
					animationDuration={400}
					animationDelay={0}
					padding={0}
					color="rgb(253 224 71 / 0.5)"
				>
					<span className="lg:inline-block hidden">
						Follow me on twitter dot com
					</span>
				</RoughNotation>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="lg:mr-0 mr-2"
				>
					<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
				</svg>
			</a>
		</nav>
	);
};

export default Nav;
