import '../App.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';

function Counter() {
  const { count } = useAppSelector(state => state.userReducer);
  const { increment } = userSlice.actions;
  const { decrement } = userSlice.actions;
  const dispatch = useAppDispatch();

  // console.log(userSlice)

  return (
    <div className="App">
      {/* <h1>redux-toolkit</h1> */}
      <h2>Counter: {count}</h2>
      <button style={{ padding: '10px 20px', fontSize: '20px' }} onClick={() => dispatch(increment(5))}>Increment</button>
      <button style={{ padding: '10px 20px', fontSize: '20px' }} onClick={() => dispatch(decrement(5))}>Decrement</button>
    </div>
  );
}

export default Counter;


