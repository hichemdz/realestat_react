import React,{useEffect,useState , useContext} from 'react';
import axios from 'axios';
import Db from '../../../db';

import Local from '../context';

import {useHistory , useRouteMatch} from 'react-router-dom'
import {Input , Button} from '../Components/widget/';

const Login = ()  => {
 const history = useHistory();
 let { path } = useRouteMatch();

 const {__,changeLng,lng} = useContext(Local);

 const [dataInput , setDataInput ] = useState({email:'',password:'',lang:''})
 const [{errEmail,errPassword,statuts} , setError] =  useState({errEmail:null,errPassword:null,statuts:true})

  const hundelSubmit = (e) => {

    e.preventDefault();

    const data =  Db.postData('post','/api/admin/user/login',dataInput);
     try {
       data.then(async (res) =>  {
        const  {status , data,messages} = res.data;


         const dataErr = {
                 statuts:statuts,
                 errEmail:messages &&  messages.email||null,
                 errPassword:messages && messages.password||null
               }
        setError(dataErr)
         if(status ){
           localStorage.setItem('token' ,data.token)

           history.push('/admin')

          }
          else {

          }
       })

     } catch (err) {
       console.log(err)
     }

  }

  const hundelInput = (e) => {
    const {name,value} = e.target;
    setDataInput({...dataInput,[name]:value})
    if(name==='lang') changeLng(e)
  }


const data_input = [

  {
    name:'email',
    lable:__('email'),
    type:'email',
    cls:'px-3 p-2 rounded bg- border border-gray-500',
    messages:errEmail,
    plc : __('enter_e'),
  },
  {
    name:'password',
    lable:__('password'),
    type:'password',
    cls:'px-3 p-2 rounded bg- border border-gray-500',
    messages:errPassword,
    plc : __('enter_p'),
  },

]

  return <div className='h-screen overflow-hidden px-5 border-t-4 px-5 py-2 border-yellow-500 bg-purple-900'>
        <div className='container mx-auto   -full ' >
          <select name='lang' onChange={hundelInput} className='px-4 bg-white rounded float-right focus:outline-non  py-2' value={lng}>
          <option  value='ar'>ar</option>
          <option  value='en'>en</option>
          </select>
        </div>
        <div className=' h-full flex  items-center justify-center bg-purple-900'>
           <div className='clear-both containe px-5 :w-96 mx-auto space-y-5 text-center'>

                   <h1 className=' text-gray-50 text-4xl text-yellow-400 font-black'> RS ADMIN   </h1>

              <form onSubmit={hundelSubmit} className=' rounded shodow border-yellow-400 space-y-5 w-95   bg-white -900 py-12 px-5'>
                  <div>
                    <h3 className='text-lg'>{__('Login to your account',lng)}</h3>
                  </div>

              {
                data_input.map((i,k)=>
                        <Input key={k} label={i.label} onChange={hundelInput}
                               cls={i.cls} messages={i.messages} name={i.name}
                               type={i.type} plc ={i.plc} />)
              }

                <div className='flex  items-center'>
                   <input className='w-4 h-4' id='keep' name='keep' type='checkbox' />
                   <label className='text-sm mx-2' for='keep'>{__('keep')}</label>
                </div>
               <Button cls=' px-3 py-2 text-white w-full rounded bg-yellow-500'>
                  {__("signin")}
               </Button>
              </form>

          </div>
      </div>
      </div>

}

export default Login
