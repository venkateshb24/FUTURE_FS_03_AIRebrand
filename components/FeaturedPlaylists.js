import React from 'react';

const FeaturedPlaylists = ({ featuredPlaylists, onPlaylistClick }) => (
  <section className="mb-12">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">Featured Playlists</h2>
      <button className="text-gray-400 hover:text-white text-sm font-semibold">
        Show all
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredPlaylists.map((playlist) => (
        <div
          key={playlist.id}
          className="group bg-[var(--brand-card)] p-4 rounded-xl hover:bg-[var(--brand-accent)] transition-all cursor-pointer border border-[var(--brand-gray)]"
          onClick={() => onPlaylistClick && onPlaylistClick(playlist)}
        >
          <div className="relative mb-4">
            <img
              src={playlist.image}
              alt={playlist.name}
              className="w-full h-48 object-cover rounded-lg transition-opacity duration-300"
              loading="lazy"
            />
          </div>
          <h3 className="font-bold text-lg mb-2 truncate">{playlist.name}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{playlist.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedPlaylists;
