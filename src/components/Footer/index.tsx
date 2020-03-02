import React from 'react';

const Footer = () => {
  return (
    <footer className='flex justify-center'>
      <a
        className='items-center py-3 px-5 flex hover:text-secondary-600'
        href='https://github.com/beatzball/explora'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          alt='github'
          height='32'
          width='32'
          src='https://unpkg.com/simple-icons@latest/icons/github.svg'
        />
        <h2 className='text-md px-2'>by @beatzball</h2>
      </a>
    </footer>
  );
};

export default Footer;
