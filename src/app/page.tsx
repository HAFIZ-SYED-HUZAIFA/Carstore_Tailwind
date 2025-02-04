import React from 'react';
import Image from 'next/image';

const Toyota = () => {
  return (
    <div>
      <h1 className="text-center text-uppercase font-cursive font-semibold text-3xl my-6">Toyota Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        
        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/toyota/toyocorolla.jpg" alt="Corolla" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Toyota</span>
            <h3 className="text-xl font-medium my-2">Corolla</h3>
            <h2 className="text-2xl font-semibold text-green-700">$23,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/toyota/toyocamry.jpg" alt="Camry" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Toyota</span>
            <h3 className="text-xl font-medium my-2">Camry</h3>
            <h2 className="text-2xl font-semibold text-green-700">$29,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/toyota/toyoyaris.jpg" alt="Yaris" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Toyota</span>
            <h3 className="text-xl font-medium my-2">Yaris</h3>
            <h2 className="text-2xl font-semibold text-green-700">$20,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/toyota/toyoland.jpg" alt="Land Cruiser" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Toyota</span>
            <h3 className="text-xl font-medium my-2">Land Cruiser</h3>
            <h2 className="text-2xl font-semibold text-green-700">$89,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/toyota/toyohilux.jpg" alt="Hilux" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Toyota</span>
            <h3 className="text-xl font-medium my-2">Hilux</h3>
            <h2 className="text-2xl font-semibold text-green-700">$50,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>

        <div className="bg-green-300 rounded-lg shadow-lg text-center mb-5 hover:scale-105 transition-transform duration-300">
          <Image src="/toyota/toyoprius.jpg" alt="Prius" width={350} height={250} className="w-full h-auto object-cover" />
          <div className="px-4 py-3">
            <span className="text-gray-600">Toyota</span>
            <h3 className="text-xl font-medium my-2">Prius</h3>
            <h2 className="text-2xl font-semibold text-green-700">$26,000</h2>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toyota;
