import React from 'react'
import MapContainer from './MapContainer';
import ShopContainer from './ShopContainer';
import './pageStyle.css';

const ContactUs = () => {
   return (
      <>
         <main className='container'>
            <ShopContainer />
            <MapContainer />
         </main>
      </>
   )
}

export default ContactUs;
