import { Outlet, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
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

export default About;