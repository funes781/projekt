import { useState } from 'react'

import './App.css'

function App() {

  return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
  )
}

function AppContent(){
  return (
    <div className={`min-h-screen w-full select-none bg-white`}>
      
    </div>
  );
}

export default App
