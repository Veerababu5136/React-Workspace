import React, { useEffect } from 'react'

/*

useeffect is a hook usen for api data fetching

it takes 2 args, one callback func/anoymous func/arrow func as mandatory, 2nd one as optional with choices
1.no-args
2.


*/
function FakeApiComponent() 
{

    let fakeapi='https://fakestoreapi.com/'


    useEffect(
      () =>
      {
        getProducts();
      },
      []
    )
    async function getProducts()
    {
       let res=await fetch(fakeapi)

       let body=await res.json();

       document.write(body)
    }
  return (
    <div>
        <h1>Fake Shopping Data</h1>




    </div>
  )
}

export default FakeApiComponent