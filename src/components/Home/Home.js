import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <>
      <h1>Selamat Datang</h1>
      <Link className="btn-start" to="/Kategori">
        Mulai Quiz
      </Link>
    </>
  );
}

export default Home;
