import React from 'react'
import Zoderbook from '../assets/white-Zoderbook.png'
import Watduwant from '../assets/Watduwant.png'
import Twitter from '../assets/Twitter-clone.png'
import Socia_media_app from '../assets/white-Socia_media_app.png'
import Zaycom from '../assets/Zaycom.png'
import TodoApp from '../assets/TodoApp.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* container  */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid tem  */}
                <div style={{backgroundImage: `url(${Zoderbook})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Blog Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://zoderbook.pythonanywhere.com/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/Zayn-zayaan/Zoder_Blog" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid tem  */}
                <div style={{backgroundImage: `url(${Watduwant})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Appointment Booking App
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://watduwantapi.pythonanywhere.com/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/watduwant/BookingSystem" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid tem  */}
                <div style={{backgroundImage: `url(${Twitter})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Twitter Clone Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://zayn-zayaan.github.io/Twitter-Clone/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/Zayn-zayaan/Twitter-Clone" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid tem  */}
                <div style={{backgroundImage: `url(${Socia_media_app})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Social Media Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/Zayn-zayaan/Social_media_app" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid tem  */}
                <div style={{backgroundImage: `url(${Zaycom})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://zayn-zayaan.github.io/Zaycom" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/Zayn-zayaan/Zaycom" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid tem  */}
                <div style={{backgroundImage: `url(${TodoApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/Zayn-zayaan/Todo_React" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Work