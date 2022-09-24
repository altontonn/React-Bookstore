import React from 'react';
import styles from './form.module.css';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h1 className={styles.formHeader}>ADD NEW BOOK</h1>
          <form className="form-container">
            <input
              type="text"
              className={styles.inputText}
              placeholder="Enter book author..."
              name="title"
              value=""
            />
            <input
              type="text"
              className={styles.inputText}
              placeholder="Enter book title..."
              name="author"
              value=""
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
            <button type="submit" className={styles.inputSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddForm;
