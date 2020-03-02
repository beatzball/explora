import React from 'react';
import Dropdown from '../Dropdown';
import { Context } from '../../context/provider';

interface HeaderProps
  extends Pick<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {}

const Header = ({ onChange }: HeaderProps) => {
  const context = React.useContext(Context);

  return (
    <div className='p-5 text-white bg-primary-900 flex items-center'>
      <div className='flex-1'>
        <h1 className='text-xl flex items-center'>
          <span className='text-primary-500'>Command</span>
          <span className='px-1'>Explora</span>
        </h1>
        <p className='text-xs text-neutral-400'>
          Find the right commands without having to dig through the web.
        </p>
      </div>
      <Dropdown
        options={[
          { label: 'git', value: '/data/git.json' },
          { label: 'ex', value: '/data/ex.json' }
        ]}
        className='w-40'
        onChange={e => {
          context?.updateDataUrl(e.target.value);
        }}
      />
    </div>
  );
};

export default Header;
