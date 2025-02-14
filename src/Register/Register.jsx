import { useState } from "react";
import Form from "common/Form";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [formData, setFormData] = useState({});
  const signup = async () => {
    
    try {
      const response = await fetch("http://localhost:5001/api/v1/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email? {...formData,email:email}:formData) ,
      });
      const data = await response.json();
   console.log(data)

      if (response.ok) {
        toast.success("User Succesfully registered", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: false,
          rtl: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        navigate("/login", { state: { email: formData.email } });
      } 
      else {
        toast.error(data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: false,
          rtl: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const formItems = [
    {
      label: "",
      name: "username",
      type: "text",
      placeholder: "UserName",
      inputStyle:
        "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white",
    },
    {
      label: "",
      name: "email",
      type: "email",
      placeholder: "Email",
      inputStyle:
        "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white",
      ...(email ? { value: email } : {}),
    },

    {
      label: "",
      name: "password",
      type: "password",
      placeholder: "Password",
      inputStyle:
        "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white ",
    },
  ];
  const formButtons = [
    {
      title: "Sign Up",
      style: "bg-[#E50914] text-white font-medium py-3 rounded-[4px] w-full",
      action: signup,
    },
    {
      title: "Already have an account? Sign In",
      style: "text-zinc-400 w-full mt-[25px]",
      action: () => {
        navigate("/login");
      },
    },
  ];
  return (
    <div
      className="relative w-full h-screen 
  flex items-center justify-center bg-cover bg-no-repeat bg-center
    bg-black/30 bg-blend-overlay bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')] "
    >
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="w-[90px] md:w-[120px]
          lg:w-[160px] absolute top-[24px]
          left-[168px]  "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </button>
      <Form
        headerText={{
          title: "Sign Up",
          style: "text-white font-bold text-[32px]",
        }}
        formItems={formItems}
        setFormData={setFormData}
        formButtons={formButtons}
        formStyle="w-[450px]
        h-[470px] bg-black/70
        px-[68px] pt-[48px]
        flex flex-col
        gap-4 rounded-[4px]
        "
      />{" "}
    </div>
  );
};

export default Register;
