import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../component/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funtappedcities.com%2F2015%2F02%2F04%2F10-fun-facts-about-the-empire-state-building%2F&psig=AOvVaw12XdEJBtlTrTIYTOqLOsNO&ust=1587625633592000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID3nsO8--gCFQAAAAAdAAAAABAD",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
