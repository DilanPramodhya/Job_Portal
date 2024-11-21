import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="content">
        <h1>404 Not Found</h1>
        <p>Your Visited Page Not Found. Please Go Home</p>
        <Link to={"/"} className="btn">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
