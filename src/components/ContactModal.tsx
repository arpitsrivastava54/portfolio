"use client"
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast'
import * as Yup from "yup"

type Props = {
  showContact: boolean
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>
}
const validationSchema = (values:any) => {
  const errors = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("invalid email"),
    mobile:Yup.string().required("Required").matches(/^[0-9]+$/, 'Please enter a valid number').length(10,"10 digit"),
    message: Yup.string().required("Required")
  })
  return errors
}
const ContactModal = ({ showContact, setShowContact }: Props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      toast.success("Thank you for reaching out. I'll get back to you soon!")
      formik.resetForm()
      setShowContact(false)
    },
  })

  return (
    <main>
      <div className={`main-modal flex fixed w-full h-screen bg-[#000000b6] inset-0 z-50 overflow-hidden justify-center items-center ${showContact ? 'fade-in' : 'fade-out'}`}>
        <div
          className="modal-container bg-secondry w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className="modal-content py-4 text-left px-6">
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

            <section className='w-full h-max'>
              <MyInput
                {...formik.getFieldProps("name")}
                name="name"
                label="Name"
                value={formik.values.name}
                error={formik.touched.name && formik.errors.name}
              />
              <MyInput
                {...formik.getFieldProps("email")}
                label="Email"
                name="email"
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email}
              />
              <MyInput
                {...formik.getFieldProps("mobile")}
                label="Mobile"
                name="mobile"
                value={formik.values.mobile}
                error={formik.touched.mobile && formik.errors.mobile}
                />
              <MyInput
                {...formik.getFieldProps("message")}
                label="Message"
                name="message"
                value={formik.values.message}
                error={formik.touched.message && formik.errors.message}
              />
            </section>

            <div className="flex justify-end pt-2">
              <button
                type='reset'
                className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">Cancel</button>
              <button
              type='submit'
                className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </main>



  )
}

export default ContactModal
function MyInput({ label, ...props }: any) {
  return (
    <div className="mb-4">
      <label className="mb-2.5 block text-white text-xs lg:text-base">
        {label}
      </label>
      <input
      {...props}
      style={{borderColor:props.error && '#f87171'}}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
      {props.error && <p className='text-red-400'>{props.error}</p>}
    </div>
  )
}
