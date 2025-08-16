# SoundWave Music App

> A modern, premium music streaming web app inspired by Spotify. Built with Next.js, React, and Tailwind CSS.

## 🎵 Features

- **Browse & Play:**
	- Stream songs by artists, playlists, and genres
	- Play, pause, seek, and control volume with a global player
- **Personal Library:**
	- Like/unlike songs and manage your favorites
	- Download songs for quick access (UI only)
	- Recently played and custom playlists
- **Artist & Playlist Views:**
	- Drill down into artists and playlists, view and play their songs
	- Like/play songs directly from any list
- **Search:**
	- Global search bar filters songs, artists, and playlists live
- **Modern UI/UX:**
	- Responsive, mobile-friendly, and accessible
	- Custom color palette and branding (edit in `globals.css`)
- **Modular Codebase:**
	- Easy to extend with new features or UI sections

## 🚀 Getting Started

1. **Create a new Next.js app (if you haven't already):**
   ```bash
   npx create-next-app@latest . --use-npm --js --tailwind --no-eslint --no-src-dir --no-experimental-app
   ```
   > If you already have the project files, skip this step.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

- `app/` — Main Next.js app logic and pages
- `components/` — Modular React components (Header, MusicPlayer, YourLibrary, etc.)
- `public/` — Static assets and audio files (add your own MP3s here)
- `app/globals.css` — Tailwind and custom CSS

## 🛠️ Customization

- **Add Songs:**
	- Place MP3 files in `public/`
	- Update song objects in `app/page.js` with the correct file names and metadata
- **Branding:**
	- Edit color variables and gradients in `app/globals.css`
- **UI/UX:**
	- Tweak or extend components in `components/` for new features

## 📝 Usage

- **Play a Song:** Click any song row or play icon
- **Like a Song:** Click the heart icon next to any song or artist
- **Download a Song:** Click the download icon (UI only, does not save files locally)
- **Search:** Use the navbar search to filter songs, artists, and playlists instantly
- **Navigate:** Use the sidebar or navbar to switch between Home, Browse, and Your Library

## 📦 Dependencies

- [Next.js](https://nextjs.org/) — React framework for production
- [React](https://react.dev/) — UI library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [lucide-react](https://lucide.dev/) — Icon library

## 🙏 Credits

- UI/UX inspired by Spotify
- Icons from [lucide-react](https://lucide.dev/)
- Built with Next.js, Tailwind CSS, and React

---

Enjoy your music! If you have ideas or want to contribute, feel free to fork or open an issue.
