import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GTranslateIcon from '@mui/icons-material/GTranslate';



export default function Card1() {
  return (
<>

<div className="flex justify-around ">
        <div className="flex">
        <h1 className=""><KeyboardBackspaceIcon/></h1>
        <p className="">Flight Search</p>
        </div>

        <button className="border-2 rounded-lg "><GTranslateIcon/>
        {/* <label htmlFor="cars">English</label> */}

        <select name="cars" id="cars">
  <option value="volvo">Hindi</option>
  <option value="saab">Tamil</option>
  <option value="sab">English</option>
</select>
        </button>
</div>


{/* Parent div */}
        <div className="flex border-2 shadow-md shadow-gray-400">
                <img src="https://tse2.mm.bing.net/th?id=OIP.oE9Fp9TEUzR9yTmZsbugRwHaJ5&pid=Api&P=0&h=220" alt="" className="h-fit w-fit" />

                {/* Paragrapg */}
                <div className="flex-row text-xs">
                        <p className="text-blue-500">dolor sit amet consectetur  <span className="-ml-2 text-xs"><KeyboardArrowRightIcon/></span>  </p>
                        <p className="">Lorem ipsum dolor sit amet consectetu</p>
                </div>
        </div>
</>

)
}
