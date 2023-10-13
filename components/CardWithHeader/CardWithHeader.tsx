interface CardWithHeaderProps {
	header: string;
	children: React.ReactNode;
}

const CardWithHeader = ({ header, children }: CardWithHeaderProps) => {
	return (
		<div className='divide-y divide-gray-200 overflow-hidden bg-white custom-outline'>
			<div className='px-4 py-5 sm:px-6'>
				<h3>{header}</h3>
			</div>
			<div className='px-4 py-5 sm:p-6'>{children}</div>
		</div>
	);
};

export default CardWithHeader;
