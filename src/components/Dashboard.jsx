import React, { useState, useEffect } from 'react';
import { ChartBarIcon, ChevronDoubleDownIcon, BriefcaseIcon, AdjustmentsIcon } from '@heroicons/react/solid';
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

  const currentMinute = currentDateTime.getMinutes(); // 0-59
  const currentHour = currentDateTime.getHours(); // 0-23
  const currentDay = (currentDateTime.getDay() + 6) % 7; // 0 = Lunes, 1 = Martes, ..., 6 = Domingo

  const horasDelDia = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0') + ':00');
  const diasDeLaSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-2xl flex flex-col relative hover:shadow-xl transition-transform transform hover:-translate-y-2">
        <div className="bg-blue-600 text-white rounded-full p-4 absolute -top-8 left-4 shadow-lg">
          <ChartBarIcon className="w-12 h-12" />
        </div>
        <div className="p-4 flex flex-col items-end">
          <p className="text-sm text-gray-600">TOTAL DE PRACTICANTES</p>
          <h4 className="text-2xl font-semibold text-gray-900">126</h4>
        </div>
        <div className="border-t border-gray-200 p-4">
          <p className="text-base text-gray-600">
            <strong className="text-green-500">8 +</strong> EN LOS ULTIMOS MESES
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-2xl flex flex-col relative hover:shadow-xl transition-transform transform hover:-translate-y-2">
        <div className="bg-red-600 text-white rounded-full p-4 absolute -top-8 left-4 shadow-lg">
          <ChevronDoubleDownIcon className="w-12 h-12" />
        </div>
        <div className="p-4 flex flex-col items-end">
          <p className="text-sm text-gray-600">HOY ASISTIERON</p>
          <h4 className="text-2xl font-semibold text-gray-900">67</h4>
        </div>
        <div className="border-t border-gray-200 p-4">
          <p className="text-base text-gray-600">
            <strong className="text-red-500">12 MENOS</strong> QUE AYER
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-2xl flex flex-col relative hover:shadow-xl transition-transform transform hover:-translate-y-2">
        <div className="bg-green-600 text-white rounded-full p-4 absolute -top-8 left-4 shadow-lg">
          <BriefcaseIcon className="w-12 h-12" />
        </div>
        <div className="p-4 flex flex-col items-end">
          <p className="text-sm text-gray-600">PORSENTAJE DE PUNUALIDAD</p>
          <h4 className="text-2xl font-semibold text-gray-900">92%</h4>
        </div>
        <div className="border-t border-gray-200 p-4">
          <p className="text-base text-gray-600">
            <strong className="text-green-500">14 % +</strong> EN LOS ULTIMOS DIAS
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-2xl flex flex-col relative hover:shadow-xl transition-transform transform hover:-translate-y-2">
        <div className="bg-orange-600 text-white rounded-full p-4 absolute -top-8 left-4 shadow-lg">
          <AdjustmentsIcon className="w-12 h-12" />
        </div>
        <div className="p-4 flex flex-col items-end">
          <p className="text-sm text-gray-600">PRACTICANTES ACTIVOS</p>
          <h4 className="text-2xl font-semibold text-gray-900">86</h4>
        </div>
        <div className="border-t border-gray-200 p-4">
          <p className="text-base text-gray-600">
            <strong className="text-orange-500">- 8</strong> EN LAS ULTIMAS SEMANAS
          </p>
        </div>
      </div>

      {/* Current Date and Time */}
      <div className="col-span-1 sm:col-span-2 md:col-span-4 bg-gray-900 text-gray-50 rounded-2xl flex flex-col items-center p-6">
        <span className="font-bold text-2xl">{formattedDate}</span>
        <span className="text-8xl font-bold text-amber-600">{formattedTime}</span>
        <div className="flex space-x-2 mt-4">
          <svg className="w-5 h-5 fill-red-500 animate-bounce" viewBox="0 0 100 100">
            <path d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 100 100">
            <path d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 100 100">
            <path d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z" />
          </svg>
        </div>
      </div>

      {/* Chart */}
      <div className="col-span-1 sm:col-span-2 md:col-span-4 bg-white p-4 rounded-lg shadow-md">
        <LinesChart />
      </div>

      {/* Table */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-2 py-1 border border-gray-400">Hora</th>
              {diasDeLaSemana.map((dia, index) => (
                <th key={index} className="px-2 py-1 border border-gray-400">{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horasDelDia.map((hora, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="border border-gray-400 px-2 py-1">{hora}</td>
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <td key={dayIndex} className="border border-gray-400 px-2 py-1 relative">
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
  );
}

export default Dashboard;
