import React from 'react'

import {Item , MenuItem} from './widget';

export default function Header() {

    const data = [

        {
          id:1,
          icon:"fas fa-phone",
          text:"1-800-1234-567"
        },
        {
          id:2,
          icon:"fas fa-envelope",
          text:' info@demolink.org'
        }
        ,
        {
          id:3,
          icon:"fas fa-street-view",
          text:'795 Folsom Ave, Suite 600 San Francisco, CA 94107'
        }

    ]

    const media = [
      {
        id:1,
        icon:"fab fa-facebook-f",
        path:''
      },
      {
        id:2,
        icon:"fab fa-twitter",
        path:''
      },
      {
        id:3,
        icon:"fab fa-instagram",
        path:''
      },
      {
        id:4,
        icon:"fab fa-youtube",
        path:''
      }
    ]



    const navs = [

      {
        text:'Home',
      },
      {
        text:'About',
      },
      {
        text:'Contact',
      }
    ]
    return (
        <header className={' w-full bg-gray-50 fixed top-0 left-0 z-20'}>
            <div className="container px-2 mx-auto">
                <nav className=' hidden lg:flex items-center space-between border-b border-gray-300 py-3 text-sm text-gray-400' >

                    <div className='flex itemx-center w-full  space-x-5'>
                     {
                       data.map(i=><Item key={i.id} icon={i.icon} text={i.text} />)
                     }
                    </div>
                    <div className='flex itemx-center  space-x-5'>
                    {
                      media.map(i=><Item key={i.id} path={i.path} icon={i.icon} />)
                    }
                    </div>
                </nav>
                <nav className='flex items-center space-between py-3'>
                   <div className='w-full'>
                    <a href='/' className='font-black text-xl'>RealAstate</a>
                   </div>
                   <div>

                       <ul className='hidden sm:flex items-center space-x-5'>
                          {
                            navs.map((i,k)=><MenuItem key={k} text={i.text} />)
                          }
                       </ul>
                       <button className='block sm:hidden focus:outline-none hover:text-yellow-500'>
                          <i className='fas fa-bars'></i>
                       </button>
                   </div>

                </nav>
            </div>
        </header>
    )
}
