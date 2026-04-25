import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-200px] left-[-200px] w-[800px] h-[800px] bg-[#60B1FF] rounded-full opacity-30 blur-[100px]" />
        <div className="absolute top-[-300px] left-[-300px] w-[1000px] h-[1000px] bg-[#319AFF] rounded-full opacity-20 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-[75px] font-bold leading-[1.05] tracking-[-2px]">
              Study Smarter, Achieve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Higher</span>
            </h1>

            {/* Social Proof Badge */}
            <div className="mt-8 bg-white/50 backdrop-blur-md rounded-full py-3 px-6 w-fit flex items-center gap-3 shadow-lg border border-gray-100">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFB547]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium text-gray-700">Trusted by 2500+ Students & Parents</span>
            </div>

            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl tracking-[-0.5px]">
              Located inside the trusted campus of Ursuline Convent School & Inter College, we provide a safe, focused, and high-quality learning environment designed for academic excellence and future success.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500/90 to-blue-700/90 text-white px-8 py-4 rounded-2xl text-lg font-medium flex items-center gap-2 shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-[2px] hover:shadow-xl">
                Start Your Journey
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white bg-white/30 rounded-full p-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <button className="bg-white/30 backdrop-blur-md border border-gray-200 px-8 py-4 rounded-2xl text-lg font-medium text-gray-700 hover:bg-white/50 transition-all duration-300 shadow">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Column - Glassy Orb */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square rounded-full overflow-hidden transform scale-125 mix-blend-screen">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  filter: 'hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1)'
                }}
              >
                <source src="/glassy-orb.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-32 text-center">
          <h2 className="text-xl font-medium text-gray-600 mb-12">Trusted by Students, Parents & Academic Mentors</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-16 lg:gap-[100px] max-w-6xl mx-auto">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-100 border border-gray-200 rounded-xl w-24 h-24 flex items-center justify-center opacity-70">
                <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
