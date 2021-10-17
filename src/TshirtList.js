import React from 'react'
import {Tshirt} from './Tshirt';

export const TshirtList = () => {
    const database = [
        {
          name: "red tshirt", 
          price: 10.99, 
          id: 1
        },
        {
          name: "blue polo", 
          price: 13.99, 
          id: 1
        },
        {
          name: "yellow hoodie", 
          price: 18.99, 
          id: 1
        }
      ]
    return (
        <div>
            {
                database.map(item => (
                    <Tshirt 
                        name={item.name} 
                        price={item.price} 
                        key={item.id} 
                    />
                ) )
            }
        </div>
    )
}
