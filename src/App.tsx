import { useEffect, useRef, useState } from "react";
import "@/styles/styles.scss";
import { RoughNotation, RoughNotationProps } from "react-rough-notation";
import { Hero } from "@/components/Hero";
import Nav from "@/components/Nav";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";

const App: React.FC = () => {
	return (
		<>
			<Nav />
			<main className="min-w-screen max-w-screen grid place-items-center px-8 lg:px-0">
				<Hero />
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
			</main>
		</>
	);
};

export default App;
