interface CardWithHeaderAndFooterProps {
	header: React.ReactNode;
	children: React.ReactNode;
	footer: React.ReactNode;
}

const CardWithHeaderAndFooter = ({
	header,
	children,
	footer,
}: CardWithHeaderAndFooterProps) => {
	return (
		<div className='divide-y divide-gray-200 overflow-hidden bg-white custom-outline'>
			<div className='px-4 py-5 sm:px-6'>{header}</div>
			<div className='px-4 py-5 sm:p-6'>{children}</div>
			<div className='px-4 py-4 sm:px-6'>{footer}</div>
		</div>
	);
};

export default CardWithHeaderAndFooter;
