/*

-Api stands for application programme interface , it acts like a communication between two differenet servers

-Api calling used to send request to the server and get response from it

-In request types get,post,put,delete,patch

-In react js we can implement api call in 3-ways

1.using ajax fetch()

2.using axios library

3.using jquery
---------------------------------------------------------------------------------------------------

-In this now we will discuss using fetch()

-it is an method where it takes 2 args, one is end point url,second one is [options]

-options are optional

-fetch gives promises object as return

-we need to use .then() or await until to convert into our required data (like json  data)

-In below we usen await for converting promises object to requied data

--------------------------------------------------------------------------------------------------------

Example explanation

-useEffct hook is used to call async function where api call happens

-useeffct hook takes 2-args, call-back/anomoyous func and depenecy array

-dependcy array says when useEffect will execute

-here we passed empty [] dependcy array so when compount reneders it will execute by once

-when useEffct executed then api call happens then all products data getted from api then it passed as props to card component 

-since so many objects are there so we usen map to pass

-for products we usen state variable

Note: by default api call is GET method












*/
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Api() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        let response = await fetch('https://fakestoreapi.com/products');
        let body = await response.json();
        setProducts(body); // Store products in state
    }

    return (
        <div className='container-fluid'>
            <h1 className='text-center my-4'>API calls using Fetch in React JS</h1>
            <div className='row'>
                {products.map((product) => (
                    <div className='col-lg-4 col-md-6 col-sm-6 col-xs-10' key={product.id}>
                        <Card
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Api;
