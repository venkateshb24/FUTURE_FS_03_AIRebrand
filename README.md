# SoundWave Music App

> A modern, premium music streaming web app inspired by Spotify. Built with Next.js, React, and Tailwind CSS.

-----

## 🎵 Features

  - **Browse & Play:** Stream songs by artists, playlists, and genres. Play, pause, seek, and control volume with a global player.
  - **Personal Library:** Like/unlike songs and manage your favorites. Includes recently played and custom playlists.
  - **Artist & Playlist Views:** Drill down into artists and playlists to view and play their songs. Like or play songs directly from any list.
  - **Search:** A global search bar filters songs, artists, and playlists live.
  - **Modern UI/UX:** Responsive, mobile-friendly, and accessible. The custom color palette and branding can be edited in `globals.css`.
  - **Modular Codebase:** Easy to extend with new features or UI sections.

-----

## 🚀 Getting Started

1.  **Create a new Next.js app (if you haven't already):**

    ```bash
    npx create-next-app@latest . --use-npm --js --tailwind --no-eslint --no-src-dir --no-experimental-app
    ```

    If you already have the project files, skip this step.

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Visit `http://localhost:3000`

-----

## 🗂️ Project Structure

  - `app/` — Main Next.js app logic and pages
  - `components/` — Modular React components (Header, MusicPlayer, YourLibrary, etc.)
  - `public/` — Static assets and audio files (add your own MP3s here)
  - `app/globals.css` — Tailwind and custom CSS

-----

## 🛠️ Customization

  - **Add Songs:** Place MP3 files in `public/` and update song objects in `app/page.js` with the correct file names and metadata.
  - **Branding:** Edit color variables and gradients in `app/globals.css`.
  - **UI/UX:** Tweak or extend components in `components/` for new features.

-----

## 📝 Usage

  - **Play a Song:** Click any song row or play icon.
  - **Like a Song:** Click the heart icon next to any song or artist.
  - **Search:** Use the navbar search to filter songs, artists, and playlists instantly.
  - **Navigate:** Use the sidebar or navbar to switch between Home, Browse, and Your Library.

-----

## 📦 Dependencies

  - **Next.js** — React framework for production
  - **React** — UI library
  - **Tailwind CSS** — Utility-first CSS
  - **lucide-react** — Icon library

-----

## 🤝 Contributing

Contributions are welcome\! 🎉
If you'd like to improve this project:

1.  Fork the repo
2.  Create a new branch (`git checkout -b feature-name`)
3.  Commit your changes (`git commit -m "Add feature"`)
4.  Push to your fork (`git push origin feature-name`)
5.  Open a Pull Request

Feel free to open issues for bugs, suggestions, or feature requests.

-----

## 📜 License

This project is open-source and free to use under the **MIT License**. You can use, modify, and share it with proper attribution.

-----

## 🙏 Credits

  - UI/UX inspired by Spotify
  - Icons from `lucide-react`
  - Built with Next.js, Tailwind CSS, and React

✨ Enjoy your music with SoundWave\!