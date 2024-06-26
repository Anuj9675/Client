'use client'
import React, { useState, useEffect } from 'react';
import TournamentComponent from './Tournament';
import ScrimsComponent from './Scrims';

function Register() {
  const [selectedComponent, setSelectedComponent] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('selectedComponent')) || 'tournament'
  );

  const handleHeadingClick = (component) => {
    setSelectedComponent(component);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedComponent', component);
    }
  };

  useEffect(() => {
    // Clean up local storage if needed when the component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('selectedComponent');
      }
    };
  }, []);

  useEffect(() => {
    // If selectedComponent is not in localStorage, set it to 'tournament'
    if (typeof window !== 'undefined' && !localStorage.getItem('selectedComponent')) {
      setSelectedComponent('tournament');
    }
  }, []);

  return (
    <section id='live' className='py-8 sm:py-32'> 
      <div className="flex flex-col items-center justify-center m-4 sm:m-12">
        <div>
          <p className="text-white text-3xl sm:text-5xl font-bold m-6 mb-10">Tournaments</p>
        </div>
        <div className="flex flex-row w-full bg-slate-900">
          <button
            className={`flex-1 text-white lg:text-2xl font-bold p-4 cursor-pointer relative ${
              selectedComponent === 'tournament' ? 'selected ' : ''
            }`}
            onClick={() => handleHeadingClick('tournament')}
          >
            Tournaments
            {selectedComponent === 'tournament' && (
              <div className="selected-line bg-blue-500 h-1 w-full absolute bottom-0 left-0 "></div>
            )}
          </button>
          <button
            className={`flex-1 text-white lg:text-2xl font-bold p-4 cursor-pointer relative ${
              selectedComponent === 'scrims' ? 'selected ' : ''
            }`}
            onClick={() => handleHeadingClick('scrims')}
          >
            Scrims
            {selectedComponent === 'scrims' && (
              <div className="selected-line bg-blue-500 h-1 w-full absolute bottom-0 left-0"></div>
            )}
          </button>
        </div>

        <div className="w-full shadow shadow-slate-900 bg-transparent mt-4">
          {selectedComponent === 'tournament' && <TournamentComponent />}
          {selectedComponent === 'scrims' && <ScrimsComponent />}
        </div>
      </div>
    </section>
  );
}

export default Register;
