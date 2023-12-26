import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import './index.css';
const Footer = ()  => (

    <>
      <footer>
        <div className="container">
          
            <div>
             
       <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer">
       <IconBrandLinkedin className='icon'  width={32} height={32} />
        </a>
         <hr />
       <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
       <IconBrandGithub className='icon' width={32} height={32} />
        </a>
            </div>
          </div>
       
      </footer>
    </>
  
)

export default Footer;
