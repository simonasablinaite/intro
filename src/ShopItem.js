import React from 'react'


const ShopItem = ({ title, phone, email, address }) => {
   return (
      <div className="shop-card">
         <div className="shop-content">
            <h2>{title}</h2>
            <div className="references">
               <a href={{ phone }}><span className="contacts">Phone:</span>+3706666666</a>
               <a href={{ email }}><span className="contacts">Email:</span>shop1@parduotuve.lt</a>
               <a href={{ address }}><span className="contacts">Address:</span>Rotušės aikštė 1, Kaunas</a>
            </div>
         </div>
      </div>
   )
}

export default ShopItem
