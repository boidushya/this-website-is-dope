import "@/styles/styles.scss";
import { Hero } from "@/components/Hero";
import Nav from "@/components/Nav";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import SectionUIKit from "@/components/SectionUIKit";
import { cssTransition, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/toasts.scss";

const Slide = cssTransition({
	collapseDuration: 200,
	enter: "slideIn",
	exit: "slideOut",
});

const App: React.FC = () => {
	return (
		<>
			<ToastContainer
				theme="dark"
				transition={Slide}
				position="bottom-right"
			/>
			<Nav />
			<main className="min-w-screen max-w-screen grid place-items-center px-8 lg:px-0">
				<Hero />
				<Section1 />
				<Section2 />
				<SectionUIKit />
				<Section3 />
				<Section4 />
			</main>
		</>
	);
};

export default App;
