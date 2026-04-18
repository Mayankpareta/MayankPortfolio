import emailjs from '@emailjs/browser';
import { useContext, useRef } from 'react';
import { MapPin, Phone, Mail, Send, Loader, CheckCircle } from "lucide-react";
import UserContext from '../../contextApi/CreateContext';

function Contact() {

  const { theme , setTheme } = useContext(UserContext)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
      alert('Email sent successfully');
      e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send email');
      });
  };

  return (
    <div id='contact' className='g-gradient-to-r from-[#222222] to-[#000000] py-0 lg:py-10 sm:px-5'>
        <div>
            <h2 className='text-xl sm:text-3xl md:text-4xl text-center text-clip py-5 md:py-14 '>Connect With Me</h2>
        </div>
        <div className='flex justify-center'>          
              <div className="g-gradient-to-r from-[#222222] to-[#000000] shadow-[inset_1px_1px_10px] shadow-white/50 border border-gray-700 rounded-xl mx-2 sm:mx-0 sm:w-5/6
               lg:w-4/5 p-5 lg:p-12 grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full flex flex-col text-center w-90% m-auto">
                    <div className="">
                      <h3 className="text-3xl font-bold mb-6">
                          Contact
                      </h3>
                      <p className=" mb-8">
                          Available for freelance projects and
                          full-time opportunities
                      </p>
                      <div>
                        <div className='flex items-center gap-5 '>
                            <div className='p-1 rounded-full'><MapPin className='' /></div>
                            <p>Kota, Rajasthan, India</p>
                        </div>
                        <div className='flex items-center gap-5 py-5'>
                            <div className='p-1 rounded-full'><Phone className='' /></div>
                            <p><a href='tel:7296992319' target='_blank'>+91 7296992319</a></p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='p-1 rounded-full'><Mail className='' /></div>
                            <p><a href='mailto:mayankpareta999@gmail.com' target='_blank'>mayankpareta999@gmail.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-9/12 m-auto">                      
                    <div className="space-y-8">
                        <h3 className="text-2xl text-center font-bold mb-6">
                            Send Me Mail
                        </h3>
                      <form className="" ref={form} onSubmit={sendEmail}>
                          <div className="flex items-center py-2">                        
                            <input className={`${theme === 'light' ? '' : ''} bg-transparent text-black border border-[#8a8a8a] px-5 py-1 w-full rounded`} type="text" name="user_name" placeholder="Name" required />
                          </div>
                          <div className="flex items-center py-2">
                            <input className="bg-transparent border border-[#8a8a8a] px-5 py-1 w-full rounded" type="email" name="user_email" placeholder="Email" required />
                          </div>
                          <div className="flex items-center py-2">
                              <textarea className="bg-transparent border border-[#8a8a8a] px-5 py-1 w-full rounded" name="message" placeholder="Message" required />
                          </div>
                          <div className="flex items-center py-2">
                              <button className={` border border-[#8a8a8a] px-5 py-1 w-full rounded active:bg-white/10 ${theme === 'light' ? 'bg-[#c5c5c5] text-black' : ''}`} type="submit">Send</button>
                          </div>
                      </form>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Contact