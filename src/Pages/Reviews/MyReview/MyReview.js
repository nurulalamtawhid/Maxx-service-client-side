import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../Context/Authprovider';
import MyReviewCar from './MyReviewCar';

const MyReview = () => {
    const {user} = useContext(Authcontext);
    console.log(user);
    const [reviews,setreviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[user?.email])
    return (
        <div>
            
          <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
        {
            reviews.map(review=><MyReviewCar
                key={review._id}
                review={review}
            
            
            ></MyReviewCar>)
        }
     
     
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default MyReview;