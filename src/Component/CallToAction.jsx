import React from "react";
import CallToActionData from "./CallToActionData";

export default function CallToAction() {
     return (
          <div className="max-w-[1280px] mx-auto hidden min-[1021px]:flex items-center justify-start gap-x-5 p-4">
               {
                    CallToActionData.map((Category) => (
                         <div key={Category.ID} className="w-[335.4px] h-[195px] cursor-pointer">
                              <img src={Category.Source} alt={Category.alt} loading="lazy" className="rounded-2xl object-fill" />
                         </div>
                    ))
               }
          </div>
     )
}