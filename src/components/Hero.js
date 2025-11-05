import DeveloperImg from '../assets/developer.jpg';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return<section className='flex  flex-col md:flex-row px-5 py-32 bg-second  justify-center'>
    <div className=' md:w-1/2 flex flex-col'>
         <h1 className=' text-white text-2xl font-pk-font'>Hi ,<br/>I'm Pradeep 
    <p className='text-2xl '>I'm a Full-stack developer</p>
    </h1>
    <div className='flex py-10'>
        <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
       <a href='#' className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
       <a href='#' className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
    </div>
        
        
    </div>
    <img className='md:w-1/3' src={DeveloperImg}/>
    </section>
}
