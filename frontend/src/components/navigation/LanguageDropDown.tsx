import React from 'react';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setLanguage, $language } from '../../stores/languageStore.ts';
import { useStore } from '@nanostores/react';

const LanguageDropDown: React.FC = () => {
  const languages: string[] = ['EN', 'FIN'];
  const language = useStore($language)
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <div className='flex items-center justify-center'>
      <FontAwesomeIcon icon={faGlobe} size="xl" className='mr-2'/>
        <select
          value={language}
          className='
            appearance-none
            bg-transparent
            p-1
            outline-none
            hover:text-red-600
          '
          onChange={handleLanguageChange}
        >
          {languages.map((name, index) => (
            <option key={index} value={name} className='bg-transparent'>
              {name}
            </option>
          ))}
        </select>
    </div>
  );
}

export default LanguageDropDown;
