
import React from 'react';
import Link from 'next/link';
import SundayDate from './SundayDate';

function TournamentComponent() {
  return (
    <div className="flex justify-center items-start h-fit p-4 text-white">
      <div className="container flex flex-wrap flex-row gap-4">
        <div className="lg:w-[32%] sm:w-full bg-gray-900 p-4 mb-4 rounded-t-lg">
          <div className="relative w-full">
            <img
              src="../SSB.png"
              alt="Placeholder"
              className=" w-full h-full object-contain rounded-t-lg"
            />
          </div>
          <h1 className="text-2xl text-white font-normal my-2">Sunday Showdown</h1>
          <div className="">
            <div className='flex flex-row justify-between'>
              <SundayDate />
              <p className='text-sm'>Time: 08:00 PM</p>
            </div>
          </div>
          <div className='mt-3'>
          <Link href="https://chat.whatsapp.com/Kty23pzrxgV4gdvbMHZ8Nt"  className="bg-blue-500 text-white px-3 py-2 rounded text-sm">
              Register
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}export default TournamentComponent;