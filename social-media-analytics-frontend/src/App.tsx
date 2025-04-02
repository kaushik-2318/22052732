import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import UserPosts from "./pages/User.tsx";
import Header from "./components/Header.tsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/users/:userId" element={<UserPosts />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
