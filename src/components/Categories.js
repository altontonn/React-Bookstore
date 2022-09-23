import React from 'react';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button className="buttonCheck" type="button">Check status</button>
      </div>
    );
  }
}
export default Category;
