import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import RestaurantCard from 'components/main-page/restaurant-card/restaurant-card'
import DropdownHeader from 'components/main-page/dropdown-header/dropdown-header'
import PageHeader from 'components/main-page/page-header/page-header'
import SearchBar from 'components/main-page/search-bar/search-bar'
import SearchButton from 'components/main-page/search-button/search-button'
import { getCityDetails, searchRestaurants } from 'components/api-call/utils/repository';
import CitySuggestions from 'components/api-call/components/city-suggestions';


function Main() {

  const [query, setQuery] = useState('');
  const [citySuggestions, setCitySuggestions] = useState([]);
  //citySuggestions itu state yang bakal simpen data dari apicall
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      const restaurants = await searchRestaurants(1);
      setRestaurants(restaurants);
    };
    
    searchRestaurantsFromCity();
  
  }, [])
      
    const search = () => {
      const searchRestaurantsFromCity = async () => {
          const restaurants = await searchRestaurants(query);
          setRestaurants(restaurants);
          setQuery('');
      };

      searchRestaurantsFromCity();
  }

  return (
    
    <div className={styles.main}>
      <DropdownHeader/>
      <PageHeader header="GoZomato" />

      <div>
          <SearchBar className="flex items-center"
            value={query}
            placeholder="City Name:"
            onChange={e => setQuery(e.target.value)} 
          />
          <SearchButton 
            text="Search" 
            onClick={search} 
          />
        </div>
        
      <div className={styles.mainRestaurants} >
        Restaurants suggested in {query} are:
        <div>
          {citySuggestions.map(e => (
            <CitySuggestions key={e.id} data={e} />
          ))}
        </div>
      </div>
      {citySuggestions.length > 0 ? (
        <div>
          Restaurants with city entity id 74 are:
          <div>
            {restaurants.map(e => 
            <RestaurantCard 
              key={e.id} 
              city={e.city} 
              image={e.featured_image} 
              name={e.name} 
              cuisines={e.cuisines} 
              cost={e.average_cost_for_two} 
              currency={e.currency} 
              rating={e.user_rating.aggregate_rating} 
              />)
                }
            }
          </div>
        </div>
      ) : (
        <div>No cities found</div>
      )}
    </div>
  );
};

export default Main;

