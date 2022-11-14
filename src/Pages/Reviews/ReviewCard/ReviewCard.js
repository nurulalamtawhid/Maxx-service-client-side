import React from 'react';

const ReviewCard = ({review}) => {
    const {Customer,Review,photo} =review;
    return (
        <div className='py-4'>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={photo} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{Customer}</h4>
				<span className="text-xs text-gray-600"></span>
			</div>
		</div>
		
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-600">
		<p>{Review}</p>
		
	</div>
</div>
            
        </div>
    );
};

export default ReviewCard;