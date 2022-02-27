import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/joaopedro-vieira/" target="_blank"><BsLinkedin /></a>
        </div>
        <div>
        <a href="https://github.com/DevJPVR" target="_blank"><BsGithub /></a>
        </div>
        <div>
        <a href="https://instagram.com/joaopedrotwd" target="_blank"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia