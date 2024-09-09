import React, { useEffect, useState } from 'react';

const CardShowDetails = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
  
    const storedData = JSON.parse(localStorage.getItem('feedbackList'));
    console.log('Stored Data:', storedData); 

    if (storedData && Array.isArray(storedData)) {
      setFeedbackList(storedData);
    } else {
      console.log('No feedback data found or data is not an array');
    }
  }, []);

  const handleDelete = (index) => {
   
    const storedData = JSON.parse(localStorage.getItem('feedbackList')) || [];

    storedData.splice(index, 1);

   
    localStorage.setItem('feedbackList', JSON.stringify(storedData));

  
    setFeedbackList(storedData);
  };

  if (feedbackList.length === 0) {
    return <div className="text-center text-white">No feedback available.</div>;
  }

  return (
    <div className="p-2 rounded-md w-full max-w-3xl mx-auto ">
         <h3 className="text-center text-yellow-600 text-bold text-2xl py-4"><span className="text-red-900 text-bold text-2xl">FeedBack</span> Details</h3>
      {feedbackList.map((feedback, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-600 rounded-lg shadow">
          <div className='flex flex-col md:flex-row justify-between items-center px-4 text-white'>
            <div className='text-white mb-4 md:mb-0'>
              <span className='font-bold text-xl'>Name:</span> {feedback.name}
            </div>
            <div className='text-gray-300'>Email: {feedback.email}</div>
          </div>
          <div className='text-start px-4 py-4 text-gray-400'>
            {feedback.about}
          </div>
          <div className='flex justify-between items-center px-4 py-2 text-white'>
            <div className='text-lg'>
              Rating: {feedback.rating}
            </div>
            <button 
              className='px-6 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors'
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardShowDetails;
