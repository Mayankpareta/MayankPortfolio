import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Send, Loader, CheckCircle } from "lucide-react";

function Contact() {

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
            <h2 className='text-xl sm:text-3xl text-[#afafaf] md:text-4xl text-center text-clip py-5 md:py-14 '>Connect With Me</h2>
        </div>
        <div className='flex justify-center'>          
              <div className="g-gradient-to-r from-[#222222] to-[#000000] shadow-[inset_1px_1px_10px] shadow-white/50 border border-gray-700 rounded-xl mx-2 sm:mx-0 sm:w-5/6
               lg:w-4/5 p-5 lg:p-12 text-white grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full flex flex-col text-center w-90% m-auto">
                    <div className="">
                      <h3 className="text-2xl font-bold mb-6">
                          Send Me Mail
                      </h3>
                      <p className="text-purple-100 mb-8">
                          Available for freelance projects and
                          full-time opportunities
                      </p>
                    </div>
                    <div className="space-y-8">
                      <form className="" ref={form} onSubmit={sendEmail}>
                          <div className="flex items-center py-2">                        
                            <input className="bg-black border border-white/40 px-5 py-1 w-full rounded" type="text" name="user_name" placeholder="Name" required />
                          </div>
                          <div className="flex items-center py-2">
                            <input className="bg-black border border-white/40 px-5 py-1 w-full rounded" type="email" name="user_email" placeholder="Email" required />
                          </div>
                          <div className="flex items-center py-2">
                              <textarea className="bg-black border border-white/40 px-5 py-1 w-full rounded" name="message" placeholder="Message" required />
                          </div>
                          <div className="flex items-center py-2">
                              <button className="bg-black border border-white/40 px-5 py-1 w-full rounded active:bg-white/10" type="submit">Send</button>
                          </div>
                      </form>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                      <img src='/assets/grayLogo.png' className="h-52" alt="Logo" /> 
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Contact