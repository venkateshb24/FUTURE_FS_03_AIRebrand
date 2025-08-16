import React from 'react';
import { Play, Heart } from 'lucide-react';


const PopularArtists = ({ artists, onArtistClick, onPlay, onLike, likedSongs = [] }) => (
  <section>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">Popular Artists</h2>
      <button className="text-gray-400 hover:text-white text-sm font-semibold">
        Show all
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {artists.map((artist) => (
        <div
          key={artist.id}
          className="group bg-gray-900 p-4 rounded-xl hover:bg-gray-800 transition-all cursor-pointer"
          onClick={() => onArtistClick && onArtistClick(artist)}
        >
          <div className="relative mb-4">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-32 md:h-48 object-cover rounded-full"
            />
            <button
              onClick={e => { e.stopPropagation(); onPlay && onPlay(artist.songs[0]); }}
              className="absolute bottom-2 right-2 bg-[var(--brand-primary)] text-white p-2 rounded-full hover:bg-[var(--brand-accent)] border border-[var(--brand-accent)] shadow-lg"
              title="Play"
            >
              <Play className="w-5 h-5" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); onLike && onLike(artist.songs[0]); }}
              className={
                likedSongs.some(s => s.id === (artist.songs[0] && artist.songs[0].id))
                  ? "absolute bottom-2 left-2 text-pink-500 bg-zinc-900 p-2 rounded-full border border-pink-500"
                  : "absolute bottom-2 left-2 text-gray-400 hover:text-pink-500 bg-zinc-900 p-2 rounded-full border border-gray-700"
              }
              title={likedSongs.some(s => s.id === (artist.songs[0] && artist.songs[0].id)) ? 'Liked' : 'Like'}
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <h3 className="font-bold text-sm md:text-lg mb-1 truncate">{artist.name}</h3>
          <p className="text-gray-400 text-xs md:text-sm">{artist.followers} followers</p>
        </div>
      ))}
    </div>
  </section>
);

export default PopularArtists;
