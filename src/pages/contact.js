import {React, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/contact.css'
import { HiPhone, HiLocationMarker, HiMail, HiUser } from 'react-icons/hi'

export default function Contact() {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact-cont'>
        <Header/>
        <div className='contact-h'>
            <div className='cover'>
                <h1>GET IN TOUCH</h1>
                <div className='address'>
                <div className='add-1'>
                    <div>
                     <HiLocationMarker className='contact-img'/>
                   </div>
                   <h1>Address</h1>
                   <p>Ghana, Kumasi</p>
                   <p>AK-132-24</p>
                </div>
                <div className='add-1'>
                   <div>
                     <HiPhone className='contact-img'/>
                   </div>
                   <h1>Phone</h1>
                   <p>+233 55 968 1714</p>
                   <p>+233 50 299 5333</p>
                </div>
                <div className='add-1'>
                   <div>
                     <HiMail className='contact-img'/>
                   </div>
                   <h1>Email</h1>
                   <p>contact@storylearn.com</p>
                   <p>mujahidshahid72@gmail.com</p>
                </div>
            
                </div>
            </div>  
        </div>
        <div className='form-cont'>
            <h1>Message Us</h1>
        
        <form onSubmit={onSubmit} >
           <div className='inpts'>
           <div className="input-with-icon">
             <HiUser className="input-icon" />
             <input type="text" placeholder="Your name" className="input-field" required />
           </div>
           <div className="input-with-icon">
             <HiPhone className="input-icon" />
             <input type="number" placeholder=" Your phone number" className="input-field" required />
           </div>
           <div className="input-with-icon">
             <HiMail className="input-icon" />
             <input type="email" placeholder="Your Email" className="input-field" required />
           </div>
         
           </div>
           <div className="textarea-with-icon">
              <HiMail className="textarea-icon" />
               <textarea placeholder="Enter your message" className="textarea-field" required></textarea>
            </div>
           <div className='btn-cont'>
             <button type="submit" className='form-btn'>Submit Form</button>
           </div>
        </form>
        </div>
        <span className='rslt'>{result}</span>

      <Footer/>
    </div>
  )
}
