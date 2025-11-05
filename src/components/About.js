import Aboutimg from '../assets/about.jpg'

export default function About(){
    return <section className='flex flex-col md:flex-row bg-first px-3' id='about'>
        <div className=' py-5 md:w-1/2'>
            <img src={ Aboutimg }/>
        </div>
        <div className='md:w-1/2 flex justify-center'> 
        <div className='flex flex-col justify-center'>
             <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[170px] font-bold'>About Me</h1>
         <p className="max-w-2xl mx-auto text-gray-300">
      I’m a full-stack developer specializing in React.js and Spring Boot.
      I enjoy turning ideas into real-world applications and constantly
      learning new tools and frameworks to improve my craft.
    </p>
        </div>
        </div>



    </section>
}