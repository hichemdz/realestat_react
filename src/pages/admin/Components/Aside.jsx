import React,{useContext} from 'react';

import {Item} from './widget';

import Local from '../context';

const Aisde = ()  => {
 const {__,changeLng,lng} = useContext(Local);
  return <aside  className='overflow-auto w-64 bg-gray-800 h-screen'>

        <header className='flex bg-gray-700 text-white items-center space-x-2 px-5 py-5'>
           <div className='w-12 h-12  rounded-full flex items-center justify-center bg-gray-600'>
              <i className='fas fa-user text-xl'> </i>

           </div>
           <p className=' text-lg font-black'>Realsatuts</p>
        </header>

        <div className='p-5 space-y-5'>
           <h3 className='text-gray-400'> Menu</h3>
           <ul className='text-white space-y-3'>

           <Item text={__('dash')}  icon='fab fa-accusoft' path=""/>
           <Item text={__('users')}  icon='fas fa-users' path=""/>
           <Item text='dashboard'  icon='fab fa-accusoft' path=""/>
           <Item text='dashboard'  icon='fab fa-accusoft' path=""/>
            <Item text='dashboard'  icon='fab fa-accusoft' path=""/>

           </ul>
        </div>

       </aside>;

}

export default Aisde;
