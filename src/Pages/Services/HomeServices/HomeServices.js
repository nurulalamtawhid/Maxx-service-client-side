import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeServices = () => {
    const [services,setServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/Homeservices')
        .then(res =>res.json() )
        .then (data => setServices(data))
    })
    return (
        <div>
           <Container>
           <h1 className='text-center'> Services</h1>
            <div className='grid gap-2 lg:grid-cols-3 md:grid-cols-2 py-2'>
            {
                services.map(service =><ServiceCard
                

                    key={service._id}
                    service ={service}
                
                
                ></ServiceCard>)
            }
             
            </div>
                <div className='flex items-center justify-center py-3'>
                <Link to='/services' className=' text-gray-50 no-underline'>
                <button type="button" className="d-flex items-center justify-center p-3 font-semibold tracking-wide rounded-md bg-indigo-400">See All</button>
                </Link>
                </div>
           </Container>
        </div>
    );
};

export default HomeServices;