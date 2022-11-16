import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Usetitle from '../../../Hooks/Usetitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    const [loading,setloading] = useState(true);
    Usetitle('Services');

    useEffect(()=>{
        fetch('https://max-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
        setloading(false)
       
    })
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-600"></div>
    }
    return (
        <Container >
            <div>
            <h1 className='text-2xl text-center'>Maxx services has : {services.length} service</h1>
            </div>
            <div className='grid gap-2 mb-16 lg:grid-cols-3 md:grid-cols-2 py-2 '>
            {
                services.map(service =><ServiceCard
                

                    key={service._id}
                    service ={service}
                
                
                ></ServiceCard>)
            }
             
            </div>
        </Container>
    );
};

export default Services;