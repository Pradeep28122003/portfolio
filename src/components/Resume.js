import resumeimg from '../assets/resume.png'

export default function Resume(){
    return <section className='flex flex-col md:flex-row bg-first' id='resume'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img  className='py-5 px-15 w-[300px]' src={ resumeimg }/>
        </div>
        <div className='md:w-1/2 flex justify-center'> 
        <div className='flex flex-col justify-center'>
             <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold '>Resume</h1>
         <p className="max-w-2xl mx-auto text-gray-300 ">You can view My Resume <a className='btn ' href='#'>Download</a></p>
        </div>
        </div>



    </section>
}