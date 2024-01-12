"use client"
import React from 'react'

type Props = {
  showContact: boolean
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>
}
const ContactModal = ({ showContact, setShowContact }: Props) => {
  
  return (
    <main>
      <div className={`main-modal flex fixed w-full h-screen bg-[#0000008c] inset-0 z-50 overflow-hidden justify-center items-center ${showContact ? 'fade-in' : 'fade-out' }`}>
        <div
          className="modal-container bg-secondry w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className='border-b-2 border-zinc-200'>Contact Me</p>
              <div onClick={() => setShowContact(false)} className="modal-close cursor-pointer z-50">
                <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 18 18">
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                  </path>
                </svg>
              </div>
            </div>

            <section className='w-full h-[350px]'>
              <MyInput />
              <MyInput />
              <MyInput />
            </section>

            <div className="flex justify-end pt-2">
              <button
                className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">Cancel</button>
              <button
                className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </main>



  )
}

export default ContactModal
function MyInput() {
  return (
    <div className="mb-4">
      <label className="mb-2.5 block text-black dark:text-white">
        Full Name
      </label>
      <input
        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
    </div>
  )
}
