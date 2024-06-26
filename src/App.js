import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import userProfile from './components/UserProfile'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const auth = useSelector((state) => state.auth.isLogin);
  return (
    <Fragment>
      <Header/>
      {auth?<UserProfile />:<Auth/>}
     <Counter />
    </Fragment>
  );
}

export default App;
