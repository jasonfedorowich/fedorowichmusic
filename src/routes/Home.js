import { Outlet, Link } from "react-router-dom";



function Home() {
  return (
    <div>
    <h1>Home Page</h1>
    <a href="/about" target="_self">Visit W3Schools!</a> 
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/about">About</Link> |{" "}
      <Link to="/">Home</Link>
    </nav>
    <Outlet />
  </div>
  );
}

export default Home;