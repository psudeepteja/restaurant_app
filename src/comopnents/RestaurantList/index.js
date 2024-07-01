import React from 'react';
import RestaurantItem from '../RestaurantItem';

const RestaurantList = ({ restaurants, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-8">
      {restaurants?.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default RestaurantList;


