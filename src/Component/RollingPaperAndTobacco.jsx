import React from "react";
import Products from "./RollingPaperAndTobaccoData";
import ProductCard from "./ProductCard";

export default function RollingPaperAndTobacco() {
     return (
          <div className="max-w-[1280px] mx-auto">
               <div className="w-full bg-white flex items-center justify-between px-3">
                    <h2 className="text-2xl font-semibold text-[rgb(28,28,28)] flex items-center justify-center py-4">Rolling paper & tobacco</h2>
                    <a href="/" className="text-xl text-[rgb(12,131,31)] flex items-center justify-center cursor-pointer">see all</a>
               </div>

               <div className="flex flex-wrap items-center gap-x-[20px] gap-y-[20px] pb-5">
                    {
                         Products.map((Product) => (
                              <ProductCard key={Product.ID} src={Product.src} title={Product.title} unit={Product.unit} MRP={Product.MRP} SP={Product.SP} Discount={Product.Discount} />
                         ))
                    }
               </div>
          </div>
     );
}