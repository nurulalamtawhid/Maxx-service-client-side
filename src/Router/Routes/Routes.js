import { createBrowserRouter } from "react-router-dom";
import Error from "../../Layout/Error";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";

export const router = createBrowserRouter([
    {
        path :'/',
        element :<Main></Main>,
        errorElement : <Error></Error>,
        children :[
            {
                path : '/',
                element : <Home></Home>

            },
            {
                path : '/services',
                element :<Services></Services>
            },
            {
                path :'/services/:id',
                element :<ServiceDetails></ServiceDetails>,
                loader :({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
]);