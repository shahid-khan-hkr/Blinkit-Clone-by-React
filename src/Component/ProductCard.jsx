import React, { useState } from "react";

export default function ProductCard(props) {
     const [count, setCount] = useState(0);

     function Increase() {
          setCount(count + 1)
     }

     function Decrease() {
          if (count > 0) {
               setCount(count - 1)
          }
     }

     return (
          <div className="w-[179px] bg-white border-[0.5px] border-[rgb(232,232,232)] shadow-[rgba(0,0,0,0.04)_2px_2px_8px] rounded-lg pb-3 flex items-center flex-col shrink gap-0.5 cursor-pointer relative">
               {
                    props.Discount && (
                         <div className="absolute top-0 left-3 flex items-center">
                              <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path>
                              </svg>

                              <div className="text-[9px] font-extrabold text-white text-center absolute inset-0 flex items-center justify-center">{props.Discount} OFF</div>
                         </div>
                    )
               }

               <img src={props.src} alt="" width={140} height={140} loading="lazy" className="mx-auto object-fill" />

               <div className="w-full px-3">
                    <div className="w-full h-[36px] text-[13px] font-semibold text-[rgb(31,31,31)] mb-1.5 line-clamp-2">{props.title}</div>

                    <div className="w-full h-[26px] flex items-center mb-2">
                         <span className="h-[13px]">{props.weight} {props.unit}</span>
                    </div>

                    <div className="flex items-center justify-between">
                         <div className="flex items-center justify-center flex-col">
                              <div className="text-xs font-semibold text-[rgb(31,31,31)]">{props.SP}</div>
                              <div className="text-xs font-normal text-[rgb(130,130,130)] line-through">{props.MRP}</div>
                         </div>

                         {
                              count == 0 ? (<button onClick={Increase} className="w-[66px] h-[31px] bg-[rgb(247,255,249)] text-[13px] font-semibold text-[rgb(49,134,22)] border border-[rgb(49,134,22)] rounded-md flex items-center justify-center cursor-pointer">ADD</button>) : (
                                   <div className="flex items-center justify-center gap-2.5">
                                        <button onClick={Increase} className="w-[20px] h-[31px] bg-[rgb(247,255,249)] text-[13px] font-semibold text-[rgb(49,134,22)] border border-[rgb(49,134,22)] rounded-md flex items-center justify-center cursor-pointer">+</button>
                                        <span>{count}</span>
                                        <button onClick={Decrease} className="w-[20px] h-[31px] bg-[rgb(247,255,249)] text-[13px] font-semibold text-[rgb(49,134,22)] border border-[rgb(49,134,22)] rounded-md flex items-center justify-center cursor-pointer">-</button>
                                   </div>
                              )
                         }
                    </div>
               </div>
          </div>
     )
}