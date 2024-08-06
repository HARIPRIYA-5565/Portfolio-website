import React from "react";

export default function FooterSection(){
const FooterData = [
{ name: "Home", href: "#", current: true },
{ name: "About", href: "#About-1", current: false },
{ name: "Services", href: "#Services-2", current: false },
{ name: "Experience", href: "#Experience-3", current: false },
{ name: "Portfolio", href: "#Portfolio-4", current: false },
{ name: "Contact", href: "#Contact-5", current: false },
]
return(

	<div className="bg-[#253B50] px-8 pt-10 sm:pb-10 flex justify-evenly">

<div>
			<div className="md:mt-4">
				<h1 className="lg:text-xl sm:text-lg text-xl text-yellow-400 font-semibold">
					Quick Links
				</h1>
				<div className="mt-2">
					{FooterData.map((index) => (
						<div key={index.id}>
							<a
								href={index.href}
								className="rounded-lg lg:text-[16px] text-[#FFFFFF] sm:text-[14px] text-[13px] hover:cursor-pointer hover:text-yellow-400"
							>
								{index.name}{" "}
							</a>
						</div>
					))}
					
				</div>
			</div>
		</div>
<div className="lg:mt-8 lg:mb-5 sm:mt-8 sm:mb-5  mt-8 ">
			<h1 className="lg:text-xl sm:text-lg text-xl text-yellow-400 font-semibold ">
				Contact
			</h1>
			<div className="flex gap-x-2">
				<img
					src="/Icons/CallIcon.png"
					className="sm:h-[12.46px] sm:w-[12.43px] h-[12px] w-[14px] "
					alt=""
				/>
				<p className="lg:text-[16px] sm:text-[14px] text-[#FFFFFF] text-xs">
					{" "}
					+91 8299765565{" "}
				</p>
			</div>
			<div className="flex gap-x-2 sm:mt-2">
				<img
					src="/Icons/MailIcon.png"
					className="sm:h-[12px] sm:w-[13.5px] h-[14px] w-[14px]  "
					alt=""
				/>
				<p className="lg:text-[16px] sm:text-[14px] text-[#FFFFFF]  text-xs">
					Email: ikavyanshi@gmail.com
				</p>
			</div>
<div className="flex justify-center mt-8  gap-2">
						<img
							src="/Icons/facebook.png"
							className="h-6 hover:scale-125  cursor-pointer"
						/>
						<img
							src="/Icons/twitter.png"
							className="h-6  hover:scale-125 cursor-pointer "
						/>
						<img
							src="/Icons/linkedin.png"
							className="h-6 hover:scale-125 cursor-pointer "
						/>
					</div>
		</div>

</div>)

}