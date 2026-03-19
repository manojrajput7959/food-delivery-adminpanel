import React from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'

const PlayStore = () => {
  return (
    <div id='Footer-box'>

      <div className='text-center py-12 px-4 lg:px-24'>

        {/* Heading */}
        <h2 className='text-2xl text-shadow-lg font-extralight  text-shadow-zinc-600 md:text-3xl lg:text-5xl leading-snug'>
          For Better Experience Download <br className="hidden lg:block"/>
          Tomato App
        </h2>

        {/* Store Buttons */}
        <div className='flex justify-center items-center gap-6 mt-8 flex-wrap'>

          <img
            src={FRassets.play_store}
            alt="Play Store"
            className='w-36 lg:w-44 cursor-pointer hover:scale-105 transition'
          />

          <img
            src={FRassets.app_store}
            alt="App Store"
            className='w-36 lg:w-44 cursor-pointer hover:scale-105 transition'
          />

        </div>

      </div>

    </div>
  )
}

export default PlayStore