const ShopItem = ({ title, phone, email, address }) => {


   return (
      <div className="shop-card">
         <div className="shop-content">
            <h2>{title}</h2>
            <div className="references">
               <a style={{ phone }} href={{ phone }}><span className="contacts">Phone:</span>{phone}</a>
               <a href={{ email }}><span className="contacts">Email:</span>{email}</a>
               <a href={{ address }}><span className="contacts">Address:</span>{address}</a>
            </div>
         </div>
      </div>
   )
}


export default ShopItem
