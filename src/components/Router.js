import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './Categories';
import BookList from './bookList';

export default function RouteLink() {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
}
