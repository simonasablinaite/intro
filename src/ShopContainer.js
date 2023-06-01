import React from 'react'
import ShopItem from './ShopItem';

const ShopContainer = () => {
   return (
      <>
         <div className='shops-container'>
            <div class="main-title">
               <h1>Find us</h1>

               <div className='shops-list'>
                  <ShopItem />
                  <ShopItem />
                  <ShopItem />
                  <ShopItem />
               </div>
            </div>
         </div>
      </>
   )
}

export default ShopContainer;
