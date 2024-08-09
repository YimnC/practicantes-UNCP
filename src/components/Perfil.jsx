import React from 'react';
import { ChartSquareBarIcon, ClipboardIcon, TableIcon, UserIcon } from '@heroicons/react/solid';
import imageperfil from '../img/Fotos.jpeg';
import image from '../img/profile5.jpg';
import imagefond from '../img/UNCP.jpg';

const ProfilePage = () => {
  return (
    <div className="bg-cover bg-center flex items-center justify-center h-full w-full " >
      <div className="grid grid-cols-3 gap-6">
        <div class=" text-xl/8  text-center col-span-3 row-start- ">
          <p className='title-3'>- PERFIL DE USUARIO -</p><br />
        </div>
        <aside class="bg-white p-10 rounded-lg w-full max-w-lg font-mono row-start-2 col-start-1 shadow-gray-800 shadow-md">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 text-red-500">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text- text-black">ADMIN</p>
          </div>
          <div class="mt-4">
            <p class="text-black text-5xl">YIMN BRANDO RAMOS HUAMAN</p>
          </div>
        </aside>
        <aside class="bg-white text-white p-10 rounded-lg w-full max-w-lg font-mono row-start-3 col-start-1 shadow-gray-800 shadow-md">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 text-red-500">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-sm text-black">DATOS</p>
          </div>
          <div class="mt-4 text-black">
            <p class="text-2xl">DNI - 71219495</p>
            <p class="text-2xl">F. DE NACIMIENTO - 01/01/2024</p>
            <p class="text-2xl">OFICINA - INFORMATICA</p>
          </div>
        </aside>
        <aside class="bg-gray-100 text-white p-10 rounded-lg w-full max-w-lg font-mono row-start-2 col-start-3 shadow-gray-800 shadow-md">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2 text-red-500">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-sm text-black">CONTACTO</p>
          </div>
          <div class="mt-4 text-black">
            <p class="text-2xl">ejemplo@gmail.com</p>
            <p class="text-2xl">ejemplo@uncp.edu.pe</p>
            <p class="text-2xl">+51 987 654 321</p>
          </div>
        </aside>
        <div className="card flex items-center justify-center col-start-2 row-start-2 row-span-3 shadow-gray-800 shadow-md">
          
        </div>
        <div className=" flex items-center justify-center col-start-3 row-start-3 shadow-gray-800 shadow-md">
          <img className='rounded-lg' src={imagefond} alt="Logo" /> 
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
