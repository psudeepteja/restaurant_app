import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantList from '../../comopnents/RestaurantList';
import RestaurantForm from '../../comopnents/RestaurantForm';

const base_URL= "http://localhost:5000"

export default function HomePage() {
  const [restaurants, setRestaurants] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`${base_URL}/restaurants`);
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleAddRestaurant = async (restaurant) => {
    try {
      const response = await axios.post(`${base_URL}/restaurants`, restaurant);
      setRestaurants([...restaurants, response.data]);
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  const handleEditRestaurant = async (restaurant) => {
    try {
      const response = await axios.put(`${base_URL}/restaurants/${restaurant.id}`, restaurant);
      setRestaurants(
        restaurants.map((r) => (r.id === restaurant.id ? response.data : r))
      );
      setCurrentRestaurant(null);
    } catch (error) {
      console.error('Error editing restaurant:', error);
    }
  };

  const handleDeleteRestaurant = async (id) => {
    try {
      await axios.delete(`${base_URL}/restaurants/${id}`);
      setRestaurants(restaurants.filter((r) => r.id !== id));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">FoodieDelight</h1>
      <RestaurantForm
        initialValues={currentRestaurant}
        onSubmit={currentRestaurant ? handleEditRestaurant : handleAddRestaurant}
      />
      <RestaurantList
        restaurants={restaurants}
        onEdit={setCurrentRestaurant}
        onDelete={handleDeleteRestaurant}
      />
    </div>
  );
}
