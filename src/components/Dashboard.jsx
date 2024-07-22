import React, { useState, useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts' 
import { ChartSquareBarIcon, UserGroupIcon, ClockIcon, TrendingUpIcon, UsersIcon, BanIcon, ScaleIcon, ArrowLeftIcon, ArrowNarrowLeftIcon, ArrowSmLeftIcon, ArrowCircleRightIcon, ChevronDoubleDownIcon, ChartBarIcon, BriefcaseIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import { dayjsLocalizer } from 'react-big-calendar';
import LinesChart from '../LinesChart';


function Dashboard() {
  const handleCuadroClick = (titulo) => {
    alert(`Has hecho clic en ${titulo}`);
  };
 

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDateTime.toLocaleDateString('es-ES', options);
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Actualiza cada minuto (60000 milisegundos)
    return () => clearInterval(interval);
  }, []);

  const currentMinute = currentDateTime.getMinutes(); // 0-59
  // Obtener la hora actual
  const currentHour = currentDateTime.getHours(); // 0-23
  // Obtener el día de la semana actual
  const currentDay = (currentDateTime.getDay() + 6) % 7; // 0 = Lunes, 1 = Martes, ..., 6 = domingo

  // Generar un array con las horas del día
  const horasDelDia = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0') + ':00');
  //dias de la semana 
  const diasDeLaSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];


  return (
    
       <div className="grid grid-rows-4 gap-4 h-screen">
      {/* -----------------------------------------------------*/}
      <div class="row-start-1 col-start-1 rounded-2xl duration-500 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 relative flex flex-col bg-clip-border bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <ChartBarIcon className="w-16 h-9 mr-5" />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-600 font-thin">TOTAL DE PRACTICANTES</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">126</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">8 +</strong>&nbsp;EN LOS ULTIMOS MESES
            </p>
          </div>
        </div>

         {/* -----------------------------------------------------*/}
        <div class="row-start-1 col-start-2 rounded-2xl duration-500 hover:-translate-y-2 bg-white hover:shadow-xl shadow-gray-800 relative flex flex-col bg-clip-border text-gray-700 shadow-md">
            <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-red-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <ChevronDoubleDownIcon className="w-16 h-11 mr-5" />
            </div>
            <div class="p-4 text-right">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-600 font-thin">HOY ASISTIERON</p>
              <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">67</h4>
            </div>
            <div class="border-t border-blue-gray-50 p-4">
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong class="text-red-500">12 MENOS</strong>&nbsp; QUE AYER
              </p>
            </div>
        </div>
          
        {/* -----------------------------------------------------*/}
        <div class="rounded-2xl row-start-1 col-start-3 duration-500 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 relative flex flex-col bg-clip-border bg-white text-gray-700 shadow-md">
            <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <BriefcaseIcon className="w-16 h-11 mr-5" />
            </div>
            <div class="p-4 text-right">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-600 font-thin">PORSENTAJE DE PUNUALIDAD</p>
              <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">92%</h4>
            </div>
            <div class="border-t border-blue-gray-50 p-4">
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong class="text-green-500">14 % +</strong>&nbsp;EN LOS ULTIMOS DIAS
              </p>
            </div>
        </div>
         {/* -----------------------------------------------------*/}
        <div class="rounded-2xl row-start-1 col-start-4 duration-500 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 relative flex flex-col bg-clip-border bg-white text-gray-700 shadow-md">
            <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <AdjustmentsIcon className="w-16 h-11 mr-5" />
            </div>
            <div class="p-4 text-right">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-600 font-thin">PRACTICANTES ACTIVOS</p>
              <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">86</h4>
            </div>
            <div class="border-t border-blue-gray-50 p-4">
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong class="text-orange-500">- 8</strong>&nbsp;EN LAS ULTIMAS SEMANAS
              </p>
            </div>
        </div>
      
      {/* -----------------------------------------------------*/}
      
      <div className=" row-start-2 col-start-1 col-span-4 p-4 rounded-lg shadow-md before:absolute before:w-12 before:h-12 before:bg-orange-700 before:rounded-full before:blur-xl before:top-16 relative   flex flex-col justify-around items-center w-50 h-50 rounded-2xl shadow-inner shadow-gray-50 bg-neutral-500 text-gray-50 duration-500 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800" >
      <span className ="text-2xl">{formattedDate}</span>
        <span class="z-10 flex items-center text-8xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">{formattedTime}</span>
        <div class="text-gray-50 w-48 flex flex-row justify-evenly">
          <span class="text-xs font-bold">2024</span>
          <div class="flex flex-row items-center">
            <svg class="w-5 h-5 fill-red-500 animate-bounce" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path class="" d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z" fill-rule="evenodd">
            </path>
            </svg>
            <svg class="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path class="svg-fill-primary" d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z">
            </path>
            </svg>
            <svg class="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
            <path class="svg-fill-primary" d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z" fill-rule="evenodd">
            </path>
            </svg>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------------*/}
      
      <div className=" duration-500 bg-gray-900 hover:-translate-y-2 shadow-gray-800 row-start-3 col-start-3 row-span-2 col-span-2 p-8 bg-white rounded-lg">
        
          <LinesChart className="w-1 h-1" />
       
      </div>

      {/* -----------------------------------------------------*/}
      <div className="duration-500 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 row-start-3 col-start-1 row-span-2 col-span-2 p-2 bg-white rounded-lg shadow-md">
        <div className="flex flex-col h-full overflow-x-auto relative">
          <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-0 py-2 border border-gray-400">Hora</th>
              {diasDeLaSemana.map((dia, index) => (
                <th key={index} className="px-0 py-2 border border-gray-400">{dia}</th>
              ))}
            </tr>
          </thead>
            <tbody>
              {horasDelDia.map((hora, index) => (
                <tr key={index} className="border hover:bg-gray-100">
                  <td className="border border-gray-400 px-0 py-2">{hora}</td>
                  {Array.from({ length: 7 }).map((_, dayIndex) => (
                    <td key={dayIndex} className="border border-gray-400 px-1 py-2 relative">
                      {currentDay === dayIndex && currentHour === parseInt(hora) && (
                        <div className="h-0.5 bg-red-500 absolute bottom-0 left-0 right-0" style={{ top: `${(currentMinute / 60) * 100}%` }} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
