import Book from './Bookstore';
import AddForm from './AddForm';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: 2,
    title: 'Animal Farm',
    author: 'George Orwell',
  },
  {
    id: 3,
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
  },
];

function Books() {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddForm />
    </div>
  );
}
export default Books;
