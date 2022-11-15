import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Addservice = () => {
    const navigate = useNavigate()
    const handleAddservice =(event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const image_url = form.image_url.value;
        const details = form.details.value;
       // console.log('hii');
        //console.log(title,price,image_url,details);
        const serviceitem ={
            price : price,
            title : title,
            image_url : image_url,
            details : details

        };
        fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceitem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                   
                    alert('Review Added succcessfully')
                    form.reset()
                    navigate('/services')
                }

            })
            .catch(error => console.error(error));


    }
    return (
        <div>
         <section className="p-6 bg-gray-100 text-gray-900">
            <form action="" onSubmit={handleAddservice} className="container flex flex-col mx-auto space-y-12  ">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add Service</p>
                        <p className="font-medium"> Which you need most? </p>
                       
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="username" className="text-sm">Service-Name</label>
                            <input id="username" name='title' type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Price</label>
                            <input name='price' type="text" placeholder="$422" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Image</label>
                            <input name='image_url' type="text" placeholder="https/:sjdhsjd" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Description</label>
                            <textarea id="review" name="details" placeholder="Add details" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm"></label>
                            <div className="flex items-center space-x-2">
                                

                                <Button type='submit' variant='outline-success'>Add Service</Button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
            
        </div>
    );
};

export default Addservice;