import React, { useState } from 'react';
import LanguageDropDown from './LanguageDropDown.tsx';
import InstagramLink from './InstagramLink';
import TelegramLink from './TelegramLink';

const NavBar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const linkStyling = (path: string) =>
    `${window.location.pathname === path ? 'text-red' : 'hover:underline decoration-2 hover:decoration-red'}`;

  return (
    <div className='bg-white flex flex-row justify-between items-center w-full mb-5 pt-2 pb-2 text-lg text-black'>
      <a href='/'>
        <img className='scale-75' src='/ofcLogo.jpg' alt='ofc_logo' />
      </a>
      <nav>
        <ol className='p-4 flex flex-row items-center'>
          <li>
            <a href='/' className={`mr-4 ${linkStyling('/')}`}>
              Home
            </a>
          </li>

          <li
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
            onClick={() => toggleDropdown(true)}
            className='relative mr-4 list-none'
          >
            <span>About</span>
            {dropdownVisible && (
              <ul className='absolute top-full bg-white shadow-md'>
                <li>
                  <a href='/trainings' className={`mr-4 ${linkStyling('/trainings')}`}>
                    Trainings
                  </a>
                </li>
                <li>
                  <a href='/association' className={`mr-4 ${linkStyling('/association')}`}>
                    Association
                  </a>
                </li>
                <li>
                  <a href='/faq' className={`mr-4 ${linkStyling('/faq')}`}>
                    FAQ
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            {' '}
            <a href='/events' className={`mr-4 ${linkStyling('/events')}`}>
              Events
            </a>
          </li>
          <li>
            <a href='/member' className={`mr-4 ${linkStyling('/member')}`}>
              Become a member!
            </a>
          </li>

          <li>
            <InstagramLink />
          </li>
          <li>
            <TelegramLink />
          </li>
          <li>
            <LanguageDropDown />
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default NavBar;
