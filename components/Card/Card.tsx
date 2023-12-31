interface CardProps {
	children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
	return (
		<div className='overflow-hidden bg-white custom-outline'>
			<div className='px-4 py-5 sm:p-6'>{children}</div>
		</div>
	);
};

export default Card;
