import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// This section contains Contact form
export default function ContactForm() {
// vaues initialised for validation
	const initialValues = {
		fullname: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	};

//  states used for updating states
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

//  validation functions 
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
//  fucntion for onSubmit button
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
//  useEffect for performing effects on form so that it can give error when  values not filled in field
	useEffect(() => {
		// console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			// console.log(formValues);
		}
	}, [formErrors]);
// if else condition
	const validate = (values) => {
		const errors = {};
		const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if (!values.fullname) {
			errors.fullname = "Full Name is required!";
		}

		if (!values.email && !values.phone) {
			errors.email = "Email is required!";
			errors.phone = "Contact Number  is required !";
		}
		if (values.email !== "" && !regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (values.phone !== "" && values.phone.length !== 10) {
			errors.phone = "Contact should be of 10 digit! ";
		}
		
		if (!values.subject) {
			errors.subject = "Subject is required!";
		}
		if (!values.message) {
			errors.message = "Message is required!";
		}
		return errors;
	};
	return (
<div id="Contact-5  ">
<div className=" py-4 ">
					<div className="lg:text-[47px] gap-4  flex  justify-center text-3xl mt-10 font-semibold text-gray-700 ">
						<p className="text-[#00A4E4] drop-shadow-md">Contact </p>
						<p className="text-[#253B50] drop-shadow-md">Form</p>
					</div>
				</div>
		<form className="px-2 flex justify-center mb-12">
			<div className=" sm:mt-20  mt-16 sm:w-[699px]   sm:mr-10  sm:px-0 px-14  ">

{/* Mapping the error data  */}
				{Object.keys(formErrors).length === 0 && isSubmit}
				<div className=" bg-gray-200 rounded-lg  md:px-14 sm:px-16 px-8 py-4   shadow-lg shadow-gray-300">
					<div className="flex flex-col lg:col-span-5 col-span-1  lg:mt-5 sm:mt-5 mt-2  ">
						<div className="flex flex-col">
							<input
								className="  border  bg-white placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14 hover:border-black"
								type="text"
								name="fullname"
								id="Fullname"
								value={formValues.fullname}
								onChange={handleChange}
								placeholder="Full Name"
							/>
							<p className="text-xs text-red-600">{formErrors.fullname}</p>
						</div>
						<div className="flex flex-col">
							<input
								className=" border  bg-white placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14 sm:mt-8  mt-6 hover:border-black"
								type="text"
								name="email"
								id="Email"
								value={formValues.email}
								onChange={handleChange}
								placeholder="Email "
							/>
							<p className="text-xs text-red-600">{formErrors.email}</p>
						</div>
						<p className="text-xl text-center  ">or</p>
						<div className="flex flex-col">
							<input
								className=" border  bg-white placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14  mt-2 hover:border-black "
								type="text"
								name="phone"
								id="Phone"
								value={formValues.phone}
								onChange={handleChange}
								placeholder="Mobile"
							/>
							<p className="text-xs text-red-600">{formErrors.phone}</p>
						</div>
						<div className="flex flex-col">
							<input
								className=" border bg-white placeholder-gray-700  lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14 sm:mt-8 mt-6 hover:border-black"
								type="text"
								name="subject"
								id="Subject"
								value={formValues.subject}
								onChange={handleChange}
								placeholder="Query"
							/>
							<p className="text-xs text-red-600">{formErrors.subject}</p>
						</div>
						<div className="flex flex-col">
							<input
								className=" border bg-white  placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:mt-8 mt-6 hover:border-black sm:h-24 h-20 "
								type="message"
								name="message"
								id="Message"
								value={formValues.message}
								onChange={handleChange}
								placeholder=" Description"
							/>
							<p className="text-xs text-red-600">{formErrors.message}</p>
							<p className="text-xs text-gray-700 mt-1 sm:block hidden">
								Thankyou for contacting
							</p>
						</div>
						<div className="flex justify-end mt-6">
							<button
								onClick={handleSubmit}
								className="w-36 lg:h-10 sm:h-12 h-12 bg-[#00A4E4] text-white lg:text-sm  sm:text-sm text-lg  p-2   rounded-md hover:bg-[#037BCA] "
							>
								SUBMIT
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
</div>
	);
}
