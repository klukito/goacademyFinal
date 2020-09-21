import React, { useState, useEffect } from 'react';
import { getCityDetails, searchRestaurants } from './utils/repository';
import CitySuggestions from 'components/api-call/components/city-suggestions';
import RestaurantCard from 'components/main-page/restaurant-card/restaurant-card'

const Zomato = () => {
  const cityQuery = 'jakarta';
  const [citySuggestions, setCitySuggestions] = useState([]);
  //citySuggestions itu state yang bakal simpen data dari apicall
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      try {
        const cities = await getCityDetails(cityQuery);
        setCitySuggestions(cities);

        if (cities.length > 0) {
          const restaurants = await searchRestaurants(cities[0].id);
          setRestaurants(restaurants);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    searchRestaurantsFromCity();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      <div>
        {cityQuery}
        <div>
          {citySuggestions.map(e => (
            <CitySuggestions key={e.id} data={e} />
          ))}
        </div>
      </div>
      {citySuggestions.length > 0 ? (
        <div>
          Restaurants in this city are:
          <div>
            {restaurants.map(e => (
              <RestaurantCard key={e.id} data={e} />
            ))}
          </div>
        </div>
      ) : (
        <div>No cities found</div>
      )}
    </div>
  );
};

export default Zomato;