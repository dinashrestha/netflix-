import React from 'react'
import netflix from  "./Assets/Image/netflix.png";
import backnetflix from "./Assets/Image/backnetflix.jpg";

function home() {
  return (
     <div className=''>
        <div className=' absolute ml-[10%] '>
            <img src={netflix} className=' h-36 w-54'></img>
        </div>
        <div className='absolute mt-10  ml-[70%]'>
        <button className='text-white text-xl h-11 w-24 bg-red-700 rounded-xl' type="button">Sign In
        </button>
        </div> 
        <div className='absolute mt-[27%] '>
            <p className='text-white font-bold text-6xl ml-44'>Unlimited movies,Tv shows,and more</p>
            <p className='text-white font-normal text-3xl mt-5 ml-[40%]'>Watch anywhere.Cancel anytime.</p>
            <p className='text-white font-normal text-2xl mt-8 ml-[26%]'>Ready to watch? Enter your email to create or restart your membership.</p>

           <div className='flex flex-row'>
            <input className='text-white shadow-lg bg-transparent font-normal text-2xl mt-5 ml-[27%] h-17 w-[39%] rounded' type="email" placeholder='Email address'></input>
            <button className='text-white font-sans text-3xl bg-red-700 ml-2 h-16 w-[17%] mt-6 rounded-lg' type="button"> Get Started  </button>
        </div>
        </div> 
        <img src={backnetflix } className='w-[100%]'></img>

        </div>
      


 
  )
}

export default home