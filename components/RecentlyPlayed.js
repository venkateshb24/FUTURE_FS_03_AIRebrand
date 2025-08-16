import React from 'react';
import { Play, Heart } from 'lucide-react';

const RecentlyPlayed = ({ recentlyPlayed, handlePlay }) => (
  <section className="mb-12">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">Recently Played</h2>
      <button className="text-gray-400 hover:text-white text-sm font-semibold">
        Show all
      </button>
    </div>
    <div className="bg-gray-900 rounded-xl p-6">
      {recentlyPlayed.length === 0 ? (
        <div className="text-gray-400 text-center py-8">No songs played recently.</div>
      ) : (
        <div className="space-y-2">
          {recentlyPlayed.map((song, index) => (
            <div
              key={song.id}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-center w-8 text-gray-400 group-hover:text-white">
                <span className="group-hover:hidden">{index + 1}</span>
                <button
                  onClick={() => handlePlay(song.songs ? song.songs[0] : song)}
                  className="hidden group-hover:block"
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
              <img
                src={song.image}
                alt={song.album}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{song.name}</h4>
                <p className="text-gray-400 text-sm truncate">{song.artist}</p>
              </div>
              <div className="text-gray-400 text-sm">{song.duration}</div>
              <button className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default RecentlyPlayed;
