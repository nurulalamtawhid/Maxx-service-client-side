import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className=" text-gray-800 mb-5">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Only for children?</summary>
				<div className="px-4 pb-4">
					<p>Basically its for the pre-school to college student.</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">Can anyone get lifetime membership?</summary>
				<div className="px-4 pb-4">
					<p>Since Its a srvice depends on service category, so there is no chance of lifetime membership</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">Both girls & boys allowed?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Yes and I have a seperate times for them.</p>
				</div>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;