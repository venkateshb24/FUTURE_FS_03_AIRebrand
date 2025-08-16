
"use client";
import React, { useState, useRef, useEffect } from "react";

import Header from "../components/Header";
import MusicPlayer from "../components/MusicPlayer";
import FeaturedPlaylists from "../components/FeaturedPlaylists";
import RecentlyPlayed from "../components/RecentlyPlayed";
import PopularArtists from "../components/PopularArtists";
import GenresGrid from "../components/GenresGrid";
import YourLibrary from "../components/YourLibrary";

export default function Home() {
  const [search, setSearch] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [downloadedSongs, setDownloadedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: "My Playlist #1",
      songs: [],
    },
  ]);

  // Download/un-download a song
  const handleDownload = (song) => {
    setDownloadedSongs((prev) => {
      if (prev.some((s) => s.id === song.id)) {
        return prev.filter((s) => s.id !== song.id);
      } else {
        return [song, ...prev];
      }
    });
  };

  const featuredPlaylists = [
    {
      id: 1,
      name: "Top Tamil Hits",
      description: "The latest and greatest Tamil chartbusters!",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
  color: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
      songs: [
        { id: 1, name: "Powerhouse", audio: "/Powerhouse.mp3", image: "/anirudh-ravichander.jpg" },
        { id: 2, name: "Why This Kolaveri Di", audio: "/Why This Kolaveri Di (The Soup of Love) - 3 320 Kbps - Copy.mp3", image: "/anirudh-ravichander.jpg" },
      ]
    },
    {
      id: 2,
      name: "Evergreen",
      description: "Timeless Tamil classics for every mood.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
  color: "from-[var(--brand-gray)] to-[var(--brand-accent)]",
      songs: [
        { id: 1, name: "Ennodu Nee Irundhal", audio: "/Ennodu-Nee-Irundhal.mp3", image: "/sid-sriram.jpeg" },
        { id: 2, name: "Thalli Pogathey", audio: "/Thalli-Pogathey.mp3", image: "/sid-sriram.jpeg" },
      ]
    },
    {
      id: 3,
      name: "Album Songs",
      description: "Best picks from top Tamil albums.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
  color: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
      songs: [
        { id: 1, name: "Meesaya Murukku", audio: "/demo.mp3", image: "/hiphop.jpeg" },
        { id: 2, name: "Why This Kolaveri Di", audio: "/demo.mp3", image: "/anirudh-ravichander.jpg" },
      ]
    },
    {
      id: 4,
      name: "Love Songs",
      description: "Romantic Tamil tracks to set the mood.",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop",
  color: "from-[var(--brand-gray)] to-[var(--brand-card)]",
      songs: [
        { id: 1, name: "Thalli Pogathey", audio: "/demo.mp3", image: "/sid-sriram.jpeg" },
        { id: 2, name: "Don'u Don'u Don'u", audio: "/demo.mp3", image: "/danush.avif" },
      ]
    },
  ];


  const artists = [
    {
      id: 1,
      name: "Anirudh Ravichander",
      image: "/anirudh-ravichander.jpg",
      followers: "5.2M",
      songs: [
        { id: 1, name: "Powerhouse", audio: "/Powerhouse.mp3", image: "/anirudh-ravichander.jpg" },
        { id: 2, name: "Why This Kolaveri Di", audio: "/Why This Kolaveri Di (The Soup of Love) - 3 320 Kbps - Copy.mp3", image: "/anirudh-ravichander.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sid Sriram",
      image: "/sid-sriram.jpeg",
      followers: "4.8M",
      songs: [
        { id: 1, name: "Ennodu Nee Irundhal", audio: "/Ennodu-Nee-Irundhal.mp3", image: "/sid-sriram.jpeg" },
        { id: 2, name: "Thalli Pogathey", audio: "/Thalli-Pogathey.mp3", image: "/sid-sriram.jpeg" },
      ],
    },
    {
      id: 3,
      name: "Hip Hop Tamizha",
      image: "/hiphop.jpeg",
      followers: "3.9M",
      songs: [
        { id: 1, name: "Vaadi Pulla Vaadi", audio: "/Vaadi-Pulla-Vaadi.mp3", image: "/hiphop.jpeg" },
        { id: 2, name: "Meesaya Murukku", audio: "/Meesaya Murukku - SenSongsMp3.Co.mp3", image: "/hiphop.jpeg" },
      ],
    },
    {
      id: 4,
      name: "Dhanush",
      image: "/danush.avif",
      followers: "2.7M",
      songs: [
        { id: 1, name: "Oh Oh Uyire Uyirin", audio: "/Oh-Oh-Uyire-Uyirin.mp3", image: "/danush.avif" },
        { id: 2, name: "Megham Karukatha", audio: "/Megham-Karukatha-MassTamilan.dev.mp3", image: "/danush.avif" },
      ],
    },
  ];

  const genres = [
  { name: "Pop", color: "bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-primary)]" },
  { name: "Hip-Hop", color: "bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-primary)]" },
  { name: "Rock", color: "bg-gradient-to-br from-[var(--brand-gray)] to-[var(--brand-card)]" },
  { name: "Electronic", color: "bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)]" },
  { name: "Jazz", color: "bg-gradient-to-br from-[var(--brand-card)] to-[var(--brand-accent)]" },
  { name: "Classical", color: "bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-gray)]" },
  ];

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const handlePlay = (song = null) => {
    if (song) {
      setCurrentSong(song);
      setIsPlaying(true);
      setRecentlyPlayed((prev) => {
        const songArtist = song.artist || song.name;
        const exists = prev.find(
          (item) =>
            (item.name === song.name || (item.songs && item.songs[0] && item.songs[0].name === song.name)) &&
            (item.artist === song.artist || !item.artist)
        );
        if (exists) {
          return [exists, ...prev.filter((item) => item !== exists)];
        } else {
          return [
            {
              id: Date.now(),
              name: song.name,
              artist: song.artist || "",
              album: song.album || "",
              image: song.image,
              duration: song.duration || "3:00",
              songs: [song],
            },
            ...prev,
          ];
        }
      });
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.play();
        }
      }, 0);
    } else {
      // Toggle play/pause
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  // Like/unlike a song
  const handleLike = (song) => {
    setLikedSongs((prev) => {
      if (prev.some((s) => s.id === song.id)) {
        return prev.filter((s) => s.id !== song.id);
      } else {
        return [song, ...prev];
      }
    });
  };

  // Add song to first playlist (for demo)
  const handleAddToPlaylist = (song) => {
    setPlaylists((prev) => {
      const updated = [...prev];
      updated[0] = {
        ...updated[0],
        songs: updated[0].songs.some((s) => s.id === song.id)
          ? updated[0].songs
          : [song, ...updated[0].songs],
      };
      return updated;
    });
  };

  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  // Update currentTime and duration as audio plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const timeUpdate = () => setCurrentTime(audio.currentTime);
    const loadedMetadata = () => setDuration(audio.duration || 0);
    audio.addEventListener('timeupdate', timeUpdate);
    audio.addEventListener('loadedmetadata', loadedMetadata);
    return () => {
      audio.removeEventListener('timeupdate', timeUpdate);
      audio.removeEventListener('loadedmetadata', loadedMetadata);
    };
  }, [currentSong]);

  // Seek handler
  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const percent = e.nativeEvent.offsetX / e.target.offsetWidth;
    audio.currentTime = percent * duration;
    setCurrentTime(audio.currentTime);
  };

  return (
  <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        search={search}
        setSearch={setSearch}
      />
      <main className="flex-1 overflow-y-auto pb-24">
        {activeTab === "home" && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[var(--brand-secondary)] via-[var(--brand-gray)] to-[var(--brand-primary)] rounded-xl p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Music for everyone.</h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">Millions of songs. No credit card needed.</p>
                  <button className="bg-[var(--brand-primary)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--brand-secondary)] transition-colors">Get SoundWave Free</button>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                  <div className="w-full h-full bg-gradient-to-l from-white/30 to-transparent rounded-full transform scale-150 translate-x-1/4 -translate-y-1/4"></div>
                </div>
              </div>
            </section>
            {selectedPlaylist ? (
              <div className="mb-12">
                <button className="mb-4 text-green-400 hover:underline" onClick={() => setSelectedPlaylist(null)}>&larr; Back to Playlists</button>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{selectedPlaylist.name} Songs</h2>
                <div className="space-y-3">
                  {selectedPlaylist.songs.filter(song => song.name.toLowerCase().includes(search.toLowerCase()) || (song.artist && song.artist.toLowerCase().includes(search.toLowerCase()))).map((song) => (
                    <div key={song.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group">
                      <img src={song.image} alt={song.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{song.name}</h4>
                      </div>
                      <button onClick={() => handlePlay(song)} className="bg-green-500 text-black p-2 rounded-full hover:bg-green-400 transition-colors flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v18l15-9-15-9z" /></svg>
                      </button>
                      <button onClick={() => handleLike(song)} className="text-gray-400 hover:text-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${likedSongs && likedSongs.some(s => s.id === song.id) ? 'fill-pink-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <FeaturedPlaylists featuredPlaylists={featuredPlaylists.filter(playlist => playlist.name.toLowerCase().includes(search.toLowerCase()))} onPlaylistClick={setSelectedPlaylist} />
            )}
            <RecentlyPlayed recentlyPlayed={recentlyPlayed} handlePlay={handlePlay} />
            {selectedArtist ? (
              <div className="mb-12">
                <button className="mb-4 text-green-400 hover:underline" onClick={() => setSelectedArtist(null)}>&larr; Back to Artists</button>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{selectedArtist.name} Songs</h2>
                <div className="space-y-3">
                  {selectedArtist.songs.filter(song => song.name.toLowerCase().includes(search.toLowerCase()) || (song.artist && song.artist.toLowerCase().includes(search.toLowerCase()))).map((song) => (
                    <div
                      key={song.id}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
                      onClick={() => handlePlay(song)}
                    >
                      <img src={song.image} alt={song.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{song.name}</h4>
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); handlePlay(song); }}
                        className="bg-green-500 text-black p-2 rounded-full hover:bg-green-400 transition-colors mr-2"
                        title="Play"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v18l15-9-15-9z" /></svg>
                      </button>
                      <button
                        onClick={e => { e.stopPropagation(); handleLike(song); }}
                        className={`text-gray-400 hover:text-pink-500 ${likedSongs && likedSongs.some(s => s.id === song.id) ? 'text-pink-500' : ''}`}
                        title={likedSongs && likedSongs.some(s => s.id === song.id) ? 'Liked' : 'Like'}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <PopularArtists
                artists={artists.filter(artist => artist.name.toLowerCase().includes(search.toLowerCase()))}
                onArtistClick={setSelectedArtist}
                onPlay={handlePlay}
                onLike={handleLike}
                likedSongs={likedSongs}
              />
            )}
          </div>
        )}
        {activeTab === "browse" && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Browse All</h1>
            <GenresGrid genres={genres} />
            {selectedPlaylist ? (
              <div className="mb-12">
                <button className="mb-4 text-green-400 hover:underline" onClick={() => setSelectedPlaylist(null)}>&larr; Back to New Releases</button>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{selectedPlaylist.name} Songs</h2>
                <div className="space-y-3">
                  {selectedPlaylist.songs.map((song) => (
                    <div key={song.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group">
                      <img src={song.image} alt={song.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{song.name}</h4>
                      </div>
                      <button onClick={() => handlePlay(song)} className="bg-green-500 text-black p-2 rounded-full hover:bg-green-400 transition-colors">
                        Play
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-6">New Releases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredPlaylists.map((playlist) => (
                    <div
                      key={playlist.id}
                      className="group bg-gray-900 p-4 rounded-xl hover:bg-gray-800 transition-all cursor-pointer"
                      onClick={() => setSelectedPlaylist(playlist)}
                    >
                      <div className="relative mb-4">
                        <img
                          src={playlist.image}
                          alt={playlist.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-2 truncate">{playlist.name}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{playlist.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
        {activeTab === "library" && (
          <YourLibrary
            likedSongs={likedSongs}
            recentlyPlayed={recentlyPlayed}
            playlists={playlists}
            onLike={handleLike}
            onAddToPlaylist={handleAddToPlaylist}
            onPlay={handlePlay}
          />
        )}
      </main>
      <MusicPlayer
        isPlaying={isPlaying}
        handlePlay={handlePlay}
        currentSong={currentSong}
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
        volume={audioRef.current ? audioRef.current.volume : 1}
        onVolumeChange={v => { if (audioRef.current) audioRef.current.volume = v; }}
        onLike={handleLike}
        likedSongs={likedSongs}
      />
      <audio
        ref={audioRef}
        src={currentSong && currentSong.audio ? currentSong.audio : undefined}
        onEnded={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />
    </div>

  );
}

