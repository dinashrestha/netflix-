import React from 'react'
import netflix from  "./Assets/Image/netflix.png";
import backnetflix from "./Assets/Image/backnetflix.jpg";
import video from "./Assets/Image/video.mp4";
import mobile from "./Assets/Image/mobile.jpg"
import gif from "./Assets/Image/gif.gif"
import kids from "./Assets/Image/kids.jpg"
import image5 from "./Assets/Image/image5.jpg"

function home() {
  return (
     <div className=''>
        <div className=' absolute ml-[10%] '>
            <img src={netflix} className=' h-36 w-54'></img>
        </div>
        <div className='absolute mt-10  ml-[70%]'>
        <button className='text-white text-xl h-11 w-24 bg-red-700 rounded-xl'
         type="button">Sign In </button>
        </div> 
        <div className='absolute mt-[27%] '>
            <p className='text-white font-bold text-6xl ml-44'>Unlimited movies,Tv shows,and more</p>
            <p className='text-white font-normal text-3xl mt-5 ml-[40%]'>Watch anywhere.Cancel anytime.</p>
            <p className='text-white font-normal text-2xl mt-8 ml-[26%]'>Ready to watch? Enter your email to create or restart your membership.</p>

           <div className='flex flex-row'>
            <input className='text-white  border-2 shadow-lg bg-transparent font-normal text-2xl mt-5 ml-[27%] h-17 w-[39%] rounded' type="email" placeholder='Email address'></input>
            <button className='text-white font-sans text-3xl bg-red-700 ml-2 h-16 w-[17%] mt-6 rounded-lg' type="button"> Get Started  </button>
        </div>
        </div> 
        <img src={ backnetflix } className='w-[100%]'></img>
        <div className='flex flex-row bg-gray-900 '>
          
        <div className='bg-gray-900 h-[50vh] w-[50%]  '>
          <p className='text-white font-bold text-5xl pt-24 ml-20'>Enjoy on your TV</p>
          <p className='text-white font-normal text-2xl ml-24 pt-3'>Watch on Smart TVs, Playstation, Xbox,</p> 
            <p className='text-white font-normal text-2xl ml-24' >Chromecast, Apple TV, Blue-ray players, and more.</p>
            </div>
            <div className=''>
            <video className="w-[200%] rounded-lg h-48 ml-44 pt-12" autoPlay loop muted>
            <source src={video} type="video/mp4"/>
             </video>
            </div>
  
        </div>

        <div className='flex flex-row bg-black border-b-8 border-gray-400 '>
          <div className=''>
           <img src={mobile} className='h-[90%] pt-8 ml-8'></img>
           
          </div>
          <div className=' absolute flex flex-row bg-black h-20 w-96 pt-5 mt-[23%] ml-32 border-2 border-gray-600 rounded-lg'>
            <div className='ml-4'>
              <p className='text-white '>Stranger Things </p>
              <p className='text-blue-500'>Downloading...</p>
            </div>
              
            <div className=''>
            <img src={gif} className='ml-24 h-15 w-10 '></img>

            
            
            </div>
            <img src={image5} className='ml-[11%] h-20 w-12 pb-8'></img>
           
            </div>
          <div className='border-6'>
            <p className='text-white font-bold text-4xl pt-48 ml-8'>Download your shows to watch offline</p>
            <p className='text-white font-normal text-2xl pt-4 ml-8'>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>

        <div className='flex flex-row bg-gray-800 border-b-8 border-gray-400  h-[50vh] '>
          <div className='border-6'>
            <p className='text-white font-bold text-3xl pt-32 ml-24'>Watch </p>
            <p className='text-white font-bold text-3xl ml-24'>everywhere</p>
            <p className='text-white font-normal text-2xl  ml-24'> Stram unlimited movies and TV </p>
             <p className='text-white font-normal text-2xl  ml-24'>shows on your phone, tablet, laptop, and TV.</p>
          
          </div>

        </div>
        <div className='flex flex-row bg-gray-600 border-b-8 border-gray-400  h-[50vh]'>
          <div className=''>
           < img src={kids} className='h-[90%] pt-8 ml-8'></img>
           
          </div>
          <div className='  border-6 ml-28'>
            <p className='text-white font-bold text-3xl pt-32 ml-36'>Create Profiles for Kids </p>
            <p className='text-white font-normal text-2xl pt-4 ml-28'>Send Kids on adventures with their favorite characters in a </p>
            <p className='text-white font-normal text-2xl pt-4 ml-28 '>space made just fo them-free with your membership.</p>
          </div>
        </div>



        <div className='flex flex-row bg-gray-600 border-b-8 border-gray-400  h-[50vh]'>
        <div className='  border-6 '>
           <p className='text-white font-bold text-5xl ml-96'> Frequent Asked Question</p>
          </div>
          </div>




          <div className='flex flex-row bg-gray-600 border-b-8 border-gray-400  h-[50vh]'>
          <div className=' border-6 '>
            <p> </p>

            </div>
            </div>

        </div>
       


 
  )
}

export default home