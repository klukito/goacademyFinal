import React from 'react';
import styles from './styles.module.css'

const RestaurantCard = ({ data }) => {
  const { city, name, picture, cuisines, priceRange, rating } = data;
  

  return(
    <div className={styles.card}>
        <div className={styles.restaurantCity}>
            {city}
        </div>
        <img src={picture} 
            alt={name} 
            className={styles.restaurantPicture} />
        <div className={styles.restaurantDescription}>
            <div className={styles.cardRow1}>
                <span className={styles.fontType1}>
                    {name}
                </span>
                <span className={styles.fontType1}>
                    {priceRange}
                </span>
            </div>
            <div className={styles.cardRow2}>
                <span className={styles.fontType1}>
                    {cuisines}
                </span>
                <span className={styles.restaurantRating}>
                    {rating}
                </span>
            </div>
        </div>
    </div>
  )

};



export default RestaurantCard;
