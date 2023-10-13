interface ColumnsProps {
  children: React.ReactNode;
  rightColumn: React.ReactNode;
}

const Columns = ({ children, rightColumn }: ColumnsProps) => {
  return (
    <div className='mx-auto w-full max-w-7xl grow lg:flex xl:px-2'>
      <div className='flex-1 xl:flex'>
        <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>{children}</div>
      </div>
      <div className='shrink-0 px-4 py-6 sm:px-6 lg:w-96 lg:pr-8 xl:pr-6'>{rightColumn}</div>
    </div>
  );
};

export default Columns;
