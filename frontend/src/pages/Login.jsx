import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, login } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaPencilAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLoader2Fill } from "react-icons/ri";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated, message]);

  return (
    <>
      <section className="authPage">
        <div className="container login-container">
          <div className="header">
            <h3>Login to Your Account</h3>
          </div>
          <form onSubmit={handleLogin}>
            <div className="wrapper">
              <div className="inputTag">
                <label>Login As</label>
                <div>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="" style={{ fontWeight: "bold" }}>
                      Select Role
                    </option>
                    <option value="Employer">Login as an Employer</option>
                    <option value="Job Seeker">Login as Job Seeker</option>
                  </select>
                  <FaRegUser />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="inputTag">
                <label>Email</label>
                <div>
                  <input
                    type="email"
                    placeholder="myemail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MdOutlineMail />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="inputTag">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <RiLoader2Fill />
                </div>
              </div>
            </div>
            <button type="submit" disabled={loading}>
              Login
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
