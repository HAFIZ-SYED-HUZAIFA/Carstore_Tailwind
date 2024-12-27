import React from 'react';
import Image from 'next/image';

const Tesla = () => {
  return (
    <div>
      <h1 className="text-center text-uppercase font-cursive font-semibold text-3xl my-6">Tesla Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        
        <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/tesla/teslamodel s.jpg" alt="Model S" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Tesla</span>
            <h3 className="text-xl font-medium my-2">Model S</h3>
            <h2 className="text-2xl font-semibold text-blue-700">$94,990</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/tesla/tesla roadster.jpg" alt="Roadster" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Tesla</span>
            <h3 className="text-xl font-medium my-2">Roadster</h3>
            <h2 className="text-2xl font-semibold text-blue-700">$200,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/tesla/tesla moel y.jpg" alt="Model Y" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Tesla</span>
            <h3 className="text-xl font-medium my-2">Model Y</h3>
            <h2 className="text-2xl font-semibold text-blue-700">$49,990</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/tesla/tesla model x.jpg" alt="Model X" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Tesla</span>
            <h3 className="text-xl font-medium my-2">Model X</h3>
            <h2 className="text-2xl font-semibold text-blue-700">$109,990</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/tesla/tesla model 3.jpg" alt="Model 3" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Tesla</span>
            <h3 className="text-xl font-medium my-2">Model 3</h3>
            <h2 className="text-2xl font-semibold text-blue-700">$39,990</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/tesla/tesla cyber truck.jpg" alt="Cybertruck" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Tesla</span>
            <h3 className="text-xl font-medium my-2">Cybertruck</h3>
            <h2 className="text-2xl font-semibold text-blue-700">$59,990</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tesla;

