import { Link } from "react-router-dom";

const RouteNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100'>
      <h1 className='text-6xl font-bold'>404 Error</h1>
      <p className='text-lg mt-4'>Oops! The page you are looking for does not exist.</p>
      <Link to="/"
       className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" >Go Back to Home</Link>
    </div>
  )
}

export default RouteNotFound
