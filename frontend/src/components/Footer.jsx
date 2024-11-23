import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <footer>
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ cursor: "pointer" }}
            onClick={handleLogoClick}
          />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>No. 06, Keenakele Group, Mudukatuwa, Marawila</li>
            <li>smttravelsandtours3118@gmail.com</li>
            <li>+94 70 654 3001, +94 77 375 9938</li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>

          <ul>
            <li>
              <Link to={"/linkdin"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link to={"/youtube"}>
                <span>
                  <FaYoutube />
                </span>
                <span>You Tube</span>
              </Link>
            </li>
            <li>
              <Link to={"/instagram"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"/twitter"}>
                <span>
                  <FaSquareTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">&copy; CopyRight2024. All Right Reserved</div>
    </>
  );
};

export default Footer;
