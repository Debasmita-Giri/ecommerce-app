import React from "react";
import CartItem from "./CartItem";
import { Typography, Container, Box, IconButton, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import { SentimentVeryDissatisfied } from '@mui/icons-material';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  console.log(jwt)
  const { cart } = useSelector(store => store);
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    dispatch(getCart(jwt));
    setCartUpdated(false);
  }, [cartUpdated]);

  // Callback function to handle cart item update
  const handleCartItemUpdate = () => {
    setCartUpdated(true);
  };
 
  return (
  jwt? 
  (   <div className="">
      { cart.cartItems?.length > 0 ? (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {cart.cartItems.map((item) => (
                <CartItem key={item} item={item} showButton={true} onCartItemUpdate={handleCartItemUpdate} />
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />
              
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({cart.cart?.totalItem} item)</span>
                  <span>₹{cart.cart.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{cart.cart?.discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
          >
            <SentimentVeryDissatisfied color="primary" sx={{ width: 300, height: 70, fontSize: 20 }} />
            <Typography variant="h5" color="textSecondary" mt={2} fontWeight={1000}>
              Oh no! Your cart is empty.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={2} fontWeight={500}>
              Your cart is feeling a bit lonely. Let's make it the happiest cart in town! 🛒✨
            </Typography>
          </Box>
        </Container>
      )}
    </div>
  ):(
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <SentimentVeryDissatisfied color="primary" sx={{ width: 200, height: 70, fontSize: 30 }} />
        <Typography variant="h5" color="textSecondary" mt={2} fontWeight={1000}>
          Oops! It looks like you're not logged in.
        </Typography>
        <Typography variant="body1" color="textSecondary" mt={2} fontWeight={500}>
          To view your cart, please log in.
        </Typography>
        <Button
          onClick={() => navigate("/login")} // Replace with your login route
          variant="contained"
          color="primary"
          mt={3}
        >
          Login Now
        </Button>
      </Box>
    </Container>
  )
  
  );
};

export default Cart;
