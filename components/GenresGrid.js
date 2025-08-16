import React from 'react';

const GenresGrid = ({ genres }) => (
  <section className="mb-12">
    <h2 className="text-xl md:text-2xl font-bold mb-6">Genres & Moods</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {genres.map((genre, index) => (
        <div
          key={index}
          className={`${genre.color} p-4 rounded-xl cursor-pointer hover:scale-105 transition-transform`}
        >
          <h3 className="font-bold text-white text-lg">{genre.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default GenresGrid;
