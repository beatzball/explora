import React from 'react';

type DropdownOptions = { value: string; label: string }[];
interface SelectOptions extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOptions;
}
interface SelectChildren extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  options?: undefined;
}
const Dropdown: React.FC<SelectOptions | SelectChildren> = props => {
  const { children, options, className, ...select } = props;
  return (
    <div className={`relative ${className}`}>
      <select
        className='block w-full appearance-none bg-gray-200 border border-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        {...select}
      >
        {children ||
          (options &&
            options.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            )))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
