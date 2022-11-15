import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Authcontext } from '../../../Context/Authprovider';
import MyReviewCar from './MyReviewCar';

const MyReview = () => {
    const { user } = useContext(Authcontext);
   // console.log(user);
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [user?.email])
    
    const handleDelete= id=>{
        const proceed = window.confirm('Are you sure to remove the review?')
        if(proceed){
            fetch(`http://localhost:5000/review/${id}`,{
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('Deleted Successfully');
                    const remainingreview = reviews.filter(review=>review._id!==id);
                    setreviews(remainingreview);
                }
            })
        }
    }
    return (


        <Container className='py-8'>
           {
            reviews?.Review?
            <>
             <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead className='bg-slate-200'>
                        <tr>
                            <th>
                                <label>
                                   
                                </label>
                            </th>
                            <th className='ml-6'>Reviewrs-Name & <small>E-mail</small></th>
                            <th>Service</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <MyReviewCar
                                key={review._id}
                                review={review}
                                handleDelete ={handleDelete}
                               
                            ></MyReviewCar>)
                        }


                    </tbody>



                </table>
            </div>
            </>
            :
            <h1 className='text-center text-2xl py-8'>No reviews Added</h1>

           }
        </Container>

    );
};

export default MyReview;