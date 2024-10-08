import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faTelegram  } from '@fortawesome/free-brands-svg-icons';
import LanguageDropDown from './LanguageDropDown.tsx';

const NavBar: React.FC = () => {
  return (
    <div className='bg-white flex flex-row justify-between items-center w-full mb-5 pt-2 pb-2 text-lg'>
      <img src='/ofcLogo.jpg' alt='ofc_logo'/>
      <nav className="p-4 flex flex-row items-center">
        <a href="/" className="mr-4">Home</a>
        <a href="/about" className="mr-4">About</a>
        <a href="/events" className="mr-4">Events</a>
        <a href="/member" className="mr-4">Become a member!</a>
        <a href='/' className='mr-4'>
          <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
        </a>
        <a href='/' className='mr-4'>
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <LanguageDropDown/>
      </nav>
    </div>
  );
}

export default NavBar;
