interface PropsTypes {
	text?: string;
}

const Divider: React.FC<PropsTypes> = ({ text }) => {
	return (
		<div className="relative py-16 text-zinc-500 fade-in">
			{text && (
				<p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 divider px-2">
					{text}
				</p>
			)}
			<hr className="w-full transition-[padding] border-zinc-400 border-opacity-20" />
		</div>
	);
};

export default Divider;
