import { IconMail } from "@tabler/icons-react";
import './index.css'
import Header from '../Header';
const Contact = () => (
<>
  <Header/>

    <div  className='contact-container'>
       



      <div className="contact-content">
              <p>CONTACT</p>
              <h1>Let's Get in Touch! 👇</h1>
         

            
                <span>
                  <IconMail width={30} height={30} color="#147efb"/>
                </span>
            
                  <h3>Mail</h3>
                  <a href="mailto:omprakashyamavaram@gmail.com">
                  omprakashyamavaram@gmail.com
                  </a>
                </div>
              </div>
              </>
   
  );

export default Contact;
