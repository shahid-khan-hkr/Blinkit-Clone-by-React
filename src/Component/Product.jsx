import React from "react";
import Products from "./Products"

export default function Product() {
     return (
          <div className="max-w-[1280px] grid grid-cols-2 min-[500px]:grid-cols-4 min-[1021px]:grid-cols-10 mx-auto">
               {
                    Products.map((Product) => (
                         <div key={Product.ID} className="w-[128px] h-[188.235px] cursor-pointer mx-auto">
                              <img src={Product.Source} alt={Product.alt} loading="lazy" className="object-fill"/>
                         </div>
                    ))
               }
          </div>
     )
}