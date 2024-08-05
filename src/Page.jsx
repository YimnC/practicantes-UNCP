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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const changeTab = (tab) => {
    setActiveTab(tab);
    // Cerrar automáticamente la barra lateral en dispositivos móviles después de seleccionar un tab
    if (!sidebarOpen && !isSidebarVisible) {
      setIsSidebarVisible(true);
    }
  };

  const toggleSidebars = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const TabIcon = tabs.find(tab => tab.id === activeTab)?.icon || ChartSquareBarIcon;
  const TabComponent = useMemo(() => tabs.find(tab => tab.id === activeTab)?.component || DashboardTab, [activeTab]);

  return (
    <div className='grid-layout'>
      {/* Encabezado */}
      <header className='page-header'>
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <div>
            <button onClick={toggleSidebars} className="toggle-button">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
          <div className='saludo-hora'>
            <h1 className="text-lg lg:text-2xl font-semibold">Bienvenido</h1>
            <p className="text-sm lg:text-base">{currentDateTime.toLocaleString()}</p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img src={profileImage} alt="Perfil" className="w-full h-full object-cover" />
            </div>
            <span className="ml-3 text-sm lg:text-base">Yim Ramos Huaman</span>
          </div>
        </div>
      </header>
      
      {/* Contenido principal */}
      <main className='page-main bg-gray-900'>
        <nav className={`sidebar page-nav w-full bg-gray-900 text-white ${isSidebarVisible ? 'visible' : 'hidden'}`}>
          <div className={`w-full bg-gray-900 text-white`}>
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
        </nav>

        <section className='page-section w-full'>
          {/* Contenido principal */}
          <div className="main-component p-8 w-full">
            <TabComponent />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
