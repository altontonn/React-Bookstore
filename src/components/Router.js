import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './Categories';
import Book from './Bookstore';

export default function RouteLink() {
  return (
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
}
