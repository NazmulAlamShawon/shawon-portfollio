import React from 'react';
import {  FaGithub, FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className='flex justify-center  '>
             <div className="leftsection w-6/12 bg-emerald-400  text-center p-8  leading-7  "> 
                 <div className="mt-7">
                
                 <img className='imgshawon w-24 h-24 rounded-full mx-auto' src="shawon.jpg" alt="" />
                 
                 <h1> Nazmul Alam</h1>
                <h2>Front End Developer</h2>
                <p className='text-justify'>I'm Nazmul from Bangladesh, and I am working with  Design and Development. I am so much loving to react js and react native. Learning is my passion, I love to learn new things..  </p>
                  <div className="social icon mt-10  flex ml-3  text-center mx-auto">
                      <a  className='mr-1' href="https://github.com/shawonkst15"> <FaGithub /></a>
                      <a  className='mr-1' href="https://www.facebook.com/Nazmul2Alam"> <FaFacebook /></a>
                      <a className='mr-1' href="https://www.linkedin.com/in/nazmul-alam-6b3a77141/"> <FaLinkedin /></a>
                      <a className='mr-1' href="https://twitter.com/shawonkst17"> <FaTwitter /></a>
                  </div>
                <button className='mt-3 border-2 p-3 rounded-full hover:bg-cyan-500'>Explore me</button>
                 
                 </div>

             </div>
             
             <div className="rightsection w-6/12 p-5  bg-emerald-400">
             <img className='border-2 rounded' src="https://f.hubspotusercontent00.net/hubfs/53/Google%20Drive%20Integration/How%20to%20Start%20Coding%20The%20Ultimate%20Guide%20for%20Beginner%20Programmers.jpeg" alt="" />

             </div>
        </div>
    );
};

export default HeroSection;