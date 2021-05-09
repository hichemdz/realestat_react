
import {Link} from 'react-router-dom'

export const Item = ({icon,text,path}) => {

           return (
                    <a href={path}  className="flex items-center space-x-1 hover:text-yellow-500 cursor-pointer">
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


export const Input = ({icon,type,plc , cls , btn}) => {

       return (
            <div className='flex items-center'>
                <input className={'w-full px-3 py-3 '+(cls)} type={type|| 'text'} placeholder={plc} />
                 {icon && (
                    <button className={"focus:outline-none " + ( btn)}>
                         <i className={icon}> </i>
                    </button>
                 )}
            </div>

       )

}
