 const ParentEngagementCard = () => {
    return (
      <div className=" rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Parent Engagement Center</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-md mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-800">Upcoming Parent-Teacher Meeting</h3>
              <p className="text-sm text-gray-600">April 15, 2025 · 4:00 PM</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-md mr-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-800">Attendance Update</h3>
              <p className="text-sm text-gray-600">Your child has attended 92% of classes this month</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-md mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-800">Learning Resources</h3>
              <p className="text-sm text-gray-600">3 new resources available for Mathematics</p>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-gray-200" />
        
        <div className="flex justify-between">
          <button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            Message Teacher
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            View All Updates
          </button>
        </div>
      </div>
    );
  };
  export default ParentEngagementCard