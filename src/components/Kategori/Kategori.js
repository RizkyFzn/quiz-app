import React from 'react';
import { Link } from 'react-router-dom';
import './Kategori.scss';

function Kategori() {
  return (
    <>
      <h2>Pilih Kategori</h2>
      <div className="kategori">
        <Link className="btn-kategori" to="/Olahraga">
          Olahraga
        </Link>
        <Link className="btn-kategori" to="/Umum">
          Pengetahuan Umum
        </Link>
        <Link className="btn-kategori" to="/Geografi">
          Geografi
        </Link>
      </div>
    </>
  );
}

export default Kategori;
