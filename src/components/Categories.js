import React from 'react';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button className="buttonCheck" type="submit">Check status</button>
      </div>
    );
  }
}
export default Category;
