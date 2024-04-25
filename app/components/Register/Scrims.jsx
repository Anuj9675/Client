
import React from 'react';
import Link from 'next/link';

const match = [
  {
    id: 1,
    image: "../M1.png",
    title: "ERANGLE",
    li: "https://chat.whatsapp.com/Kty23pzrxgV4gdvbMHZ8Nt",
    rt: "04:00 PM to 06:00 PM",
    st: "09:00 PM",
  },
  {
    id: 2,
    image: "../M2.png",
    title: "MIRAMAR",
    li: "https://chat.whatsapp.com/Kty23pzrxgV4gdvbMHZ8Nt",
    rt: "04:00 PM to 06:00 PM",
    st: "10:00 PM",
  },
];

function ScrimsComponent() {

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-lg sm:text-2xl font-bold m-2 text-center">Daily Night Scrims</h1>
      <div className="flex justify-center items-start h-fit p-4 text-white">
        <div className="container flex flex-wrap flex-row gap-4">
          {match.map(({ id, image, title, li, rt, st }) => (
            <div key={id} className="lg:w-[32%] sm:w-full bg-gray-900 p-4 mb-4 rounded-t-lg">
              <div className="relative w-full">
                <img
                  src={image}
                  alt="Placeholder"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <h1 className="text-2xl text-white font-normal my-2">{title}</h1>
              <div className='flex flex-col gap-1'>
                <p className='text-sm'>Registration Timing: {rt} </p>
                <p className='text-sm'>Start Time: {st}</p>
              </div>

              <div className='mt-3'>
                <Link href={li} className="bg-blue-500  text-white px-3 py-2 rounded text-sm">
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  );
}

export default ScrimsComponent;
