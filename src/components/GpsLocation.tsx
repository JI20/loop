import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (pos) => {
          setPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        (error) => console.error(error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation not supported');
    }
  }, []);

  return position;
};

export default useGeolocation;
