

import React, { useState } from 'react';
import { Plus, Heart, Download, Library, Play } from 'lucide-react';

const YourLibrary = ({
  likedSongs = [],
  recentlyPlayed = [],
  playlists = [],
  onLike,
  onAddToPlaylist,
  onPlay
}) => {
  const [section, setSection] = useState('recent');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Your Library</h1>
        <button className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span className="hidden md:inline">Create Playlist</span>
        </button>
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <button
          className={`bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] p-4 rounded-xl text-left hover:scale-105 transition-transform border border-[var(--brand-accent)] ${section === 'liked' ? 'ring-2 ring-[var(--brand-accent)]' : ''}`}
          onClick={() => setSection('liked')}
        >
          <Heart className="w-6 h-6 mb-2" />
          <span className="font-semibold">Liked Songs</span>
        </button>
        <button
          className={`bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-primary)] p-4 rounded-xl text-left hover:scale-105 transition-transform border border-[var(--brand-accent)] ${section === 'recent' ? 'ring-2 ring-[var(--brand-accent)]' : ''}`}
          onClick={() => setSection('recent')}
        >
          <Library className="w-6 h-6 mb-2" />
          <span className="font-semibold">Recently Played</span>
        </button>
        <button className="bg-gradient-to-br from-yellow-600 to-orange-600 p-4 rounded-xl text-left hover:scale-105 transition-transform">
          <Plus className="w-6 h-6 mb-2" />
          <span className="font-semibold">Create Playlist</span>
        </button>
      </div>

      {/* Section Content */}
      {section === 'liked' && (
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Liked Songs</h2>
          {likedSongs.length === 0 ? (
            <div className="text-gray-400 text-center py-4">No liked songs yet.</div>
          ) : (
            <div className="space-y-2">
              {likedSongs.map((song) => (
                <div key={song.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors group">
                  <img src={song.image} alt={song.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{song.name}</h4>
                    <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                  </div>
                  <button onClick={() => onPlay && onPlay(song)} className="bg-[var(--brand-primary)] text-white p-2 rounded-full hover:bg-[var(--brand-accent)] transition-colors border border-[var(--brand-accent)]">
                    <Play className="w-4 h-4" />
                  </button>
                  <button onClick={() => onLike && onLike(song)} className="text-gray-400 hover:text-pink-500">
                    <Heart className={likedSongs.some(s => s.id === song.id) ? "w-5 h-5 fill-pink-500" : "w-5 h-5"} />
                  </button>
                  <button onClick={() => onAddToPlaylist && onAddToPlaylist(song)} className="text-gray-400 hover:text-yellow-400">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {section === 'recent' && (
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Recently Played</h2>
          {recentlyPlayed.length === 0 ? (
            <div className="text-gray-400 text-center py-4">No songs played recently.</div>
          ) : (
            <div className="space-y-2">
              {recentlyPlayed.map((song, idx) => (
                <div key={song.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors group">
                  <img src={song.image} alt={song.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{song.name}</h4>
                    <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                  </div>
                  <button onClick={() => onPlay && onPlay(song.songs ? song.songs[0] : song)} className="bg-green-500 text-black p-2 rounded-full hover:bg-green-400 transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                  <button onClick={() => onLike && onLike(song)} className="text-gray-400 hover:text-pink-500">
                    <Heart className={likedSongs.some(s => s.id === song.id) ? "w-5 h-5 fill-pink-500" : "w-5 h-5"} />
                  </button>
                  <button onClick={() => onAddToPlaylist && onAddToPlaylist(song)} className="text-gray-400 hover:text-yellow-400">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Your Playlists */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-6">Made by You</h2>
        <div className="space-y-3">
          {playlists.length === 0 ? (
            <div className="text-gray-400 text-center py-4">No playlists yet.</div>
          ) : (
            playlists.map((playlist, index) => (
              <div
                key={playlist.id || index}
                className="flex flex-col space-y-2 bg-gray-800 p-4 rounded-lg"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <Library className="w-6 h-6 text-gray-400" />
                  <h3 className="font-medium">{playlist.name}</h3>
                  <span className="text-gray-400 text-sm">Playlist • {playlist.songs.length} songs</span>
                </div>
                <div className="space-y-1">
                  {playlist.songs.map((song) => (
                    <div key={song.id} className="flex items-center space-x-2">
                      <img src={song.image} alt={song.name} className="w-8 h-8 rounded object-cover" />
                      <span className="truncate flex-1">{song.name}</span>
                      <button onClick={() => onPlay && onPlay(song)} className="text-green-500 hover:text-green-400">
                        <Play className="w-4 h-4" />
                      </button>
                      <button onClick={() => onLike && onLike(song)} className="text-gray-400 hover:text-pink-500">
                        <Heart className={likedSongs.some(s => s.id === song.id) ? "w-4 h-4 fill-pink-500" : "w-4 h-4"} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default YourLibrary;
