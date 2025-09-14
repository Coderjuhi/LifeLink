import React from 'react'

const Home = () => {
  return (
    <>
      <div className="max-w-10xl mx-auto p-3.5">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center min-h-[80vh]">

          {/* Left column: headings, paragraph, buttons */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-5xl md:text-5xl font-bold leading-tight mb-2">Uniting for Change, Building a Brighter Future</h2>
            <p className="text-1.5xl md:text-1.5xl font-semibold text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta corrupti sed consequuntur suscipit quos odit</p>


            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Primary Action
              </button>

              <button className="px-6 py-3 rounded-2xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition">
                Secondary Action
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
      <div className="max-w-10xl mx-auto my-10 px-6">
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center min-h-[90vh] p-8 gap-8">

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


    </>
  )
};

export default Home
