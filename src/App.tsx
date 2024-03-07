// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from './hooks/redux';
// import { fetchUsers } from './store/reducers/ActionCreators';
// import Counter from './components/Counter';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import './App.css';

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/* <h1>Posts form JSON placeholder using RTK</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user, i) => (
        <div key={user.id}>
          <div style={{ padding: '5px', fontSize: '20px' }}>{i + 1}. {user.name} - <i>{user.email}</i></div>
        </div>
      ))} */}
      {/* {JSON.stringify(users, null, 2)} */}
      {/* <Counter /> */}
      <div style={{ display: 'flex' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
