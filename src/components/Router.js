import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './Books';
import Category from './Categories';

export default function RouteLink() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
}
