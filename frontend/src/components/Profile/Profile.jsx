import { useState , useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { url } from "../Auth/url";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
   const [data, setData] = useState([]);
   useEffect(() => {
     axios
       .get(`${url}/api/user`, {
         withCredentials: true,
       })
       .then((response) => {
         console.log(response.data);
         setData(response.data);
       })
       .catch((error) => {
         console.log(error);
         navigate('/login')
       });
   }, []);

   const [click,setClick] = useState(false);
   const clickButton = ()=>{
    setClick(!click);
   }

  return (
    <div>
      <Toaster className="z-50" position="top-center" reverseOrder={false} />
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
              {click ? (
                <button
                  onClick={clickButton}
                  className="text-white py-2 px-4 uppercase rounded bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Offline
                </button>
              ) : (
                <button
                  onClick={clickButton}
                  className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Go Online
                </button>
              )}

              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Clear
              </button>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{data.name}</h1>
            <p className="font-light text-gray-600 mt-3">{data.email}</p>
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
};

export default Profile;
