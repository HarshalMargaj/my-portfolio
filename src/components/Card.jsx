import React from "react";

const Card = () => {
	return (
		<div className="text-white w-[350px] bg-white/5 flex flex-col gap-4 pb-4 rounded-xl">
			<div>
				<img
					src="https://www.figma.com/community/resource/cd5d69fb-1006-48cf-8f6c-d5855e851d46/thumbnail"
					alt=""
					className="rounded-t-xl"
				/>
			</div>
			<div className="text-xl px-4">Full Stack Ecommerce Platform</div>
			<div className="px-4">
				Developed a fully functional eCommerce website using ReactJS,
				Tailwind CSS, Redux, Strapi, and Stripe. Implemented key
				features including search functionality, shopping cart,
				wishlist, user au- thentication, and secure payment processing
				with Stripe. Utilized Redux for efficient state management to
				enhance performance and data handling.
			</div>
			<div className="flex gap-4 flex-wrap px-4">
				{["React.JS", "Strapi", "Stripe", "Redux", "Tailwind.CSS"].map(
					(skill, index) => (
						<div
							key={index}
							className="border-1 border-purple-400 text-purple-400 rounded-md p-1 text-sm"
						>
							{skill}
						</div>
					)
				)}
			</div>
			<div className="px-4">
				<button className="bg-purple-400 hover:bg-purple-500 text-white p-2 rounded-md w-full cursor-pointer">
					Preview
				</button>
			</div>
		</div>
	);
};

export default Card;
