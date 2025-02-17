import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
            <a target="_blank" href="https://www.instagram.com/aadarsh.jha.102/?__pwa=1"> <FaFacebook size={24} /></a>
            <a target="_blank" href="https://www.instagram.com/aadarsh.jha.102/?__pwa=1"> <FaTwitter size={24} /></a>
             <a target="_blank" href="https://www.instagram.com/aadarsh.jha.102/?__pwa=1"><FaInstagram size={24} /></a> 
             <a href="https://www.linkedin.com/in/aadarsh-kumar-7828742ba/" target="_blank"> <FaLinkedinIn size={24} /></a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Aadarsh Kumar. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner Sachin</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
