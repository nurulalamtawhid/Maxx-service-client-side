import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    const {_id,image_url,title,details,price} = serviceDetails;
    return (
        <div>
            <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                <PhotoProvider>
                <PhotoView src={image_url}>
                <img src={image_url} style={{ objectFit: 'cover' }} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-800">
                           
                            {
                                details
                            }
                            
                        </p>
                        <p>Price:${price}</p>
                    </div>
                 
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;