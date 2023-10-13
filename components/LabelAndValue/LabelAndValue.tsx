import React from 'react';

const LabelAndValue = ({ label, value }: { label: string; value: string | number | undefined }) => (
  <React.Fragment>
    {value === undefined ? null : (
      <div className='flex flex-col gap-2'>
        <p className='font-medium text-gray-800'>{label}</p>
        <p>{value}</p>
      </div>
    )}
  </React.Fragment>
);

export default LabelAndValue;
