import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMail } from "react-icons/md";
import { RiLoader2Fill } from "react-icons/ri";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("role", role);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
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

  const niches = [
    "Welder",
    "Fabricator",
    "Nursing",
    "Bike Rider",
    "Carver",
    "Wine",
  ];

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <h3>Create a New Account</h3>
          </div>
          <form onSubmit={handleRegister}>
            <div className="wrapper">
              <div className="inputTag">
                <label>Register As</label>
                <div>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="" style={{ fontWeight: "bold" }}>
                      Select Role
                    </option>
                    <option value="Employer">Register as an Employer</option>
                    <option value="Job Seeker">Register as Job Seeker</option>
                  </select>
                  <FaRegUser />
                </div>
              </div>
              <div className="inputTag">
                <label>Name</label>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FaPencilAlt />
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
              <div className="inputTag">
                <label>Phone Number</label>
                <div>
                  <input
                    type="number"
                    placeholder="+94000000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <FaSquarePhoneFlip />
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
              <div className="inputTag">
                <label>Address</label>
                <div>
                  <input
                    type="text"
                    placeholder="Your Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <FaAddressBook />
                </div>
              </div>
            </div>
            {role === "Job Seeker" && (
              <>
                <div className="wrapper">
                  <div className="inputTag">
                    <div className="label">Your First Job</div>
                    <div>
                      <select
                        value={firstNiche}
                        onChange={(e) => setFirstNiche(e.target.value)}
                      >
                        <option value="" style={{ fontWeight: "bold" }}>
                          Your Jobs
                        </option>
                        {niches.map((niche, index) => (
                          <option value={niche} key={index}>
                            {niche}
                          </option>
                        ))}
                      </select>
                      <MdCategory />
                    </div>
                  </div>
                  <div className="inputTag">
                    <div className="label">Your Second Job</div>
                    <div>
                      <select
                        value={secondNiche}
                        onChange={(e) => setSecondNiche(e.target.value)}
                      >
                        <option value="" style={{ fontWeight: "bold" }}>
                          Your Jobs
                        </option>
                        {niches.map((niche, index) => (
                          <option value={niche} key={index}>
                            {niche}
                          </option>
                        ))}
                      </select>
                      <MdCategory />
                    </div>
                  </div>
                  <div className="inputTag">
                    <div className="label">Your Third Job</div>
                    <div>
                      <select
                        value={thirdNiche}
                        onChange={(e) => setThirdNiche(e.target.value)}
                      >
                        <option value="" style={{ fontWeight: "bold" }}>
                          Your Jobs
                        </option>
                        {niches.map((niche, index) => (
                          <option value={niche} key={index}>
                            {niche}
                          </option>
                        ))}
                      </select>
                      <MdCategory />
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="inputTag">
                    <label>Cover Letter</label>
                    <div>
                      <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        rows={8}
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="inputTag">
                    <label>Resume</label>
                    <div>
                      <input
                        type="file"
                        onChange={resumeHandler}
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <button type="submit" disabled={loading}>
              Register
            </button>
            <Link to={"/login"}>Login Now</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
