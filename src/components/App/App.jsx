import { useEffect, useState } from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails';
import { MediaContextProvider } from '../../MediaContext';

function App() {


  return (
    <>
      <Navbar />
      
        <MediaContextProvider>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="restaurantdetails" element={<RestaurantDetails />}>
              <Route path=":name" element={<RestaurantDetails />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </MediaContextProvider>
      {
        //  data && data.length>0 && data.map((item)=><p>{item.about}</p>)
      }
    </>
  );
}

export default App;
