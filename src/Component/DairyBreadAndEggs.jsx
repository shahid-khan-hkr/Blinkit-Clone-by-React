import React from "react";
import Products from "./DairyBreadAndEggsData";
import ProductCard from "./ProductCard";

export default function DairyBreadAndEggs() {
     return (
          <div className="max-w-[1280px] mx-auto">
               <div className="bg-white flex items-center justify-between px-3">
                    <h2 className="text-2xl font-semibold text-[rgb(28,28,28)] flex items-center justify-center py-4">Dairy, Bread & Eggs</h2>
                    <a href="/" className="text-xl text-[rgb(12,131,31)] flex items-center justify-center cursor-pointer">see all</a>
               </div>

               <div className="flex items-center flex-wrap pb-5 gap-x-[20px]">
                    {
                         Products.map((Product) => (
                              <ProductCard key={Product.ID} src={Product.src} title={Product.title} weight={Product.weight} MRP={Product.MRP} SP={Product.SP} Discount={Product.Discount} />
                         ))
                    }
               </div>
          </div >
     );
}