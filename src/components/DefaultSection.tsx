import { useOnScreen } from "@/utils/hooks";
import React, { ReactNode } from "react";
import { useRef } from "react";

export const DefaultSection = ({ children }: { children: ReactNode }) => {
	const ref: any = useRef<HTMLDivElement>();
	const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-100px");
	return (
		<section
			ref={ref}
			className="min-h-screen grid place-items-center text-center max-w-2xl w-full"
		>
			{onScreen && children}
		</section>
	);
};
