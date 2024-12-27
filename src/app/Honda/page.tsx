import React from 'react';
import Image from 'next/image';

const Honda = () => {
  return (
    <div>
      <h1 className="text-center text-uppercase font-cursive font-semibold text-3xl my-6">Honda Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        
        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/honda/hondacivic.jpg" alt="Civic" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Honda</span>
            <h3 className="text-xl font-medium my-2">Civic</h3>
            <h2 className="text-2xl font-semibold text-green-700">$23,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/honda/accordhonda.jpg" alt="Accord" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Honda</span>
            <h3 className="text-xl font-medium my-2">Accord</h3>
            <h2 className="text-2xl font-semibold text-green-700">$28,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/honda/city.jpg" alt="City" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Honda</span>
            <h3 className="text-xl font-medium my-2">City</h3>
            <h2 className="text-2xl font-semibold text-green-700">$15,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/honda/hondahrv.jpg" alt="HR-V" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Honda</span>
            <h3 className="text-xl font-medium my-2">HR-V</h3>
            <h2 className="text-2xl font-semibold text-green-700">$25,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/honda/hondacrv.png" alt="CR-V" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Honda</span>
            <h3 className="text-xl font-medium my-2">CR-V</h3>
            <h2 className="text-2xl font-semibold text-green-700">$31,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/honda/hondafit.jpg" alt="Fit" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Honda</span>
            <h3 className="text-xl font-medium my-2">Fit</h3>
            <h2 className="text-2xl font-semibold text-green-700">$16,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Honda;

