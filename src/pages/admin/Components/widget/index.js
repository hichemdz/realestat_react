
import {Link} from 'react-router-dom'


export const Button = ({children , cls}) => (

  <button className={'focus:outline-none ' + (cls)} > {children} </button>

)


export const Item = ({icon,text,path , cls}) => {

           return (
                    <a to={path}  className={"space-x-2 flex items-center  hover:text-yellow-500 cursor-pointer " + (cls)}>
                      <i className={ icon}></i>
                        {text&&( <p>{text}</p>)}
                    </a>
                )
}



export const MenuItem = ({to,text}) =>{

    return <li className='hover:text-yellow-500 cursor-pointer'>
               <Link to={to||''}>{text}</Link>
            </li>
}


export const Input = ({name, icon,type,plc , cls , btn , onChange,  label , messages}) => {

       return (
            <div className='flex items-center '>
                <div className='w-full text-left space-y-3 relative'>
                {
                  label&&(<label> {label} </label>)
                }
                <input onChange={onChange} name={name} className={(messages&&('border border-red-400 ')) + ' w-full '+(cls) } type={type|| 'text'} placeholder={plc} />
                {
                messages && (  <div className='  text-xs text-red-400'>
                                    {
                                      messages.map((i,k)=> <p key={k}>{i}</p>)
                                    }
                           </div>
                         )
              }
                </div>

                 {icon && (
                    <button className={"focus:outline-none  " + ( btn)}>
                         <i className={icon}> </i>
                    </button>
                 )}

            </div>

       )

}



export const Card = ({socund , first,bg}) => {

 return (
   <div className={`w-72 bg-${bg?bg:'blue-500'} rounded shadow p-5 space-y-1 leading-3 text-white`}>
     <h3 className='text-lg font-black '>{first.text}</h3>
     <div className='flex w-full justify-between  items-center'>
      <i className='fas fa-users text-xl'> </i>  <p className='text-5xl font-black'> {first.number}</p>
     </div>
     <div className='flex space-between items-center'>
      <p>{socund.text}</p> <p>{socund.number}}</p>
     </div>
   </div>
 )

}
