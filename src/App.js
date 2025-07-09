import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const authState = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Header />
      {!authState && <Auth />}
      {authState && <UserProfile />}
      <Counter />;
    </>
  );
}

export default App;
