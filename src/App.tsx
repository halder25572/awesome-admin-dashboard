
import { useState } from 'react';
import './App.css'
import MainLayout from './components/layout/MainLayout'
import { SidebarProvider } from './context/SidebarContext'
import Dashboard from './Pages/Dashboard'

function App() {
const [activeMenu, setActiveMenu] = useState<string>('Dashboard');

  return (
    <SidebarProvider>
      <MainLayout activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
        <Dashboard />
      </MainLayout>
    </SidebarProvider>
  )
}

export default App
