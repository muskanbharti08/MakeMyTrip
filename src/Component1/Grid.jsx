import React from 'react'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
export default function Grid() {
  return (
    <>
    <div class="grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-2 mx-2  gap-y-2">
  <div className="bg-gray-200 col-span-2 flex">
        <p className=""><FlightTakeoffIcon/></p>
        <div className="">
                <p className="text-xs font-extralight">FROM</p>
                <p className="text-xs font-bold">Delhi <span className="text-xs font-thin">Del</span></p>
                <p className="font-thin text-xs">Delhi Airport</p>
        </div>
  </div>
  <div className="bg-gray-200 col-span-2">
  <p className=""><FlightTakeoffIcon/></p>
        <div className="">
                <p className="text-xs font-extralight">FROM</p>
                <p className="text-xs font-bold">Delhi <span className="text-xs font-thin">Del</span></p>
                <p className="font-thin text-xs">Delhi Airport</p>
        </div>
  </div>
  <div className="bg-gray-200 ">        <p className=""><FlightTakeoffIcon/></p>
        <div className="">
                <p className="text-xs font-extralight">FROM</p>
                <p className="text-xs font-bold">Delhi <span className="text-xs font-thin">Del</span></p>
                <p className="font-thin text-xs">Delhi Airport</p>
        </div></div>
  <div className="bg-gray-200  ">        <p className=""><FlightTakeoffIcon/></p>
        <div className="">
                <p className="text-xs font-extralight">FROM</p>
                <p className="text-xs font-bold">Delhi <span className="text-xs font-thin">Del</span></p>
                <p className="font-thin text-xs">Delhi Airport</p>
        </div></div>
  {/* <div className="bg-gray-400 col-span-2 ">05</div> */}
  {/* <div className="bg-gray-400 col-span-2  ">06</div> */}
</div>
<div className="bg-gray-200 mt-2 mx-2 ">05</div>
    

    <button className=" bg-blue-500 w-full my-4 rounded-md text-white ">SEARCH FLIGHTS        </button>
    </>
  )
}
