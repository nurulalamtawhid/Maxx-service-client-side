import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import Usetitle from '../../../Hooks/Usetitle';
import ReviewCard from '../../Reviews/ReviewCard/ReviewCard';

const ServiceDetails = () => {
    Usetitle('ServiceDetails');
    const serviceDetails = useLoaderData();
   // console.log(serviceDetails);
    const {_id,image_url,title,details,price} = serviceDetails;
    const [reviews,setreviews] = useState([]);
    //const [control,setcontrol] = useState(true)
    useEffect(()=>{
        fetch(`https://max-server.vercel.app/serviceReview/${_id}`)
        .then(res=>res.json())
        .then(data=>setreviews(data))
        

    },[]);
    return (
       <Container>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
         
            <div>
            <div className="max-w-xs rounded-md shadow-md py-3 bg-gray-50 text-gray-800">
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
                    <Link to={`/reviewcheckout/${_id}`}>
           <Button variant='outline-info'>Add review</Button>
           </Link>
                </div>
                
            </div>
            </div>
           <div className='mb-16'>
            {
                reviews.map(review=><ReviewCard
                       key={review._id}
                       review ={review} 
                    
                ></ReviewCard>)
            }
          
           </div>
        </div>
        
       </Container>
    );
};

export default ServiceDetails;