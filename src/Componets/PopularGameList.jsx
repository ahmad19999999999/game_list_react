
import React, { useState } from 'react';
import PaymentForm from './paymont_form';
import GlobalApi from '../Servies.js/GlobalApi';

function PopularGameList({ gameList }) {
  const [selectedGame, setSelectedGame] = useState(null);

  const getMovieDetails = (id) => {
    console.log('Getting details for game ID:', id);
    GlobalApi.getMovieDetails(id).then((resp) => {
      console.log('Details response:', resp);
      setSelectedGame(id);
    });
  };

  const handlePaymentSuccess = (gameId) => {
    console.log('Payment successful for game ID:', gameId);
    setSelectedGame(null);
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold text-[30px] dark:text-white">Popular Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {gameList.map((item) => (
          <div
            className={`pb-14 bg-slate-300 dark:bg-gray-700 p-4 rounded-lg h-full 
               hover:scale-110 transition-all duration-300 cursor-pointer ${
                 selectedGame === item.id ? 'border-2 border-blue-500' : ''
               }`}
            onClick={() => {
              console.log('Clicked game ID:', item.id);
              getMovieDetails(item.id);
            }}
            key={item.id}
          >
            <img
              src={item.background_image}
              width={1080}
              className="w-full h-[80%] rounded-xl object-cover"
              alt={item.name}
            />
            <div>
              <h2 className="text-[20px] dark:text-white font-bold">
                {item.name}{' '}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                  {item.metacritic}
                </span>
              </h2>
              <h2 className="text-gray-500 ">
                ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {selectedGame && (
        <PaymentForm gameId={selectedGame} onPaymentSuccess={handlePaymentSuccess} />
      )}
    </div>
  );
}

export default PopularGameList;
