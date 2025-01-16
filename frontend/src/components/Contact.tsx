import user_info from '../data/user_info'

import { FaLinkedin } from 'react-icons/fa6'
import { MdEmail, MdPhone } from 'react-icons/md'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import emailjs from 'emailjs-com'

interface FormData extends Record<string, unknown> {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .send(
        'service_x354cd8',
        'template_z95l70k',
        formData,
        'iphHHwrr-BTsI4POq'
      )
      .then(
        () => {
          alert('Email sent successfully!')
          setFormData({ name: '', email: '', message: '' })
        },
        (err) => {
          console.error('Error sending email:', err)
          alert('Failed to send the email. Please try again later.')
        }
      )
  }

  return (
    <section id="contact" className="mt-8 md:mt-16 pt-6 md:pt-12 px-6 lg:px-24">
      <h4 className="text-5xl text-center font-bold text-zinc-900 dark:text-zinc-100">
        Contact
      </h4>
      <form onSubmit={handleSubmit} className="mx-auto p-4">
        <div className="mb-4">
          <label
            htmlFor="name or company"
            className="block text-md font-medium text-black dark:text-white"
          >
            Name or company name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full bg-transparent text-black dark:text-white rounded-md border-blue-500 border-[1px] px-2 py-1 focus:ring-white-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-md font-medium text-black dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full bg-transparent text-black dark:text-white rounded-md border-blue-500 border-[1px] px-2 py-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-md font-medium text-black dark:text-white"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full bg-transparent text-black dark:text-white rounded-md border-blue-500 border-[1px] ring-white px-2 py-1 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </form>

      <div className="flex flex-col gap-y-2 md:mt-12 md:flex-row md:justify-evenly">
        <div>
          <a
            target="_blank"
            href={user_info.socials.linkedin}
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
          >
            <FaLinkedin className="self-center text-lg text-blue-800 dark:text-blue-500" />
            <span className="self-center">Follow on Linkedin</span>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href={`mailto:${user_info.main.email}`}
            className="flex text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
          >
            <MdEmail className="self-center text-lg text-blue-800 dark:text-blue-500" />
            <span>{user_info.main.email}</span>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href={`tel:${user_info.main.phone}`}
            className="flex text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
          >
            <MdPhone className="self-center text-lg text-blue-800 dark:text-blue-500" />
            <span>{user_info.main.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
