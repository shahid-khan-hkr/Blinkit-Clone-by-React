import React from "react";

const UsefulLinks1 = [
     { ID: 1, label: "Blog", href: "/" },
     { ID: 2, label: "Privacy", href: "/" },
     { ID: 3, label: "Terms", href: "/" },
     { ID: 4, label: "FAQs", href: "/" },
     { ID: 5, label: "Security", href: "/" },
     { ID: 6, label: "Contact", href: "/" }
]

const UsefulLinks2 = [
     { ID: 1, label: "Partner", href: "/" },
     { ID: 2, label: "Franchise", href: "/" },
     { ID: 3, label: "Seller", href: "/" },
     { ID: 4, label: "Warehouse", href: "/" },
     { ID: 5, label: "Deliver", href: "/" },
     { ID: 6, label: "Resources", href: "/" }
]

const UsefulLinks3 = [
     { ID: 1, label: "Recipes", href: "/" },
     { ID: 2, label: "Bistro", href: "/" },
     { ID: 3, label: "District", href: "/" },
]

const Categories1 = [
     { ID: 1, label: "Vegetables & Fruits", href: "/" },
     { ID: 2, label: "Cold Drinks & Juices", href: "/" },
     { ID: 3, label: "Bakery & Biscuits", href: "/" },
     { ID: 4, label: "Dry Fruits, Masala & Oil", href: "/" },
     { ID: 5, label: "Paan Corner", href: "/" },
     { ID: 6, label: "Pharma & Wellness", href: "/" },
     { ID: 7, label: "Personal Care", href: "/" },
     { ID: 8, label: "Kitchen & Dining", href: "/" },
     { ID: 9, label: "Stationery Needs", href: "/" },
     { ID: 10, label: "Print Store", href: "/" }
]

const Categories2 = [
     { ID: 1, label: "Dairy & Breakfast", href: "/" },
     { ID: 2, label: "Instant & Frozen Food", href: "/" },
     { ID: 3, label: "Sweet Tooth", href: "/" },
     { ID: 4, label: "Sauces & Spreads", href: "/" },
     { ID: 5, label: "Organic & Premium", href: "/" },
     { ID: 6, label: "Cleaning Essentials", href: "/" },
     { ID: 7, label: "Pet Care", href: "/" },
     { ID: 8, label: "Fashion & Accessories", href: "/" },
     { ID: 9, label: "Books", href: "/" },
     { ID: 10, label: "E-Gift Cards", href: "/" }
]

const Categories3 = [
     { ID: 1, label: "Munchies", href: "/" },
     { ID: 2, label: "Tea, Coffee & Milk Drinks", href: "/" },
     { ID: 3, label: "Atta, Rice & Dal", href: "/" },
     { ID: 4, label: "Chicken, Meat & Fish", href: "/" },
     { ID: 5, label: "Baby Care", href: "/" },
     { ID: 6, label: "Home Furnishing & Decor", href: "/" },
     { ID: 7, label: "Beauty & Cosmetics", href: "/" },
     { ID: 8, label: "Electronics & Electricals", href: "/" },
     { ID: 9, label: "Toys & Games", href: "/" },
     { ID: 10, label: "Rakhi Gifts", href: "/" }
]

export default function Footer() {
     return (
          <footer className="max-w-[1280px] mt-12 mx-auto grid min-[1021px]:grid-cols-3 px-4 min-[1021px]:px-0">
               <div className="col-span-1 mt-5 mb-10">
                    <h3 className="text-lg font-semibold text-black my-6">Useful Links</h3>

                    <div className="grid grid-cols-3 gap-x-25 min-[1021px]:gap-x-6">
                         <ul className="grid gap-y-3 text-sm text-[#666666]">
                              {
                                   UsefulLinks1.map((Links) => (
                                        <li key={Links.ID}>
                                             <a href={Links.href}>{Links.label}</a>
                                        </li>
                                   ))
                              }
                         </ul>

                         <ul className="grid gap-y-3 text-sm text-[#666666]">
                              {
                                   UsefulLinks2.map((Links) => (
                                        <li key={Links.ID}>
                                             <a href={Links.href}>{Links.label}</a>
                                        </li>
                                   ))
                              }
                         </ul>

                         <ul className="grid grid-rows-6 gap-y-3 text-sm text-[#666666]">
                              {
                                   UsefulLinks3.map((Links) => (
                                        <li key={Links.ID}>
                                             <a href={Links.href}>{Links.label}</a>
                                        </li>
                                   ))
                              }
                         </ul>
                    </div>
               </div>


               <div className="col-span-2 mt-5 mb-10">
                    <div className="flex items-center justify-between min-[1021px]:justify-start">
                         <h3 className="text-lg font-semibold text-black my-6">Categories</h3>
                         <a href="/" className="text-base text-[rgb(12,131,31)] flex items-center justify-center cursor-pointer pl-4">see all</a>
                    </div>

                    <div className="grid grid-cols-3 gap-x-6">
                         <ul className="grid gap-y-3 text-sm text-[#666666]">
                              {
                                   Categories1.map((Links) => (
                                        <li key={Links.ID}>
                                             <a href={Links.href}>{Links.label}</a>
                                        </li>
                                   ))
                              }
                         </ul>

                         <ul className="grid gap-y-3 text-sm text-[#666666]">
                              {
                                   Categories2.map((Links) => (
                                        <li key={Links.ID}>
                                             <a href={Links.href}>{Links.label}</a>
                                        </li>
                                   ))
                              }
                         </ul>

                         <ul className="grid gap-y-3 text-sm text-[#666666]">
                              {
                                   Categories3.map((Links) => (
                                        <li key={Links.ID}>
                                             <a href={Links.href}>{Links.label}</a>
                                        </li>
                                   ))
                              }
                         </ul>
                    </div>
               </div>
          </footer>
     )
}