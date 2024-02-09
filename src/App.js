import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import Modal from './Components/Modal';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller about dreams within dreams.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRahMdIAUM-EOFYqEUdg55XHG4JQYaskXKhDG8WeHkyZH2DXZVz',
      rating: 8.8,
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-',
      rating: 9.3,
    },
    {
      title: 'The Dark Knight',
      description: 'A superhero film directed, produced, and co-written by Christopher Nolan.',
      posterURL: 'https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg',
      rating: 9,
    },
    {
      title: 'IT',
      description: 'Oppenheimer is a 2023 epic biographical drama film written for the screen and directed by Christopher Nolan.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeQ26eky-Cp_SXUJXxlgQTQEEc9esN9ctc7kXlaF8yzdvl2E3z',
      rating: 7.3,
    },
    {
      title: 'Luther: The Fallen Sun',
      description: 'Luther: The Fallen Sun is a 2023 crime thriller film directed by Jamie Payne and written by Neil Cross. It serves as a film continuation of Luther.',
      posterURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9YmjJBQn3TVaawou4r84V8ZWwqBKAKED7RueUyZLcbOYFTHyz',
      rating: 6.4,
    },
    {
      title: 'Murder on the Orient Express',
      description: 'Murder on the Orient Express is a 2017 mystery film co-produced and directed by Kenneth Branagh from a screenplay by Michael Green, based on the 1934 novel of the same name by Agatha Christie.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhN5N8AjbsRwE-PkDpWkpfWv5nF7KvTyXAm39-mQ8qnvhbtTDX',
      rating: 6.5,
    },
    {
      title: 'Death on the Nile',
      description: 'Death on the Nile is a 2022 mystery film directed by Kenneth Branagh from a screenplay by Michael Green, based on the 1937 novel of the same name by Agatha Christie, and the second big screen adaptation of Christie novel, following the 1978 film.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKCXqzpTydBqW935ZIKTobVO30rObdHYJafokbFbiTWX5PNe5',
      rating: 6.3,
    },
    {
      title: 'A Haunting in Venice',
      description: 'A Haunting in Venice is a 2023 American mystery film produced and directed by Kenneth Branagh from a screenplay by Michael Green, loosely based on the 1969 Agatha Christie novel Hallowe en Party.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1B1WSVwFanA2oELXQfqAcHwJJxeh6wDWRrGFgsnZVcO50e2K',
      rating: 6.5,
    },
    {
      title: 'Kill Bill: Vol. 1',
      description: 'Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2n6mrijVjYMAFEQ1DUaKCp0P02YwVyzAO9Hf1ypNEPvsJk835',
      rating: 8.2,
    },
    {
      title: 'Kill Bill: Vol. 2',
      description: 'Death on the Nile is a 2022 mystery film directed by Kenneth Branagh from a screenplay by Michael Green, based on the 1937 novel of the same name by Agatha Christie, and the second big screen adaptation of Christie novel, following the 1978 film.',
      posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS34YtP5L1Du1keGmJXEJVG3ap_KnWdyPwrPkqLnjZ2PK2g_WsO',
      rating: 8,
    },
    {
      title: 'Me Before You',
      description: 'Me Before You is a 2016 romance drama film directed by Thea Sharrock in her directorial debut and adapted by author Jojo Moyes from her 2012 novel of the same name.',
      posterURL: 'https://www.movienewsletters.net/photos/191384R1.jpg',
      rating: 7.4,
    },
    {
      title: 'Saw X',
      description: 'Saw X is a 2023 American horror film directed and edited by Kevin Greutert and written by Peter Goldfinger and Josh Stolberg.',
      posterURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIWilcYYsY_jD5PCANp-pUXdKCxBpLSPGqGaagNangnXuOCJna',
      rating: 6.6,
    },
    {
      title: 'Badland Hunters',
      description: 'Badland Hunters (Korean: 황야) is a 2024 South Korean dystopian action film directed by Heo Myung-haeng, in his directorial debut.',
      posterURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNjatfQ7yNx3Ejq1snXteHf9TeOUmaaWjxlXnssAI6y2IE138x',
      rating: 8,
    },
    {
      title: 'Killers of the Flower Moon',
      description: 'Killers of the Flower Moon is a 2023 American epic western crime drama film directed and produced by Martin Scorsese.',
      posterURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRodNgRGPBvnQ2nSLCaHhIC8vID2zmK6ACHdxVEmM2xnK8juD1e',
      rating: 7.7,
    },
    {
      title: 'The Beekeeper',
      description: 'The Beekeeper is a 2024 American action thriller film directed by David Ayer and written by Kurt Wimmer. The film stars Jason Statham, Emmy Raver-Lampman, Josh Hutcherson, Bobby Naderi, Phylicia Rashad and Jeremy Irons.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2WqZhr6rHP_NYJcFX7e0-6eGZ94cKHizH11R5JQ40kfc3Zoz3',
      rating: 7.4,
    },
  ]);

  const [filters, setFilters] = useState({ title: '', rating: '' });
  console.log(filters);
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSearchIconClick = () => {
    console.log('Search icon clicked!');
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === '' || movie.rating === parseFloat(filters.rating))
  );

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="app">
      <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Filter onFilterChange={handleFilterChange} onSearchIconClick={handleSearchIconClick} />
      <button 
      style={{ 
        borderRadius: '10px', 
        border: 'none',
        width: '25%', 
        height: '30px', 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
        cursor: 'pointer',
        margin: '7px',
        color: 'grey', 
        }} onClick={openModal}
        >
          Add Movie
          </button>
      </div>
      {filteredMovies.length === 0 ? (
        <p>No Movies Found</p>
      ) : (
        <MovieList movies={filteredMovies} />
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleAddMovie} />
    </div>
  );
};

export default App;
