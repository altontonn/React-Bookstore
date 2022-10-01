import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './form.module.css';
import { addBook } from '../redux/books/books';

function AddForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || author.trim()) {
      const newBook = {
        item_id: Math.floor(Math.random() * 1000),
        title,
        author,
        category: 'My bookstore app',
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };
  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.formHeader}>ADD NEW BOOK</h1>
      <form className={styles.formContainer}>
        <input
          type="text"
          className={styles.inputText}
          placeholder="Enter book author..."
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <input
          type="text"
          className={styles.inputText}
          placeholder="Enter book title..."
          name="author"
          value={author}
          onChange={handleAuthor}
        />
        <select name="languages" className={styles.inputText}>
          <option value="javascript">Css3</option>
          <option value="php">PHP</option>
          <option value="java">Java</option>
          <option value="golang">Golang</option>
          <option value="python">Python</option>
          <option value="c#">C#</option>
          <option value="C++">C++</option>
          <option value="erlang">Erlang</option>
        </select>
        <button
          type="submit"
          className={styles.inputSubmit}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddForm;
