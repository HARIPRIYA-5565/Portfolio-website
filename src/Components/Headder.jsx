import React from "react";

export default function HeadderSection(){

// array of objects for mapping
const navigation = [    
	{ name: "Home", href: "#", current: true },
	{ name: "About", href: "#About-1", current: false },
{ name: "Services", href: "#Services-2", current: false },
{ name: "Experience", href: "#Experience-3", current: false },
	{ name: "Portfolio", href: "#Portfolio-4", current: false },
	{ name: "Contact", href: "#Contact-5", current: false },
	
];

return(
<div className="flex py-4  bg-white justify-between px-8  shadow-md shadow-b-gray-500 z-50 fixed w-screen">
<span className="text-lg text-gray-700 font-semibold">Haripriya's Portfolio</span>
<ul className="text-md  sm:flex gap-6 justify-end text-gray-700  hidden">

{/* Mapping the data from the array of objects */}
{navigation.map((item) => (
<li className=" rounded-full px-7 py-2 font-semibold  text-white bg-[#00A4E4] hover:bg-[#037BCA]"> 

											<a
												key={item.name}
												href={item.href}
												className={
													"  rounded-md text-sm  font-medium  text-white over:text-blue-500"
												}
											>
												{item.name}
											</a>
									
</li>
	))}
</ul>

</div>

)


}