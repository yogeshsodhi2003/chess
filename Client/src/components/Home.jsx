import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-6xl w-full items-center">
        {/* Game Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-3 text-white">
            Start a New Game
          </h1>
          <p className="text-xl text-slate-300 mb-10">
            Choose your game mode
          </p>
          
          <div className="flex flex-col gap-5">
            {/* Play Now Button */}
            <Link 
              to="/game" 
              className="flex items-center p-5 bg-white/10 rounded-xl text-white no-underline transition-all duration-300 border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-2xl group"
            >
              <div className="mr-5 w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Play Now</h3>
                <p className="text-sm text-slate-300 m-0">
                  Quick match against computer
                </p>
              </div>
              <div className="text-xl text-slate-300 ml-4 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </Link>
            
            {/* Play with Friend Button */}
            <Link 
              to="/game/friend" 
              className="flex items-center p-5 bg-white/10 rounded-xl text-white no-underline transition-all duration-300 border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-2xl group"
            >
              <div className="mr-5 w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center text-2xl">
                👥
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Play with Friend</h3>
                <p className="text-sm text-slate-300 m-0">
                  Invite or join friends in games
                </p>
              </div>
              <div className="text-xl text-slate-300 ml-4 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </Link>
          </div>
        </div>
        
        {/* Illustration Section */}
        <div className="flex justify-center items-center">
          <div className="w-72 h-72 relative">
            <div className="flex flex-col items-center gap-5 h-full justify-center">
              {/* Player 1 */}
              <div className="w-15 h-15 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white"></div>
              </div>
              
              {/* Mini Chessboard */}
              <div className="w-30 h-30 rounded-lg shadow-2xl bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-800 opacity-60"></div>
                <div className="absolute inset-0 bg-chess-pattern opacity-40"></div>
              </div>
              
              {/* Player 2 */}
              <div className="w-15 h-15 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Home;
