import { classes } from '@/utils/helpers';

interface TableProps {
  headers: string[];
  data: string[][];
}

const Table = ({ headers, data }: TableProps) => {
  return (
    <div className='py-2 align-middle overflow-auto max-w-full'>
      <table className='w-full border-separate border-spacing-0'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope='col'
                className={classes({ string: 'sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-2 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter', condition: true }, { string: 'text-gray-900', condition: index === 0 }, { string: 'text-gray-500', condition: index > 0 })}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={classes({ string: 'border-b border-gray-200 whitespace-nowrap px-2 py-4 text-sm sm:table-cell', condition: true }, { string: 'font-medium text-gray-900', condition: colIndex === 0 }, { string: 'text-gray-500', condition: colIndex > 0 })}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
