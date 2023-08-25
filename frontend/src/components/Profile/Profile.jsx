

const Profile = () => {
  return (
    <div>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  src="https://avatars.githubusercontent.com/u/113108193?v=4"
                  alt=""
                />
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Active
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Clear
              </button>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">Puskar Roy</h1>
            <p className="font-light text-gray-600 mt-3">
              puskarroy600@gmail.com
            </p>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
