import React from "react";
import Login from "../../Components/Auths/Login";
import CircularText from './CircularText';


function LoginPage() {


    return (

        <div className="z-10 top-0 left-0" style={{ width: '100%', height: '600px', position: 'relative' }}>


            <div className="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 flex flex-row-reverse min-w-[920px] max-h-[600px] shadow-lg  rounded-lg p-2 ">
                <div className="hidden md:flex md:justify-center md:items-center md:w-1/2 md:h-full  border rounded-md p-2 bg-black">
                    <CircularText
                        text="CONCTROL*TOWER*DASHBOARD*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class"
                    />
                    {/* <div className="size-96 border-1 p-2">
                        <img className="h-full w-full border-1 border-b-slate-900" src="./logo3.png" alt="dashboardlogo" />
                    </div> */}
                </div>
                <div className="w-1/2 p-2">
                    <Login />
                </div>
            </div>
        </div>

    )
}

export default LoginPage;