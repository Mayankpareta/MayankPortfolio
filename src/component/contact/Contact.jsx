import React from 'react'
import { MapPin, Phone, Mail, Send, Loader, CheckCircle } from "lucide-react";

function Contact() {
  return (
    <div id='contact' className='g-gradient-to-r from-[#222222] to-[#000000] py-0 lg:py-10 sm:px-5'>
        <div>
            <h2 className='text-xl sm:text-3xl text-[#afafaf] md:text-4xl text-center text-clip py-5 md:py-14 '>Connect With Me</h2>
        </div>
        <div className='flex justify-center'>          
              <div className="g-gradient-to-r from-[#222222] to-[#000000] shadow-[inset_1px_1px_10px] shadow-white/50 border border-gray-700 rounded-xl mx-2 sm:mx-0 sm:w-5/6
               lg:w-4/5 p-5 lg:p-12 text-white">
                <div className="h-full flex flex-col">
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6">
                        Contact Information
                    </h3>
                    <p className="text-purple-100 mb-8">
                        Available for freelance projects and
                        full-time opportunities
                    </p>
                  </div>

                  <div className="space-y-8 mb-12 ">
                    <div className="flex items-center space-x-4  h-12 pb-1">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                          <p className="text-sm text-purple-100">
                                  Location
                          </p>
                          <p className="font-medium">
                                    Kota, Rajasthan, India
                          </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 h-12 pb-1">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-purple-100">
                                Email
                            </p>
                            <a href="mailto:mayankpareta999@gmail.com" className="text-xs sm:text-base lg:text-lg">
                              mayankpareta999@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 h-12 pb-1">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                             <Phone className="w-5 h-5" />
                          </div>
                          <div>
                          <p className="text-sm text-purple-100">
                               Phone
                          </p>
                          <a href="tel:+917296992319" className="font-medium">
                              +91 7296992319
                          </a>
                          </div>
                     </div>
                   </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Contact