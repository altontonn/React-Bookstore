import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './Categories';
import Books from './Books';

export default function RouteLink() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
}
