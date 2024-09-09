import React from 'react';
import FromFeedback from './Feedback';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from "react-toastify";
import CardShowDetails from './CardShowDetails';

const Main = () => {
  return (
    <>
      <section className='bg-gray-800 p-6 min-h-screen'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='w-full'>
              <FromFeedback />
            </div>
            <div className='w-full'>
              <CardShowDetails />
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default Main;
