import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting, getGreeting } from '../redux/greeting/greettingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(getGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;
