import {
	useState,
	useEffect,
	useRef,
	MutableRefObject,
	RefObject,
} from "react";
// Hook

// export const useIntersectionObserver = (
// 	ref: RefObject<HTMLElement>,
// 	{ threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
// ) => {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const [entry, setEntry] = useState<any>(null);

// 	const frozen = entry?.isIntersecting && freezeOnceVisible;

// 	const updateEntry: (entry: IntersectionObserverEntry[]) => void = ([
// 		entry,
// 	]) => {
// 		setEntry(entry);
// 	};

// 	useEffect(() => {
// 		const node = ref?.current;
// 		const hasIOSupport = !!window.IntersectionObserver;

// 		if (!hasIOSupport || frozen || !node) return;

// 		const observerParams = { threshold, root, rootMargin };
// 		const observer = new IntersectionObserver(updateEntry, observerParams);

// 		observer.observe(node);

// 		return () => observer.disconnect();
// 	}, [ref, threshold, root, rootMargin, frozen]);

// 	return entry;
// };

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

interface Args extends IntersectionObserverInit {
	freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
	elementRef: RefObject<Element>,
	{
		threshold = 0,
		root = null,
		rootMargin = "0%",
		freezeOnceVisible = false,
	}: Args
): IntersectionObserverEntry | undefined => {
	const [entry, setEntry] = useState<IntersectionObserverEntry>();

	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = elementRef?.current; // DOM Ref
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observerParams = { threshold, root, rootMargin };
		const observer = new IntersectionObserver(updateEntry, observerParams);

		observer.observe(node);

		return () => observer.disconnect();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		elementRef?.current,
		JSON.stringify(threshold),
		root,
		rootMargin,
		frozen,
	]);

	return entry;
};
