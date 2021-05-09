import React , {useEffect} from 'react';

import Waraper from './wraper';

import {Input , Button , Card} from '../Components/widget/';

import Db from '../../../db';

const Home = ()  => {
  useEffect(()=>{
   const d =  Db.postData('post','/api/admin/user/',{});
   d.then(res=>console.log(res))

  });
  return <Waraper>

           <div className='flex w-full items-center space-x-5 justify-around'>
             <Card bg='blue-500' first={{text:'Number users', number:500}}  socund={{text:'Admins users', number:10}}/>
             <Card bg='red-500' first={{text:'Number users', number:500}}  socund={{text:'Admins users', number:10}}/>
             <Card bg='green-500' first={{text:'Number users', number:500}}  socund={{text:'Admins users', number:10}}/>
           </div>

        </Waraper>;

}

export default Home
