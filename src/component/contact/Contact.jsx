import React from 'react'
import { MapPin, Phone, Mail, Send, Loader, CheckCircle } from "lucide-react";

function Contact() {
  return (
    <div id='contact' className='bg-gradient-to-r from-[#1b010c] to-[#060314] py-20 sm:px-5'>
        <div>
            <h2 className='text-xl sm:text-3xl md:text-4xl text-center text-clip py-10 '><span className='text-[#d15ec6]'>Connect {" "}</span> With Me</h2>
        </div>
        <div className='flex justify-center'>
          
              <div className=" border border-gray-700 rounded-xl w-3/4 sm:w-3/5
               lg:w-3/5 p-5 lg:p-12 text-white">
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

                  <div className="space-y-8 mb-12">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
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

                          <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-purple-100">
                                Email
                            </p>
                            <p className="text-xs sm:text-base lg:text-lg">
                              mayankpareta999@gmail.com
                            </p>
                          </div>
                          </div>

                          <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                             <Phone className="w-5 h-5" />
                          </div>
                          <div>
                          <p className="text-sm text-purple-100">
                               Phone
                          </p>
                          <p className="font-medium">
                              +91 7296992319
                          </p>
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