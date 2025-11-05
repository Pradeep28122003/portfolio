import websiteimg1 from '../assets/ecommerce.png'
import websiteimg2 from '../assets/hrms.png'
export default function Projects(){
    return<section className="flex flex-col py-20 px-10 justify-center bg-second text-white" id='projects'>
        <div className="w-full ">
        <div className="flex flex-col px-10 py-5">  
           <h1 className="text-4xl py-2 text-white border-b-4 border-[#2b2d77] mb-5 w-[135px] font-bold">Projects</h1>
           <p>These are some of My projects.I have built these with React js and Spring Boot</p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-20 gap-20'>
            <div className='relative'>
                <img className='h-[300px] w-[400px]' src={websiteimg1} />
                <div className='absolute left-0 right-0 bottom-[0px] top-[0px] bg-second  opacity-0 duration-500 hover:opacity-100'>
                    <p className=' text-center px-5 py-5'>Ecommerce website Built with React js and Spring Boot</p>
                </div>
            </div>
            <div className='relative'>
                <img className='h-[300px] w-[400px]' src={websiteimg2} />
                <div className='absolute left-0 right-0 bottom-[0px] top-[0px] bg-second  opacity-0 duration-500 hover:opacity-100'> 
                    <p  className=' text-center px-5 py-5'>
                        HRMS Application Built With React Js and Spring Boot
                    </p>
                </div>
            </div>

        </div>
        </div>
        
        






    </section>
}