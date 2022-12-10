import { useIntersectionObserver } from "@/utils/hooks";
import React, { ReactNode } from "react";
import { useRef } from "react";

export const DefaultSection = ({ children }: { children: ReactNode }) => {
	const ref: any = useRef<HTMLDivElement>();
	const entry = useIntersectionObserver(ref, {
		freezeOnceVisible: true,
		rootMargin: "-100px",
	});
	const isVisible = !!entry?.isIntersecting;
	return (
		<section
			ref={ref}
			className="min-h-screen grid place-items-center text-center max-w-2xl w-full"
		>
			{isVisible && children}
		</section>
	);
};

interface DefaultType {
	children: ReactNode;
	className?: string;
}

export const ContainerSection: React.FC<DefaultType> = ({
	children,
	className,
	...props
}) => {
	const ref: any = useRef<HTMLDivElement>();
	const entry = useIntersectionObserver(ref, {
		freezeOnceVisible: true,
	});
	const isVisible = !!entry?.isIntersecting;
	return (
		<section
			ref={ref}
			className={`mon max-w-2xl w-full ${className}`}
			{...props}
		>
			{isVisible && children}
		</section>
	);
};
