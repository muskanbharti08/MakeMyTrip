import React from 'react'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';

export default function Header() {
  return (
<>
<div className=" bg-sky-100 pt-3 flex justify-between space-x-1  ">


        {/* for paragraph */}
        <div className=" flex w-full ">
        <h1 className=""><SendToMobileIcon/></h1>
        <div className="flex-row">
                <h2 className="font-semibold text-xs">Download App & Save More</h2>
                <p className="text-xs">
                        Lorem ipsum dolor sit amet  elit. Ratione, est.
                </p>
        </div>
        </div>



{/* for button */}

<button className="text-xs border-2 text-blue-500 border-blue-500 w-24 h-6  rounded-sm p-0 ">
        
Install Now

</button>

        
</div>


</>
  )
}
