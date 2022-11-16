import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../Asset/Banner/cricket.jpg';



const Banner = () => {
  
    return (
        <Container>
            <section className="p-6 text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
			
			<h1 className="text-5xl font-extrabold text-gray-900">Lets Flourish Your ChildHood</h1>
			<p className="my-8">
				<span className="font-medium text-gray-900">Maxx-services</span>Maxx provides you the best 
                choice of your outdoor enternaiment & some basics needs of life.
			</p>
			
		</div>
		<img src={img1}alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
	</div>
</section>
       
            
         
        </Container>
    );
};

export default Banner;