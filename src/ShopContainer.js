import ShopItem from './ShopItem';

const ShopContainer = ({ phone, mainTitle }) => {
   if (ShopItem.phone === '') {
      return;
   } else {
      return (
         <>
            <div className='shops-container'>
               <div className="main-title">
                  <h1>{mainTitle}</h1>

                  <div className='shops-list'>
                     <ShopItem title='Parduotuve 1' phone='+37065761542' email='shop1@parduotuve.lt' address='Rotušės aikštė 1, Kaunas' />
                     <ShopItem title='Parduotuve 2' phone='+37065461542' email='shop2@parduotuve.lt' address='Rotušės aikštė 2, Kaunas' />
                     <ShopItem title='Parduotuve 3' email='shop3@parduotuve.lt' address='Rotušės aikštė 3, Kaunas' />
                     <ShopItem title='Parduotuve 4' phone='+37065776542' email='shop4@parduotuve.lt' address='Rotušės aikštė 4, Kaunas' />
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default ShopContainer;
