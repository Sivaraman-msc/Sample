import React from 'react';
import apnaLogo from '../public/apnaLogo.jfif';
import icicLogo from '../public/icicLogo.png';
import Whatsapp from '../public/wpp.png';
import Facebook from '../public/Facebook.jfif';
import Linkedin from '../public/LinkedIn.png';
import Twitter from '../public/Twitter.png';
import googleplay from '../public/googleplay.png';
import qr from '../public/app-qr.png';
import { FiPhone } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaStar } from 'react-icons/fa';

export default function ICIC() {
  return (
    <div className="bg-gray-100 text-black min-h-screen font-sans">
      <header className="bg-white shadow shadow-md p-3 flex justify-between items-center sticky top-0">
        <div className="flex items-center gap-2">
          <img src={apnaLogo} alt="Apna logo" className="w-16" />
        </div>
        <div className="hidden sm:flex gap-3">
          <button className="text-green-700">Employer Login</button>
          <button className="bg-green-600 text-white px-3 py-1">Candidate Login</button>
        </div>
      </header>

      <section className="p-4 grid md:grid-cols-3 gap-3">
        <div className="bg-gradient-to-r from-green-700 via-green-500 via-blue-500 to-blue-700 p-3 col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded">
          <img src={icicLogo} alt="ICICI logo" className="w-14 h-14" />
          <div>
            <h2 className="font-bold text-2xl text-white">Head of Field Sales</h2>
            <p className=" text-sm lg:text-lg text-white">at ICICI Bank</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white p-3 shadow-md rounded text-sm">
            <div className="flex justify-between mb-2">
              <div>
                <ul className="font-bold text-lg flex items-center gap-2">
                  <li><FiPhone className="text-purple-600" /></li>
                  <li>246</li>
                </ul>
                <p>Preps</p>
              </div>
              <div>
                <ul className="font-bold text-lg flex items-center gap-2">
                  <li><AiFillHeart className="text-purple-600" /></li>
                  <li>82%</li>
                </ul>
                <p>Helpful</p>
              </div>
              <div>
                <ul className="font-bold text-lg flex items-center gap-2">
                  <li><FaStar className="text-purple-600" /></li>
                  <li>81</li>
                </ul>
                <p>Reviews</p>
              </div>
            </div>
            <p className="text-xs text-center my-2">10 mins interview slot available</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 w-full rounded-2xl font-bold text-sm lg:text-lg">Start Interview</button>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-bold mb-2 text-gray-700">Share with Friends</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              <img src={Whatsapp} alt="WhatsApp" className="w-14 h-12 rounded-full" />
              <img src={Facebook} alt="Facebook" className="w-12 h-12" />
              <img src={Linkedin} alt="LinkedIn" className="w-12 h-12" />
              <img src={Twitter} alt="X" className="w-12 h-12 rounded-full" />
            </div>
            <p className="text-xs text-purple-600 mb-2 text-center">or copy link</p>
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <input type="text" value="https://apna.co/interview-prep/n" readOnly className="flex-1 p-1 text-md" />
              <button className="bg-purple-600 text-white px-2 text-md">Copy</button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 text-sm lg:text-lg">
        <div className="bg-white p-3 shadow shadow-md rounded">
          <h3 className="font-bold mb-2">About this interview</h3>
          <p>Get an opportunity to get interviewed for ICICI Bank's Head of Field Sales. Together with technical questions, get insights about company values and culture.</p>
        </div>
      </section>

      <section className="p-4">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 shadow shadow-md rounded">
          <h3 className="text-sm lg:text-lg font-bold mb-3">Personalised Interview Cheatsheets</h3>
          <p className="text-sm mb-2 text-gray-600">Based on your profile</p>
          <div className="grid text-sm grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-white p-2 shadow-md rounded">Question: Tell me about a time...</div>
            <div className="bg-white p-2 shadow-md rounded relative">
              <div className="absolute top-2 left-2 text-purple-600 text-xs font-semibold flex items-center gap-1">
                <span className="bg-purple-100 px-2 py-[2px] rounded">Locked</span>
              </div>
              <div className="mt-6">Question: How would you design a distributed cache system?</div>
              <p className="text-[10px] mt-2 text-gray-500">This will get unlocked after your interview is completed.</p>
            </div>
            <div className="bg-white p-2 shadow-md rounded">Question: How would you design a distributed cache system?</div>
          </div>
        </div>
      </section>

      <section className="p-4">
        <div className="bg-gradient-to-r from-white via-blue-200 to-white p-3 shadow shadow-md rounded">
          <h3 className="text-sm lg:text-lg font-bold mb-3">After this interview, You'll get</h3>
          <ul className="space-y-4 text-sm lg:text-lg list-none">
            <li className="bg-white p-2">Get an Interview Score and Rating amongst all the candidates</li>
            <li className="bg-white p-2">Detailed Analysis and Feedback on how the interview went</li>
            <li className="bg-white p-2">Question wise tips to improve your answers and deliver next time</li>
          </ul>
        </div>
        <section className='p-3'>
          <p className="text-sm lg:text-lg text-gray-800 mt-3">This is a mock interview for practice purposes only. Your responses and feedback won't be shared with any recruiters.</p>
          <p className="text-sm lg:text-lg text-purple-600 mt-1">This page contains AI-generated content, which may occasionally be inaccurate or irrelevant.</p>
        </section>
      </section>

      <footer className="bg-gray-900 text-white p-6 md:p-12 grid gap-7 md:grid-cols-2 text-sm">
        <div>
          <ul className='flex flex-col sm:flex-row flex-wrap gap-3 p-3'>
            <li><img src={apnaLogo} alt="apna" className='h-20 w-20 rounded-lg' /></li>
            <li>
              <p className="font-bold mb-2 text-lg">Follow us on Social Media</p>
              <div className="flex gap-4 text-2xl text-white">
                <span><FaFacebookF className="hover:text-yellow-500" /></span>
                <span><FaLinkedinIn className="hover:text-yellow-500" /></span>
                <span><FaTwitter className="hover:text-yellow-500" /></span>
                <span><FaInstagram className="hover:text-yellow-500" /></span>
                <span><FaYoutube className="hover:text-yellow-500" /></span>
              </div>
            </li>
          </ul>
          <p className="mt-4">© 2025 Apna | All rights reserved | privacy policy | Terms & conditions</p>
        </div>
        <div className="bg-white text-black p-3 rounded-lg">
          <ul className='flex flex-col sm:flex-row items-center gap-4'>
            <li className="text-center sm:text-left">
              <p className="font-bold text-sm lg:text-lg">Apply on the go</p>
              <p className="text-xs">Job updates on the go</p>
              <img src={googleplay} alt="Google Play" className="w-32 mt-2" />
            </li>
            <li><img src={qr} className='w-24 h-24' /></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
