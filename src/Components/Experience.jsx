import React from "react";

//  this section represents experience
export default function ExperienceSection(){
const ExperienceData=[{
		id: 0,
		Profile: "Front-end developer",
        Company:"Salubrious Technologies Pvt.Ltd",
        RoleDesrciption:"Front-end developer responsible for building responsive front-end applications with highly functional code and features.",
	},
	{
		id: 1,
		Profile: "Software Engineer",
        Company:"Salubrious Technologies Pvt.Ltd",
        RoleDesrciption:"Software Engineer (Front-end) responsible for building responsive front-end applications, conducting sessions to the team along with the development of the small components ",
	},
	{
		id: 2,
		Profile: "Web Developer",
        Company:"Learnnovate Pvt.Ltd",
RoleDesrciption:"Developed a Front-end project of E-commerce website according to the wireframe provided,Collaborated with fellow team and seniors for the development of the fully responsive front-end project",
	},
];
return(

// Container div
<div id="Experience-3" className="">       
{/* Main headding of the Section */}
<div className="text-center py-4 ">
					<div className="lg:text-[47px] flex gap-4 justify-center  text-3xl mt-10 font-semibold text-gray-700 ">
						<p className="text-[#253B50] drop-shadow-md">Experience</p>
					</div>
					
				</div>
<div className="mt-16  px-14 sm:px-32 pb-8 gap-16  grid grid-cols-1 sm:grid-cols-3">
{/* Mapping the data and applying css for their arrangements */}
            {ExperienceData.map((index) => (
                <><div
                        key={index}
                        className="col-span-1  bg-[#FCFCFC] border-2  py-8 px-6 border-[#fc8a0d] shadow-gray-500 shadow-sm rounded-xl  text-md   " 
                    >
                    <h2 className=" text-[#00A4E4] font-semibold">{index.Profile}</h2>  
                    <p className=" pt-2  text-[#253B50] font-semibod">{index.Company}</p>
                    <p className=" pt-2 text-gray-700">{index.RoleDesrciption}</p>
                    </div></>
            ))}
        </div>
</div>
)



}