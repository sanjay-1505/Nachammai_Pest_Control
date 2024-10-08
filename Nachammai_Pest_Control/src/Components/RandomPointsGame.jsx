import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Replace with your mosquito image
const mosquitoImage = "/images/games.gif"; // Example URL, replace with actual image link

const RandomPointsGame = () => {
  const [mosquitoes, setMosquitoes] = useState([]);
  const [timer, setTimer] = useState(6); // Timer is 10 seconds
  const [killed, setKilled] = useState(false);

  useEffect(() => {
    // Generate random mosquitoes every second
    const intervalId = setInterval(() => {
      setMosquitoes((prevMosquitoes) => [
        ...prevMosquitoes,
        {
          id: Date.now(),
          x: Math.random() * 90 + "%", // Random position on the x-axis
          y: Math.random() * 90 + "%", // Random position on the y-axis
        },
      ]);
    }, 1000);

    // Countdown timer for 10 seconds
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          clearInterval(intervalId);
          setKilled(true);

          // Show "Killed" message for 5 seconds, then hide it and clear mosquitoes
          setTimeout(() => {
            setKilled(false);
            setMosquitoes([]); // Clear all mosquitoes after 5 seconds
          }, 3000);

          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdown);
    };
  }, []);

  // Function to handle mosquito click and remove it
  const handleMosquitoClick = (id) => {
    setMosquitoes((prevMosquitoes) => prevMosquitoes.filter((mosquito) => mosquito.id !== id));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none">
      {/* Display the timer */}
      

      {/* Generate random mosquitoes */}
      {mosquitoes.map((mosquito) => (
        <img
          key={mosquito.id}
          src={mosquitoImage}
          alt="Mosquito"
          onClick={() => handleMosquitoClick(mosquito.id)}
          style={{ top: mosquito.y, left: mosquito.x }}
          className="absolute w-[200px] h-[200px] cursor-pointer z-50 pointer-events-auto"
        />
      ))}

      {/* Show "Killed" popup after timer finishes */}
      {killed && (
        <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-3xl text-red-500"> 
            Killed 
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomPointsGame;
