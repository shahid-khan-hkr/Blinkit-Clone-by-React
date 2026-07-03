import React from "react";
import HouseholdCleaningEssentialsData from "./HouseholdCleaningEssentialsData"

export default function HouseholdCleaningEssentials() {
     return (
          <>
               <div className="w-full h-full hidden max-[1021px]:flex items-center justify-center flex-col pt-[22px]">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1800/layout-engine/2024-07/1718624389849-Household-cleaning-essentials-KVI-slice-top.png" alt="" className="w-full h-full" />

                    <div className="bg-[rgb(218,242,255)] grid grid-cols-4 gap-x-[12px]">
                         {
                              HouseholdCleaningEssentialsData.map((Product) => (
                                   <div key={Product.ID} className="w-full h-full bg-[rgb(218,242,255)] flex items-center justify-center flex-col">
                                        <img src={Product.Source} alt={Product.alt} className="w-full h-[78px] rounded-2xl object-cover" />
                                        <div className="text-xs font-semibold text-center px-3">{Product.Title}</div>
                                   </div>
                              ))
                         }
                    </div>
               </div>

          </>

     )
}