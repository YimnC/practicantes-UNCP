import React from 'react';
import PracticanteImage from '../img/log-1.jpg';
import profileImage from '../img/perfil3.jpg';
import { ChartSquareBarIcon, ClipboardIcon, PencilAltIcon, TableIcon, TrashIcon, UserIcon } from '@heroicons/react/solid'; 


function RegistroTab() {
  return (
    <div className='grid grid-cols-3 gap-12'>
    <div class="input__container items-center row-start-4 col-start-2">
        <div class="shadow__input"></div>
        <button class="input__button__shadow">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
            width="20px"
            height="20px"
            >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            ></path>
            </svg>
        </button>
        <input
            type="text"
            name="username"
            class="input__search"
            placeholder=""
        /><br />
        
    </div>
    
    <div className='row-start-6 col-start-2 items-center'>
    <button
    class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
    >REGISTRO    </button>

    </div>
  </div>

    
  );
}

export default RegistroTab;
