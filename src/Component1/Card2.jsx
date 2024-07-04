import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
export default function Card2() {
  return (
   <>
   
   <div className="w-full">
   <div className="card  shadow-xl bg-sky-200">
  
  <div className="card-body">
    
      <div className="badge bg-green-400 text-xs font-semibold text-white">NEW</div>
   
    <p>Looking for the cheapest return fligth from <span className="font-bold">delhi to mumbai</span></p>
    <button className="text-blue-700 text-sm font-semibold "> EXPLORE FARE CALENDER  <span className="text-black"><ArrowRightAltIcon/></span></button>
  </div>
</div>
   </div>
   </>
  )
}
