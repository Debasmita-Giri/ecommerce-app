import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../Auth/AuthModal";

const HomeProductCard = ({ product }) => {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  console.log(jwt)
  const handleNavigate=()=>{
    if(jwt){
    navigate(`/product/${product?.id}`)
    setOpenAuthModal(false);
    }
    else{
      navigate("/login")
      setOpenAuthModal(true);
    }
  }
  const handleClose = () => {
    setOpenAuthModal(false);
   };
  return (
    <div
    onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500" style={{ height: '30px' }}>{product?.title}</p>
      
      </div>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>

  );
};

export default HomeProductCard;
