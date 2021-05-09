import React , {useState,useEffect} from 'react';

import Local from './context';
import {en,ar} from './localization';
import {Home,Login} from './pages';
import {Switch , Route , useRouteMatch , Redirect}  from 'react-router-dom';



const Rtl = React.lazy(() => import('./thems/rtl'));



const Back = () => {

  let { path } = useRouteMatch();
  const [isLogin , setIsLogin] = useState(false);
  const [lang , setLang] = useState('ar');

  useEffect(()=>{
    const l = localStorage.getItem('lng') || ar;
    setLang(l)



  },[lang])






  const changeLng = (e) => {
      const {value} = e.target;
      setLang(value)
      localStorage.setItem('lng',value)
  }


  const __ = (text,lg='ar') => {
     let data=''
     const lng = lg.toLowerCase();
     switch (lng) {
       case 'ar':
         data = ar[text];
         break;
       case 'en':
         data = en[text];
         break;
       default:
         data = ar[text];
     }
     return data;
  }

  return (
    <div style={{direction:lang !== 'ar' ?'ltr':'rtl'}}>
    <Local.Provider value={{__,changeLng,lang}}>

       <Switch>
          <Route exact path={path}>
           <Home />
          </Route>
          <Route  path={`${path}/login`} >
             {isLogin ? <Redirect exact to='path' /> : <Login />}
          </Route>
       </Switch>

   </Local.Provider>
   </div>
  );


}

export default Back
