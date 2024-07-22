import React from 'react';
import PracticanteImage from '../img/log-1.jpg';
import profileImage from '../img/perfil3.jpg';
import { ChartSquareBarIcon, ClipboardIcon, PencilAltIcon, TableIcon, TrashIcon, UserIcon } from '@heroicons/react/solid'; 


function TablaTab() {
  return (
    <div className="grid gap-4 h-screen">
      <div class="text-xl font-bold text-start mb-4 text-black">
        <span>LISTA DE PRACTICANTES</span>
      </div>
      <div className="relative">
      <input
        placeholder="Search..."
        className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
        name="search"
        type="search"
      />
      <svg
        className="h-6 w-6 absolute top-3 right-3 text-gray-500 pointer-events-none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>


      <div className=" shadow-md">
        <div className="flex items-start justify-between p-2 font-bold ">
          <div className=''>ID</div>
          <div className='ml-4'>PERFIL</div>
          <div className='ml-8'>NOMBRE</div>
          <div className='ml-10'>APELLIDO</div>
          <div className='ml-12'>DNI</div>
          <div className='ml-12'>TELEFONO</div>
          <div className='ml-6  '>OFICINA</div>
          <div className='ml-5'>INGRESO</div>
          <div className='ml-'>ACCIONES</div>
          <div>
          </div>
        </div>
      </div>  

      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>1</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-start justify-start overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 0</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>2</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 01</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>3</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>alumno 02</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>4</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 03</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>5</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 04</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>6</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 05</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>7</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 06</div>
          <div>Ramos Huaman</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>8</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 07</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-gray-800 p-0 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4">
          <div>9</div>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src= {profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>Alumno 08</div>
          <div>Prado Alvarado</div>
          <div>12345678</div>
          <div>555-1234</div>
          <div>Oficina A</div>
          <div>8:00 am</div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <PencilAltIcon className="w-6 h-6" />
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 ml-2">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
   
    </div>
    
  );
}

export default TablaTab;
