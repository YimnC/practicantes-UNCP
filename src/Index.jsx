import React, { useState, useEffect, useMemo } from 'react';
import DashboardTab from './components/Dashboard';
import PerfilTab from './components/Perfil';
import FormularioTab from './components/Formulario';
import TablaTab from './components/Tabla';
import RegistroTab from './components/Registro';
import { ChartSquareBarIcon, ClipboardIcon, TableIcon, UserIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import logoImage from './img/logo.png';
import profileImage from './img/perfil2.jpg';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: ChartSquareBarIcon, component: DashboardTab },
  { id: 'registro', label: 'Registro', icon: ArrowNarrowRightIcon, component: RegistroTab },
  { id: 'perfil', label: 'Perfil', icon: UserIcon, component: PerfilTab },
  { id: 'formulario', label: 'Formulario', icon: ClipboardIcon, component: FormularioTab },
  { id: 'tablas', label: 'Tablas', icon: TableIcon, component: TablaTab },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const changeTab = (tab) => {
    setActiveTab(tab);
    // Cerrar automáticamente la barra lateral en dispositivos móviles después de seleccionar un tab
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const TabIcon = tabs.find(tab => tab.id === activeTab)?.icon || ChartSquareBarIcon;
  const TabComponent = useMemo(() => tabs.find(tab => tab.id === activeTab)?.component || DashboardTab, [activeTab]);

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-y-auto">
      {/* Barra de navegación en la parte izquierda */}
      <div className={`w-full lg:w-1/6 bg-gray-900 text-white overflow-y-auto transition-all duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-4">
          <div className="w-full p-4 flex justify-center items-center">
            <img src={logoImage} alt="Logo" className="w-auto h-auto max-w-full max-h-25 m-6" />
          </div>
          {tabs.map(tab => (
            <div key={tab.id} className={`relative cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-600 flex items-center ${activeTab === tab.id ? 'bg-gray-700' : ''}`} onClick={() => changeTab(tab.id)}>
              <tab.icon className="w-8 h-8 mr-5" />
              <span className={`text-lg lg:text-2xl font-thin ${!sidebarOpen ? 'hidden lg:block' : ''}`}>{tab.label}</span>
              {activeTab === tab.id && <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Botón para minimizar/maximizar la barra lateral en móviles */}
      <div className="lg:hidden fixed top-0 right-0 p-4">
        <button
          className={`bg-gray-900 text-white p-2 rounded-md ${sidebarOpen ? 'hidden' : ''}`}
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Contenedor principal */}
      <div className="w-full lg:w-5/6 flex flex-col">
        {/* Barra en la parte superior derecha */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg lg:text-2xl font-semibold">Bienvenido</h1>
            <p className="text-sm lg:text-base">{currentDateTime.toLocaleString()}</p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img src={profileImage} alt="Perfil" className="w-full h-full object-cover" />
            </div>
            <span className="ml-3 text-sm lg:text-base">Jim Ramos H.</span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col flex-1 bg-gray-200 p-4 lg:p-8 overflow-y-auto">
          <TabComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
