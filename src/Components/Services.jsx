import React from "react";
//  this section represents skills and services
export default function ServicesSection(){
//array of objects for the mapping of the data
const skillsData=[{
		id: 0,
		skills: "Front End Development",
details:"Front-end responsive websites development with highly functional as well as well structured code ",
		image: "/Icons/Frontend-dev-image.jpg",
	},
	{
		id: 1,
		skills: "UI Development",
details:"UI development with clean codes and responsiveness ",
image: "/Icons/Ui-dev-img.jpg",
		
	},
	{
		id: 2,
		skills: "Features Development",
details:"Complex as well as highly functional feature development",
		image:"./Icons/feature-dev-image.jpg"
	},
	{
		id: 3,
		skills:"UI Designing",
details:"Designing of userfriendly and creative UI ",
image:"./Icons/Ui-designing.jpg"
	},

	{
		id: 4,
		skills:"Refactoring Codes",
details:"Restructuring code,Improving the code functionality, Altering the code as per requirements ",
image:"./Icons/Refactoring-image.jpg"
	},
	{
		id: 5,
		skills:"Debugging Codes",
details:"Debugging the roors 7, improving functionality and making the application more efficient and easy to  use",
image:"./Icons/debugging-image.jpg"
	},
];

return(
// Container div
<div id="Services-2" className="bg-gray-100">       
{/* Main headding of the Section */}
<div className=" py-4" >
					<div className="lg:text-[47px] flex gap-4 justify-center  text-3xl mt-10 font-semibold text-gray-700 ">
						<p className="text-[#00A4E4] drop-shadow-md">Services </p>
						<p className="text-[#253B50] drop-shadow-md">Offered</p>
					</div>
					
				</div>
<div className="mt-16  px-14 sm:px-32 pb-8 gap-16  grid grid-cols-1 sm:grid-cols-3">
{/* Mapping the data and applying css for their arrangements */}
            {skillsData.map((index) => (
                <><div
                        key={index}
                        className="col-span-1  bg-[#FCFCFC] border-2 text-center flex flex-col justify-center items-center border-[#fc8a0d] shadow-gray-500 shadow-sm rounded-xl  text-md sm:py-4 py-10 " 
                    >
                     {/* getting image from the object of array by mapping */}

                    <img src={index.image} className="sm:h-[200px] sm:w-[250px] h-[200px] w-[200px] pt-4" />
                    <h2 className="pt-8 font-semibold text-[#253B50] ">{index.skills}</h2>  
                    <p className="mx-4 pt-4 text-gray-700">{index.details}</p>
                    </div></>
            ))}
        </div>
</div>
)
}