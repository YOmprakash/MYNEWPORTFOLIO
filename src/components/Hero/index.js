
import {IconBrandLinkedin,IconBrandGithub } from "@tabler/icons-react";
import './index.css'


const Hero = () => (
    <div className='hero-container'>
    <div className='hero-card-container'>
    <div className='hero-content'>
       
        <h1>FullStock Developer <img src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png' className='wave' alt='wave' /></h1>
        <p>Hello, I'm Omprakash Yamavaram. Aspiring FullStock Developer </p>
       <div className='icon-container'>
       
     
       <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer">
       <IconBrandLinkedin className='icon' color="black" width={32} height={32} />
        </a>
         
       <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
       <IconBrandGithub className='icon' color="black" width={32} height={32} />
        </a>
        
       
       </div>
        
      </div>
      <img className='profile-img' src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709814.jpg?t=st=1703484363~exp=1703487963~hmac=ea7bf1293bd78208f7aee75848e93908c0894187b984808cd86bffd49e517f4b&w=900
      " alt="Person" />


    </div>
    </div>
)

export default Hero