import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const MyReviewCar = ({ review, handleDelete ,
    handleUpdate }) => {
    const {_id, serviceName, Customer, Review, email, service } = review;
    const [reviewservice, setreviewservice] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setreviewservice(data));
    }, [service])
    
    return (

        <tr className='py-4'>
            <th>
                <label>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-full w-24 h-16">
                            {
                                reviewservice?.image_url &&
                                <img src={reviewservice.image_url} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />

            </td>
            <td>
                <span className="">
                    {Review.length > 50 ?
                        <>{Review.slice(0, 50) + '...'}</>
                        :
                        <>{Review}</>
                    }
                </span>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>

    );
};

export default MyReviewCar;