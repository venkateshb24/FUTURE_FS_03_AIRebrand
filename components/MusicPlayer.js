import React from 'react';
import { Play, Pause, Heart, Volume2, Shuffle, SkipBack, SkipForward, Repeat } from 'lucide-react';

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const MusicPlayer = ({ isPlaying, handlePlay, currentSong, currentTime = 0, duration = 0, onSeek, volume = 1, onVolumeChange, onLike, likedSongs = [] }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-[var(--brand-card)] border-t border-[var(--brand-accent)] px-4 py-3">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Currently Playing */}
      <div className="flex items-center space-x-3 flex-1 min-w-0">
        {currentSong ? (
          <>
            <img
              src={currentSong.image || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop'}
              alt={currentSong.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <h4 className="font-medium text-sm truncate">
                {currentSong.name || 'No song selected'}
              </h4>
              <p className="text-gray-400 text-xs truncate">
                {currentSong.artist || 'Unknown artist'}
              </p>
            </div>
            <button
              className={
                likedSongs.some(s => s.id === currentSong.id)
                  ? "text-pink-500"
                  : "text-gray-400 hover:text-pink-500"
              }
              onClick={() => onLike && onLike(currentSong)}
              title={likedSongs.some(s => s.id === currentSong.id) ? 'Liked' : 'Like'}
            >
              <Heart className="w-4 h-4" />
            </button>
          </>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
            <div>
              <h4 className="font-medium text-sm text-gray-400">No song playing</h4>
              <p className="text-gray-500 text-xs">Select a song to start</p>
            </div>
          </div>
        )}
      </div>
      {/* Player Controls */}
      <div className="flex flex-col items-center space-y-2 mx-4">
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => handlePlay()}
            className="bg-[var(--brand-primary)] text-white p-2 rounded-full hover:bg-[var(--brand-accent)] transition-colors border border-[var(--brand-accent)]"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
        {/* Progress Bar */}
        <div className="hidden md:flex items-center space-x-2 text-xs text-gray-400 select-none">
          <span>{formatTime(currentTime)}</span>
          <div
            className="w-96 h-1 bg-gray-600 rounded-full cursor-pointer relative"
            onClick={onSeek}
          >
            <div
              className="h-full bg-white rounded-full"
              style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
            ></div>
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      {/* Volume */}
      <div className="hidden lg:flex items-center space-x-2 flex-1 justify-end">
        <Volume2 className="w-4 h-4 text-gray-400" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={e => onVolumeChange && onVolumeChange(Number(e.target.value))}
          className="w-24 accent-[var(--brand-primary)]"
        />
      </div>
    </div>
  </div>
);

export default MusicPlayer;
