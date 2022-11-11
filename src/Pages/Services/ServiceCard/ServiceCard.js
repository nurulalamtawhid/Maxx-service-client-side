import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title,price,details,image_url} = service;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                <img src={image_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-800">
                            {details.length>100 ?
                               <p>{details.slice(0,100)+ '...'}<Link>Read more</Link></p>
                               :
                               <p>{details}</p>
                            }
                            
                            
                        </p>
                        <p>Price:${price}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-400 text-gray-50">view-details</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;