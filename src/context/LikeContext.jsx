import React, { createContext, useContext, useState } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedCities, setLikedCities] = useState([]);
  const [likedRestaurants, setLikedRestaurants] = useState([]);

  const toggleCityLike = (cityId) => {
    setLikedCities(prev =>
      prev.includes(cityId) ? prev.filter(id => id !== cityId) : [...prev, cityId]
    );
  };

  const toggleRestaurantLike = (restaurantId) => {
    setLikedRestaurants(prev =>
      prev.includes(restaurantId) ? prev.filter(id => id !== restaurantId) : [...prev, restaurantId]
    );
  };

  return (
    <LikeContext.Provider value={{
      likedCities,
      likedRestaurants,
      toggleCityLike,
      toggleRestaurantLike
    }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);
