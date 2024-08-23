import React from 'react';


const HomeInfo = ({ currentStage }) => {

  if (currentStage === 1)
    return (
      <div className='sm:text-xl sm:leading-snug text-center py-4 px-8 mx-5 bg-white bg-opacity-20 rounded-lg'>
        <h1 className='text-white'>
          Hi, I'm
          <span className='font-semibold mx-2 text-white'>Roshini</span>
          👋
          <br />
          A Computer Science Student from San Francisco
          <p className='text-sm pt-2'>Drag your cursor right to learn more about me</p>
        </h1>
      </div>
    );

    if (currentStage === 2) {
      return (
        <div className='sm:text-lg text-left py-4 px-6 mx-5 bg-white bg-opacity-70 rounded-lg'>
          <h1 className='text-xl font-bold text-black mb-2 underline'>Education</h1>
          <div className='flex justify-between items-center mb-2'>
            <p className='font-semibold text-black'>University of California, Santa Cruz</p>
            <p className='text-black italic ml-4'>Expected Graduation: June 2025</p>
          </div>
          <p className='text-black'>Bachelor of Science in Computer Science</p>
          <ul className='list-disc list-inside text-black mt-2'>
            <li>Dean’s Honor Student</li>
            <li>
              Relevant Coursework: Data Structures and Algorithms, Analysis of Algorithms, Principles of Computer Systems Design, Computer Architecture, Database Management, Machine Learning, NLP Fundamentals
            </li>
          </ul>
        </div>
      );
    }


    if (currentStage === 3) {
      return (
        <div className='sm:text-lg text-left py-4 px-6 mx-5 bg-white text-black bg-opacity-70 rounded-lg'>
          <h1 className='text-center text-xl'>Professional Experience</h1>
          <ul className="timeline timeline-vertical lg:timeline-horizontal">
  <li>
    <div className="timeline-start">09/2022 – Present
    </div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box bg-slate-50">UCSC Girls Who Code
      <p className='text-center italic'> President</p>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">08/2023 – 12/2023
    </div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box bg-slate-50">Raytheon Technologies
      <p className='text-center italic'>Product Dev Intern</p>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">07/2022 – 09/2022
    </div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box bg-slate-50">UC Santa Cruz Genomics
      <p className='text-center italic'> Research Intern</p>
    </div>
  </li>
</ul>

      </div>
      );
    }
    if (currentStage === 4) {
      return (
        <div className='sm:text-lg text-left py-4 px-6 mx-5 bg-white text-black bg-opacity-70 rounded-lg'>
        <h1 className='text-xl font-bold text-black text-center mb-2 underline'>Skills</h1>
        <div className='flex justify-between items-center mb-2'>
            <p className='font-semibold text-black'>Technical Skills: </p>
            <p className='text-black  ml-4'>C/C++, HTML/CSS, JavaScript, React, Git, Figma,  SQL, Data Visualization</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
            <p className='font-semibold text-black'>Product Management:</p>
            <p className='text-black  ml-4'>Agile methodologies, Jira,  Documentation, Stakeholder Communication
            </p>
            </div>
      </div>
      );
    }
    if (currentStage === 5) {
      return (
        <div className='sm:text-lg text-left py-4 px-6 mx-5 bg-white text-black bg-opacity-70 rounded-lg'>
        <h1 className='text-xl font-bold text-black text-center mb-2 underline'>Certifications</h1>
          <div className='flex justify-between items-center mb-2'>
            <p className='font-semibold text-black'>Product Management Fundamentals:</p>
            <p className='text-black italic ml-4'>University of Virginia, 2024</p>
            </div>
      </div>
      );
    }
    if (currentStage === 6) {
      return (
        <div className="text-left py-6 px-8 mx-5 bg-gradient-to-r bg-white bg-opacity-80 rounded-lg shadow-2xl max-w-lg mx-auto border border-gray-300">
          <h1 className="text-xl font-bold text-black text-center mb-2 underline">Fun Facts!</h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-6">
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-gray-800 mb-4">
                When I’m not immersed in coding or working on new projects, I enjoy a variety of hobbies including music and fostering animals.
              </p>
            </div>
          </div>
          {/* Spotify Playlist Embed */}
          <div className="mt-6">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/5xkRACR0aLXSOdITPScqOt?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <p>These are some of my favorite songs at the moment</p>
        </div>
      );
    }
    
    if (currentStage === 7) {
      return (
        <div className='text-left py-6 px-8 mx-5 bg-gradient-to-r bg-white bg-opacity-80 rounded-lg shadow-2xl max-w-lg mx-auto border border-gray-300'>
          <h1 className='text-xl font-bold text-black text-center mb-2 underline'>Contact Me</h1>
          <p>
            Email:
            <a href="mailto:rpulle@ucsc.edu" className="text-blue-500 underline ml-1">rpulle@ucsc.edu</a>
          </p>
          <p>Phone: 5104025978</p>
          <div className="flex justify-center items-center mt-4">
            <a href="/Roshini Pulle Resume.docx.pdf" download="Roshini_Pulle_Resume.pdf" className="btn btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      );
    }
    
    
    return null;

  };

  export default HomeInfo;
