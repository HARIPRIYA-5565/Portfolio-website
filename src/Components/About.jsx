import React from "react";
//  this section represents general description data about
export default function AboutSection(){
return(
<div id="About-1" className="flex justify-between" >
<div className="sm:pl-28 sm:pt-48 sm:pb-36  sm:py-12 py-2 pt-20 px-10 ">
<div>
				<div className=" sm:mt-1 sm:text-5xl text-2xl sm:text-start  text-center font-semibold  md:leading-tight leading-normal ">
					<p className="text-[#00A4E4] drop-shadow-md">
						Hi..! I Am Haripriya
					</p>

					<p className="text-[#253B50] drop-shadow-md">Front-End Developer</p>
				</div>
				<p className="sm:mt-10 mt-5 text-[#312B2B]  sm:text-[16px] text-[18px] mb-5 leading-relaxed ">
					 Results-driven Software Engineer ( Front-end developer ) with experience in
                     designing, 
					<br className=" sm:block hidden"></br>
					developing and maintaining complex software solutions. Proficient
                     in Front-end development.
					<br className="sm:block hidden"></br>
					Adept at collaborating in agile environments to
                    deliver high-quality software products.
					
				</p>
</div>
				<div className="flex sm:justify-start justify-center gap-x-8  ">
					<button className="h-12 sm:h-14 rounded-md bg-[#00A4E4] px-9  md:mt-10 mt-5   sm:text-md text-[14px] font-semibold hover:bg-[#037BCA]  text-[#FFFFFF]">Hire Me</button>
<button className="h-12 sm:h-14 rounded-md bg-[#00A4E4]   px-9  md:mt-10 mt-5  sm:text-md text-[14px] font-semibold hover:bg-[#037BCA]  text-[#FFFFFF]" id="Contact-5">Lets Chat</button>
				</div>
<div className="flex mt-8  gap-2">
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
<div className="sm:pt-48 pt-20 sm:block hidden mr-12">
<img src="./Icons/img.jpg" className="w-[500px] h-[480px]"></img>
</div>

</ div>


)


}