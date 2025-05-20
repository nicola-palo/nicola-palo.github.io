import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'

function App({ page, setPage }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {page === 'home' && (
        <div className="max-w-xl w-full flex items-center justify-center min-h-[60vh] mt-10 mx-2 sm:mx-4">
          <div className="w-full rounded-lg bg-transparent p-4 sm:p-8">
            <h1 className="mb-4 text-center font-bold" style={{color: '#6D5DE7'}}>Nicola Palo</h1>
            <h2 className="text-xl font-semibold mb-6 text-center" style={{color: '#6D5DE7'}}>Junior Developer | Recent Graduate</h2>
            <p className="mb-0  text-center">
              Neolaureato in Informatica con solide basi nella programmazione, in particolare Java. Durante il mio percorso ho completato diversi corsi che mi hanno fornito una visione completa del settore IT. Sono motivato a iniziare la mia carriera come sviluppatore e cerco un'opportunità di crescita professionale. Automunito e disponibile al trasferimento.
            </p>
          </div>
        </div>
      )}
      {page === 'contact' && (
        <div className="max-w-md w-full">
          <Contact />
        </div>
      )}
      {page === 'projects' && (
        <Project />
      )}
      <Footer />
    </div>
  )
}

export default App
