import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAction } from '../redux/categories/categories';

function Category() {
  const status = useSelector((state) => state.checks);
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(checkAction());
  };
  return (
    <div>
      <button className="buttonCheck" onClick={handleCheck} type="button">Check Status</button>
      <h1>{status}</h1>
    </div>
  );
}
export default Category;
