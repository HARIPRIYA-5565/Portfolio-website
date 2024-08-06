import React from "react";

export default function PortfolioSection(){
const portfolioData=[{
		id: 0,
		projectName:"Marketing website",
detailOne: "Resonsiveness",
detailTwo:"Page navigation",
detailThree: "Dynamic Forms with cutom validation",
detailFour:"Functional button Features"	},
	{
		id: 1,
		projectName: "Partner programm Pages",
detailOne: "Resonsiveness",
detailTwo:"Higly functional code, Feature deveopment",
detailThree: "Dynamic Forms with cutom validation",
detailFour:"Functional button Features"	},
	
	{
		id: 2,
	projectName: "Admin Portal",
detailOne: "Resonsiveness",
detailTwo:"Higly functional code, Feature deveopment",
detailThree: "Dynamic Forms with cutom validation with crud operation",
detailFour:"Functional button Features"	},

	{
		id: 3,
			projectName: "CRM Portal",
detailOne: "Resonsiveness",
detailTwo:"Designing of the structure of the UI/ UI designing",
detailThree: "Dynamic Forms with cutom validation ",
detailFour:"Functional button Features, Tables with data, Features development"
	},

];
return(
// Container div
<div id="Portfolio-4 " className="bg-gray-100">       
{/* Main headding of the Section */}
<div className=" py-4 ">
					<div className="lg:text-[47px] gap-4   text-3xl mt-10 font-semibold text-gray-700 ">
						<p className="text-[#00A4E4] drop-shadow-md text-center">Projects</p>
					</div>
				</div>
<div className="mt-16  px-14 sm:px-32 pb-8 gap-16  grid grid-cols-1 sm:grid-cols-2">
{/* Mapping the data and applying css for their arrangements */}
            {portfolioData.map((index) => (
                <><div
                        key={index}
                        className="col-span-1  bg-[#FCFCFC] border-2  py-8 px-6 border-[#fc8a0d] shadow-gray-500 shadow-sm rounded-xl  text-md   " 
                    >
                    <h2 className=" text-[#00A4E4] font-semibold text-center">{index.projectName}</h2>  
<ul type="disc" className="   text-center">
<li className=" pt-2  text-gray-700 font-semibod">{index.detailOne}</li>
<li className=" pt-2  text-gray-700 font-semibod">{index.detailTwo}</li>
<li className=" pt-2  text-gray-700 font-semibod">{index.detailThree}</li>
<li className=" pt-2  text-gray-700 font-semibod">{index.detailFour}</li>
</ul>
                   
                    </div></>
            ))}
        </div>
</div>
)

}