import { useState, useEffect, useRef, MutableRefObject } from "react";
// Hook
export function useOnScreen<T extends Element>(
	ref: MutableRefObject<T>,
	rootMargin: string = "0px"
): boolean {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState<boolean>(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting);
			},
			{
				rootMargin,
			}
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			observer.unobserve(ref.current);
		};
	}, []); // Empty array ensures that effect is only run on mount and unmount
	return isIntersecting;
}

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({
		x: null,
		y: null,
	});
	useEffect(() => {
		const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	return mousePosition;
};
export default useMousePosition;
