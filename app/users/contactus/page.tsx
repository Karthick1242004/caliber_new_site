import { FloatingNav } from '@/components/Navbar/floating-navbar'
import { FloatingNavDemo } from '@/components/Navbar/floatnavbarcomb'
import { Mail } from 'lucide-react'

export default function ContactUs() {
  return (
    <>
    <FloatingNavDemo/>
    <div className="flex flex-col md:flex-row bg-black text-white min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-between">
        <div>
          <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-8">
            <Mail className="w-6 h-6 text-blue-500" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Contact us</h1>
          <p className="text-gray-400 mb-8">
            We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
          </p>
          <div className="text-gray-400 space-y-2">
            <p>calibertech875@gmail.com</p>
            <p>+91 6382682378</p>
            <p>13/73 Ganapathy Nagar, Salem Steel Plant, Salem 636030</p>
          </div>
        </div>
        <div className="mt-12">
          <img src="https://pro.aceternity.com/world.svg" alt="World Map" className="w-full max-w-lg" />
         
        </div>
      </div>

      {/* Right Section */}
      
      <div className="md:w-1/2 bg-gray-900 p-8 md:p-16 rounded-3xl h-[95vh] mt-[3%]">
        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent px-4 py-3 text-white"
              placeholder="Karthick"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent px-4 py-3 text-white"
              placeholder="calibertech875@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent px-4 py-3 text-white"
              placeholder="Caliber Tech"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent px-4 py-3 text-white"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}