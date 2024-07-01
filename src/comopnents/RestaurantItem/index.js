import React from 'react';

const RestaurantItem = ({ restaurant, onDelete, onEdit }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold">{restaurant?.name}</h3>
      <p>{restaurant?.description}</p>
      <p>{restaurant.location}</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => onEdit(restaurant)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(restaurant?.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RestaurantItem;