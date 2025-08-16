import React from 'react';
import { Menu, X, Home, Search, Library, Download, Music, User } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, activeTab, setActiveTab, search = "", setSearch }) => (
  <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 px-4 py-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-full flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-[var(--brand-primary)]">SoundWave</span>
        </div>
      </div>
      {/* Navigation - Desktop */}
      <nav className="hidden md:flex items-center space-x-8">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            activeTab === 'home' ? 'bg-[var(--brand-primary)] text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('browse')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            activeTab === 'browse' ? 'bg-[var(--brand-primary)] text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Search className="w-5 h-5" />
          <span>Browse</span>
        </button>
        <button 
          onClick={() => setActiveTab('library')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            activeTab === 'library' ? 'bg-[var(--brand-primary)] text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Library className="w-5 h-5" />
          <span>Your Library</span>
        </button>
      </nav>
      {/* Search Bar */}
      <div className="hidden lg:flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for songs, artists..."
            className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
          <Download className="w-4 h-4" />
          <span className="text-sm">Install App</span>
        </button>
        <button className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors" title="Login">
          <User className="w-5 h-5 text-zinc-100" />
        </button>
      </div>
    </div>
    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
        <nav className="flex flex-col space-y-2 mt-4">
          <button 
            onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === 'home' ? 'bg-green-500 text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>
          <button 
            onClick={() => { setActiveTab('browse'); setIsMenuOpen(false); }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === 'browse' ? 'bg-green-500 text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Search className="w-5 h-5" />
            <span>Browse</span>
          </button>
          <button 
            onClick={() => { setActiveTab('library'); setIsMenuOpen(false); }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === 'library' ? 'bg-green-500 text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Library className="w-5 h-5" />
            <span>Your Library</span>
          </button>
        </nav>
      </div>
    )}
  </header>
);

export default Header;
