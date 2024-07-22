import React from 'react';
import { ChartSquareBarIcon, UserGroupIcon, ClockIcon, TrendingUpIcon, UsersIcon, BanIcon, ScaleIcon, ArrowLeftIcon, ArrowNarrowLeftIcon, ArrowSmLeftIcon, ArrowCircleRightIcon, ChevronDoubleDownIcon, ChartBarIcon, BriefcaseIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import PracticanteImage from '../img/log-1.jpg';
import '../App.css'; 
import { useState } from 'react';

function FormularioTab() {

  return (     
    <form className="form flex w-full h-full rounded-lg p-12 z-10 bg-gray-100 relative" >
      <div className="flex flex-wrap justify-center">
        {/* Columna 1: Imagen */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="w-max  mx-auto">
            <img className='rounded-lg' src={PracticanteImage} alt="Practicante" style={{ width: '400%', height: '600px' }} />
          </div>
        </div>

        {/* Columna 2: Formulario */}
        <div className="w-full md:w-2/3 px-4 flex items-center jusify-center flex-col">
          <div className="form-title text-center mb-4"><span>Registro de Practicante</span></div>

          <div className="title-2 text-center mb-4"><span>UNCP</span></div>

          <section className="bg-stars col-start-1">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>
          

          <div class="grid grid-cols-2 gap-5">

            <div class="flex row-start-1 col-start-1">
              <div class="w-[250px] relative">
                <input
                  class="text-white peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-300 focus:border-gray-100"
                  type="text" />
                <label class="absolute text-gray-300 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gray-100">
                  Nombres
                </label>
              </div>
            </div>
            <div class="flex row-start-1 col-start-2">
            <div class="w-[250px] relative">
              <input
                class="text-white peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-300 focus:border-gray-100"
                type="text" />
              <label class="absolute text-gray-300 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gray-100">
                Apellidos
              </label>
            </div>
          </div>
          <div class="flex row-start-2 col-start-1">
            <div class="w-[250px] relative">
              <input
                class="text-white peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-300 focus:border-gray-100"
                type="text" />
              <label class="absolute text-gray-300 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gray-100">
                DNI
              </label>
            </div>
          </div>
          <div class="flex row-start-2 col-start-2">
            <div class="w-[250px] relative">
              <input
                class="text-white peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-300 focus:border-gray-100"
                type="text" />
              <label class="absolute text-gray-300 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gray-100">
                Correo
              </label>
            </div>
          </div>
          <div class="flex row-start-3 col-start-1">
            <div class="w-[250px] relative">
              <input
                class="text-white peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-300 focus:border-gray-100"
                type="text" />
              <label class="absolute text-gray-300 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gray-100">
                Celular
              </label>
            </div>
          </div>
          <div class="flex row-start-3 col-start-2">
            <div class="w-[250px] relative">
              <input
                class="text-white peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-300 focus:border-gray-100"
                type="text" />
              <label class="absolute text-gray-300 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gray-100">
                Oficina
              </label>
            </div>
          </div>
          <div class="flex row-start-4 col-start-1 row-span-2">
            <div class="w-[250px] relative ">
            <div class="grid w-full max-w-xs items-center gap-1.5 ">
              <input id="picture" type="file" class=" flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
            </div>
            </div>
          </div>
          </div><br />
          <button type="submit" className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">
            <span className="sign-text">Registro</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormularioTab;
