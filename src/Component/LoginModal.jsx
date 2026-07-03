import React from "react";

export default function LoginModal(){
     return(
          <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
               <div className="w-[570px] h-[340px] text-center bg-white rounded-2xl">
                    <button className="text-xl py-2 px-2.5 fixed top-[15px] left-[15px] cursor-pointer">s-</button>

                    <div className="flex items-center justify-center flex-col">
                         <div className="w-full h-full flex items-center justify-center">
                              <img src="https://cdn.grofers.com/layout-engine/2023-11/app_logo.svg" alt="Blinkit" loading="lazy" width={64} height={64} className="object-cover" />
                         </div>

                         <div className="flex items-center justify-center">
                              <h2>India's last minute app</h2>
                              <h3>Log in or Sign up</h3>
                         </div>
                    </div>
               </div>
          </div>
     )
}