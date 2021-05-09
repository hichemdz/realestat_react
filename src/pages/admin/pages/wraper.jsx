import {Aside} from '../Components/';



const Waraper = ({children}) => {
    return  (
      <div className='flex'>
         <Aside />
         <div className='p-2 w-full'>{children}</div>
      </div>
    )

}


export default Waraper;
