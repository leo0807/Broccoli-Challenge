import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Footer:React.FC = () => {
  return (
    <footer className="flex items-center justify-center h-16 bg-black">
      <div>
        <p className="text-white">Made with <FontAwesomeIcon icon={faHeart} className="text-red-600" /> in Mebourne.</p>
        <p className="text-white underline">@ 2021 Broccoli & Co. All rights reserved.</p>
      </div>
    </footer>
    )
}

export default Footer