import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const login = useSelector((state) => state.auth.isLogin);
  const logout = useSelector((state) => state.auth.logOut);
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(authActions.userlogOut());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {login && (
        <>
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>

              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
