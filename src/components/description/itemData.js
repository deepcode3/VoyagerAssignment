import React from 'react'
import vegicon from '../../assets/icons/vegicon.png'
import nonvegicon from '../../assets/icons/nonveg.png' 

export const itemData=[
    {
        id:1,
        itemm:"Chicken Ghee Roast",
        price: 270,
        amount:1,
        icon:<img src={nonvegicon} alt=""></img>
    },
    {   id:2,
        itemm:"Paneer Chille",
        price:100,
        amount:1,
        icon:<img src={vegicon} alt=""></img>
    },
    {   id:3,
        itemm:"Salad",
        price:50,
        amount:2,
        icon:<img src={vegicon} alt=""></img>
        
    },{
        id:4,
        itemm:"Ice Cream",
        price:"50",
        amount:1, icon:<img src={vegicon} alt=""></img>
    }
    
        
    
]