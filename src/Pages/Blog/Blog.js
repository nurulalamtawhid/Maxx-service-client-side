import React from 'react';
import { Container } from 'react-bootstrap';
import Usetitle from '../../Hooks/Usetitle';

const Blog = () => {
	Usetitle('Blogs')
    return (
       <Container className='py-4'>
        <section className=" py-4 text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Blog Questionaries</h2>
		<p className="mt-4 mb-8 text-gray-600">Lets see</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">Difference between SQL and NoSQL?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Sql is a relational database-management system which is not suitable for hierarchical data storage whereas Nosql is a distributed database-management system . </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What is JWT, and how does it work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Jwt means json web token,used to share security information between two parties — a client and a server .Jwt token use a set of Claim, Claims are used to transmit information between two parties.In a jwt token theres aheader, payload& signature </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What is the difference between javascript and NodeJS?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Java script is a server scripting programming languagge which used for Websites,Where as Nodejs is a javascript runtime environment that allows the javascript to be run on the server-side . </p>
			</details>
            <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">How does NodeJS handle multiple requests at the same time?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">NodeJS handle multiple requests at the same time through eventloop </p>
			</details>
		</div>
	</div>
</section>
       </Container>
    );
};

export default Blog;