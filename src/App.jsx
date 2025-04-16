import { useState } from 'react'

import Navbar from './components/Pages/Navbar';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  return (
    <div className={`min-h-screen w-full select-none bg-white`}>
      <Navbar />
    </div>
  );
}

export default App
