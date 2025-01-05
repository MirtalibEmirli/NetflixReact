import { useNavigate } from "react-router"

const NotFound = () => {
  const navigate=useNavigate()
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white"> 
    <p>Page you are loking for is not aviable</p>
     <button onClick={()=>{
      navigate("/")
     }} className="bg-[#e50011] px-6 py-3 font-bold text-lg mt-4 rounded-md" >Go Back</button>
      

      </div>
  )
}

export default NotFound