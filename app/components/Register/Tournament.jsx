import React from 'react';

function TournamentComponent() {
  return (
    <div className="flex justify-center items-center h-fit p-4 text-white">
      <div>
      <h1 className='text-xl'>Currently, there are no tournaments scheduled. Please check the 'Scrims' section for daily Night scrims.</h1>
      <img
        src="../Banner.png"
        alt="pic"
        className="h-full w-full"></img>
      </div>
    </div>
  );
}

export default TournamentComponent;
