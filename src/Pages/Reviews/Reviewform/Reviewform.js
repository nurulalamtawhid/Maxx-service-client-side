import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Context/Authprovider';
import Usetitle from '../../../Hooks/Usetitle';

const Reviewform = () => {
    Usetitle('AddReview');
    const serviceDetails = useLoaderData();
    const navigate = useNavigate();
    const { _id, image_url, title } = serviceDetails;
    const { user } = useContext(Authcontext);
    const [review,setreview] = useState([]);
    const [control,setcontrol] = useState(false)
    const handleAddreview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const review = form.review.value;
        const email = user?.email || 'unregisterd';
        console.log(name, review, email);
        const reviewitem = {
            service: _id,
            serviceName: title,
            Customer: name,
            Review : review,
            photo : user?.photoURL,

            email

        };
        fetch('https://max-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewitem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setcontrol(!control)
                    alert('Review Added succcessfully')
                    form.reset()
                    navigate('/services')
                }

            })
            .catch(error => console.error(error));
            
    }
    useEffect(()=>{
        fetch(`https://max-server.vercel.app/serviceReview/${_id}`)
        .then(res=>res.json())
        .then(data=>setreview(data))
        

    },[control]);
    console.log(review);


return (
    <div>
        <section className="p-6 bg-gray-100 text-gray-900">
            <form action="" onSubmit={handleAddreview} className="container flex flex-col mx-auto space-y-12  ">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add Review</p>
                        <p className="font-medium"> for {title}</p>
                        <img src={image_url} alt="" className="w-40 h-40  bg-gray-500 bg-gray-300" />
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="username" className="text-sm">Username</label>
                            <input id="username" name='name' type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Email</label>
                            <input name='email' type="text" placeholder="your-email" defaultValue={user?.email} readOnly className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Feedback</label>
                            <textarea id="review" name="review" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm"></label>
                            <div className="flex items-center space-x-2">
                                <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full  bg-gray-500 bg-gray-300" />

                                <Button type='submit' variant='outline-success'>Add review</Button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    </div>
);
};

export default Reviewform;