import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearAllUpdateProfileErrors,
  resetUpdateProfileSlice,
  updateProfile,
} from "../store/slices/updateProfileSlice";
import { toast } from "react-toastify";
import { getUser } from "../store/slices/userSlice";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector(
    (state) => state.updateProfile
  );

  const dispatch = useDispatch();

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [address, setAddress] = useState(user && user.address);
  const [firstNiche, setFirstNiche] = useState(user && user.niches?.firstNiche);
  const [secondNiche, setSecondNiche] = useState(
    user && user.niches?.secondNiche
  );
  const [thirdNiche, setThirdNiche] = useState(user && user.niches?.thirdNiche);
  const [coverLetter, setCoverLetter] = useState(user && user.coverLetter);
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(user && user.resume?.url);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    if (user && user.role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
    }
    if (resume) {
      formData.append("resume", resume);
    }
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdated) {
      toast.success("Profile Updated.");
      dispatch(getUser());
      dispatch(resetUpdateProfileSlice());
    }
  }, [dispatch, loading, error, isUpdated, user]);

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };

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
      <div className="account_components">
        <h3>Update Profile</h3>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {user && user.role === "Job Seeker" && (
          <>
            <div>
              <label>My Preferred Jobs</label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <select
                  value={firstNiche}
                  onChange={(e) => setFirstNiche(e.target.value)}
                >
                  {niches.map((element, index) => {
                    return (
                      <option value={element} key={index}>
                        {element}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={secondNiche}
                  onChange={(e) => setSecondNiche(e.target.value)}
                >
                  {niches.map((element, index) => {
                    return (
                      <option value={element} key={index}>
                        {element}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={thirdNiche}
                  onChange={(e) => setThirdNiche(e.target.value)}
                >
                  {niches.map((element, index) => {
                    return (
                      <option value={element} key={index}>
                        {element}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <label>Cover Letter</label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                rows={5}
              />
            </div>
            <div>
              <label>Upload Resume</label>
              <input type="file" onChange={resumeHandler} />
              {user && user.resume && (
                <div>
                  <p>Current Resume :</p>
                  <Link
                    to={user.resume && user.resume.url}
                    target="_blank"
                    className="view-resume"
                  >
                    View Resume
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
        <div>
          <label>Joined On</label>
          <input
            type="text"
            disabled
            value={
              user && user.createdAt
                ? new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }).format(new Date(user.createdAt))
                : "N/A" // Default value if createdAt is unavailable
            }
          />
        </div>
        <div className="save_change_btn_wrapper">
          <button
            className="btn"
            onClick={handleUpdateProfile}
            disabled={loading}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
