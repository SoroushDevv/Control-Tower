import React from "react";







export default function Customers() {



    return (
        <div className="bg-red-500 overflow-y-auto h-screen w-full">
            <div className="">
                <p className="">اطلاهات کلی مشتری ها</p>
            </div>
            <div className="">
                <div>
                    <div></div>
                    <div>
                        <h2></h2>
                    </div>
                    <div>
                        <span className="numbers"></span>
                        <span className="percent"></span>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <h2></h2>
                    </div>
                    <div>
                        <span className="numbers"></span>
                        <span className="percent"></span>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <h2></h2>
                    </div>
                    <div>
                        <span className="numbers"></span>
                        <span className="percent"></span>
                    </div>
                </div>
            </div>
            <div className="main-info">
                <div className="">
                    <span className="title"></span>
                    <select className="filter"></select>
                    <button className="add user"></button>

                </div>
                <div className="">
                    <div className="search user">
                        <input type="search" />
                    </div>
                    <select className="filter user loyalty">

                    </select>
                </div>
                <div className="users table">
                    {/* table */}
                </div>
            </div>
        </div>
    )
}