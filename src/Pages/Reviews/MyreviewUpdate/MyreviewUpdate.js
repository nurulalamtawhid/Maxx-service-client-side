import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const MyreviewUpdate = () => {
    const reviews = useLoaderData();
    const { Review,photo,serviceName,Customer
    } = reviews;
    const [review, setreview] =useState (reviews);
   
    const handleUpdate = (event) =>{
        event.preventDefault();
        console.log('hiii');
        fetch(`https://max-server.vercel.app/review/${reviews._id}`,{
            method:'PUT',
            headers :{
                'content-type':'application/json'
            },
            body: JSON.stringify(review)

        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                alert("reviews updated")
                console.log(data);
               
            }
        })

    }
    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newreview = {...review};
        newreview[field] = value;
        setreview(newreview)
    }
    return (
        <Container className='py-4'>
            <div className="card w-96 bg-base-100 py-4 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="image of reviewer" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h1>{Customer}</h1>
                    <h2 className="card-title">{serviceName}</h2>
                    <form onSubmit={handleUpdate}>
                    <input onChange={handleInputBlur} type="text" defaultValue={Review} name="Review" className="input input-bordered w-full max-w-xs"></input>
                    <div className="card-actions">
                        <button type='submit' className="btn btn-primary">Update review</button>
                    </div>
                    </form>
                </div>
            </div>

        </Container>
    );
};

export default MyreviewUpdate;