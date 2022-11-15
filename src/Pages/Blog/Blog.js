import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
       <Container className='py-4'>
        <section className="bg-gray-100 py-4 text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Blog Questionaries</h2>
		<p className="mt-4 mb-8 text-gray-600">Lets see</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">Difference between SQL and NoSQL?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What is JWT, and how does it work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What is the difference between javascript and NodeJS?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
            <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">How does NodeJS handle multiple requests at the same time?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
		</div>
	</div>
</section>
       </Container>
    );
};

export default Blog;