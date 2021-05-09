import React from 'react';

import '../css/hero.css'
import {Input} from './widget';


const Hero  = ({bg}) => {

   return (
      <main className='flex items-center justify-center h-screen bg-purple-600 ' >
            <div className='container px-2 md:w-1/2 mx-auto text-center space-y-10'>
                 <h1 className='text-5xl text-white font-black'>Change starts here</h1>
                 <form>
                    <Input
                        btn='p-3 bg-white text-gray-400 hover:bg-blue-100'
                        cls='focus:outline-none focus:bg-blue-50'
                        icon='fa fa-search'
                        plc='Enter an address, neighborhood, city, or ZIP code' />
                 </form>
            </div>
      </main>

   ) ;
}


export default Hero ;
