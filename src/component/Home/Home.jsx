import React from 'react'
import { motion } from "framer-motion";
import { Heart, Users, MapPin, Clock, Award, Shield } from 'lucide-react';

import { FaArrowRight } from "react-icons/fa6";


const blogs = [
  {
    date: "20 Jan, 2025",
    title: "Providing Food, Clean Water, and Medical Care to Those Who Need",
    desc: "Through support & donations, we bring food, clean water, and medical care to vulnerable families.",
    img: "https://tci.cornell.edu/wp-content/uploads/2021/03/handwash-scaled-2048x1366.jpg",
  },
  {
    date: "25 Jan, 2025",
    title: "No One Should Go Hungry, Thirsty, or Without Treatment",
    desc: "Providing support, food, & medicine and bringing hope to underprivileged communities.",
    img: "https://assets.change.org/photos/0/sl/ml/HDSLMLuJKyNoikM-1600x900-noPad.jpg?1739433372",
  },
  {
    date: "30 Jan, 2025",
    title: "Nutritious Meals, Safe Water, and Health Care to Every Child in Need",
    desc: "Together, we can make a real difference in children’s health and well-being.",
    img: "https://samvadaworld.com/wp-content/uploads/2021/05/26961702527_cecbe9beb3_b.jpg",
  },
];

const features = [
  {
    icon: Users,
    title: 'Verified Donors',
    description: 'All our donors are medically verified and regularly screened for safety.',
  },
  {
    icon: MapPin,
    title: 'Location-Based Matching',
    description: 'Find the nearest donors quickly with our advanced location tracking.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your personal information is protected with enterprise-grade security.',
  },
  {
    icon: Award,
    title: 'Emergency Response',
    description: '24/7 emergency support for critical blood and organ requirements.',
  },
];
const Home = () => {
  return (
    <>
      <div className="max-w-10xl mx-auto p-2 ">
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-1xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center min-h-[80vh]">

          {/* Left column: headings, paragraph, buttons */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-5xl md:text-5xl font-bold leading-tight mb-2">Uniting for Change, Building a Brighter Future</h2>
            <p className="text-1.5xl md:text-1.5xl font-semibold text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta corrupti sed consequuntur suscipit quos odit</p>


            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-red-600 text-white font-medium hover:bg-red-700 transition">
                Register As Donor
              </button>

              <button className="px-6 py-3 rounded-2xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition">
                Request Blood/Organ
              </button>
            </div>
          </div>

          {/* Right column: image */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <img
              src="/blood-donation.png"
              alt="Illustration"
              className="w-full max-w-lg h-auto rounded-xl object-cover shadow-inner" />
          </div>

          {/* Top circle with image
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
            <img
              src="/blood-recieve.jpg"   // replace with your image path
              alt="Top Icon"
              className="w-full h-full object-cover"
            />
          </div> */}


        </div>
      </div>


      {/* //second container */}
      <div className="max-w-10xl mx-auto  p-3.5">
        <div className="bg-white rounded-1xl  overflow-hidden flex flex-col md:flex-row items-center min-h-[80vh]">

          {/* Left column: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
            <h2 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-1xl text-gray-700 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem magnam, dolorum
              libero non commodi nemo nam. Blanditiis maxime dolorem voluptas. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Expedita mollitia eum odit animi ut. Explicabo ipsam reprehenderit suscipit ea quasi!
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://regencyhealthcare.in/wp-content/uploads/2018/08/blood-donation-3.png"
              alt="Illustration"
              className="w-full max-w-2xl h-auto rounded-xl object-cover shadow-xl"
            />
          </div>

        </div>
      </div>

      {/* Third container */}
      <div className="max-w-10xl mx-auto p-3.5">
        <div className="bg-white rounded-2xl  overflow-hidden min-h-[80vh] p-8">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 leading-snug px-4 max-w-3xl mx-auto -mt-4">
            Your Donation Brings Smiles And Transforms Lives
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {/* Card 1 */}
            <div
              className="bg-white p-6 rounded-2xl 
               transition-all duration-300 cursor-pointer 
               relative w-72 
               border-l-0 hover:border-l-8 hover:border-l-orange-400"
            >
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Feature One</h3>

              <p className="text-gray-600 py-3">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Debitis, iste. adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dicta! Lorem ipsum
                dolor sit
              </p>

              <p className="text-gray-900 flex items-center py-6 justify-between">
                Lorem ipsum Lorem, ipsum <FaArrowRight />
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white p-6 rounded-2xl 
             transition-all duration-300 cursor-pointer 
             relative w-72 
             border-l-0 hover:border-l-8 hover:border-l-orange-400"
            >
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Feature Two</h3>

              <p className="text-gray-600 py-3">
                Doloremque cum asperiores dicta Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sit, illum! ipsum consequatur laborum Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quidem, explicabo.
              </p>

              <p className="text-gray-900 flex items-center py-6 justify-between">
                Lorem ipsum Lorem, ipsum <FaArrowRight />
              </p>
            </div>



            {/* Card 3 */}
            <div
              className="bg-white p-6 rounded-2xl 
             transition-all duration-300 cursor-pointer 
             relative w-72 
             border-l-0 hover:border-l-8 hover:border-l-orange-400"
            >
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Feature Three</h3>

              <p className="text-gray-600 py-3">
                Ullam, provident pariatur earum doloremque unde animi doloribus Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, eligendi
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consec
              </p>

              <p className="text-gray-900 flex items-center py-6 justify-between">
                Lorem ipsum Lorem, ipsum <FaArrowRight />
              </p>
            </div>


            {/* Card 4 */}
            <div
              className="bg-white p-6 rounded-2xl 
             transition-all duration-300 cursor-pointer 
             relative w-72 
             border-l-0 hover:border-l-8 hover:border-l-orange-400"
            >
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Feature Four</h3>

              <p className="text-gray-600 py-3">
                Necessitatibus iure magni repellendus dolorum vitae velit minus Lorem
                ipsum dolor sit, amet Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Autem, illo! consectetur adipisicing elit
              </p>

              <p className="text-gray-900 flex items-center py-6 justify-between">
                Lorem ipsum Lorem, ipsum <FaArrowRight />
              </p>
            </div>



          </div>

        </div>

      </div>
      {/* fourth container */}
      {/* Heading */}
      <div className="max-w-10xl mx-auto p-3.5">
        <div className="bg-white rounded-1xl shadow-lg overflow-hidden min-h-[80vh] p-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 leading-snug px-4 max-w-3xl mx-auto -mt-4">
            Together For Change: Join Our Mission To Make A Difference
          </h2>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-3 ">
            {/* Card 1 */}
            <div className="bg-white px-9  py-9 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group relative w-90 ">
              <h3 className="text-xl text-orange-400 font-semibold mb-2 ">Feature One</h3>
              <img
                src="/covid_donate.jpg"
                alt="Illustration"
                className="w-full max-w-lg h-auto rounded-xl object-cover shadow-inner " />

              <p className="text-gray-600 py-3">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,


              </p>
              <p className='text-gray-900  flex items-center py-6 justify-between '>Lorem ipsum Lorem, ipsum
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-9 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group relative w-90">
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Feature Two</h3>
              <img
                src="/doing-blood-donate.jpg"
                alt="Illustration"
                className="w-full max-w-lg h-auto rounded-xl object-cover shadow-inner " />
              <p className="text-gray-600 py-3">
                Doloremque cum asperiores dicta Lorem ipsum dolor, sit amet consectetur adipisicing elit.

              </p>
              <p className='text-gray-900  flex items-center py-6 justify-between '>Lorem ipsum Lorem, ipsum
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group relative w-90">
              <h3 className="text-xl text-orange-400 font-semibold mb-2">Feature Three</h3>
              <img
                src="/plasma-donate.jpg"
                alt="Illustration"
                className="w-full max-w-lg h-auto rounded-xl object-cover shadow-inner " />
              <p className="text-gray-600 py-3">
                Ullam, provident pariatur earum doloremque unde animi doloribus Lorem ipsum dolor sit amet consectetur,


              </p>
              <p className='text-gray-900  flex items-center py-6 justify-between '>Lorem ipsum Lorem, ipsum


              </p>
            </div>
          </div>
        </div>
      </div>
      {/* fifth container */}
      <div className="max-w-10xl mx-auto p-3.5">

        <div className="bg-white rounded-1xl shadow-lg overflow-hidden min-h-[60vh] p-8">
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose LifeLink?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We provide a secure, efficient, and reliable platform for blood and organ donation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

      </div>
      {/* sixth container */}
      <div className="max-w-10xl mx-auto p-3.5">

        <div className="bg-white rounded-1xl shadow-lg overflow-hidden min-h-[60vh] p-8">
          <section className="py-12">
            {/* Heading */}
            <div className="text-center mb-10">
              <p className="text-orange-500 font-medium">From The Blog</p>
              <h2 className="text-3xl font-bold text-gray-800">
                Our Latest News And Articles
              </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1f3b47] text-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                  initial={{ opacity: 0, x: -100 }}   // start hidden and left
                  whileInView={{ opacity: 1, x: 0 }} // animate when visible
                  transition={{ duration: 0.8, delay: index * 0.2 }} // stagger animation
                  viewport={{ once: true }}
                >

                  <div className="relative">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white text-gray-800 text-sm px-3 py-1 rounded-md shadow">
                      {blog.date}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{blog.desc}</p>
                    <button className="flex items-center gap-2 text-orange-400 hover:underline">
                      Read more <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>


      </div>



    </>
  )
};

export default Home
