import React, { useEffect, useState } from 'react';
import { Increment, Decrement } from '../actions/CounterActions';
import { FirstName, SecondName } from '../actions/nameActions';
import Store from '../Store/Store';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [firstname, setFirstname] = useState('katheribe');

  const [secondname, setSecondname] = useState('kjhhkh');
  // console.log('counter', counter);

  function updateStore() {
    const state = Store.getState();
    setCounter(state.account.count);
    console.log('state.count', state);
  }

  function updateName() {
    const statename = Store.getState();
    setFirstname(statename.name.firstName);
    setSecondname(statename.name.secondName);
    console.log('name', statename);
    console.log('name state', firstname);
  }

  function onIncrement() {
    Store.dispatch(Increment());
  }

  function onDecrement() {
    Store.dispatch(Decrement());
  }

  function onClickName() {
    Store.dispatch(FirstName());
    Store.dispatch(SecondName());
  }

  useEffect(() => {
    updateStore();
    updateName();
    Store.subscribe(updateStore);
    Store.subscribe(updateName);
  }, []);

  return (
    <div>
      <span>Counter function </span>
      <h1>{counter}</h1>
      <div>
        <button onClick={onIncrement} type='button'>
          Increment
        </button>
        <button onClick={onDecrement} type='button'>
          Decrement
        </button>
        <div>
          <span>{`Click to see the name ${firstname} : ${secondname}`}</span>
          <br />
          <button onClick={onClickName} type='button'>
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
