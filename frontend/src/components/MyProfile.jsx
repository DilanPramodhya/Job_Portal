import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="account_components">
        <h3>My Profile</h3>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            disabled
            value={user && user.name}
            onChange={(e) => e.target.value}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            disabled
            value={user && user.email}
            onChange={(e) => e.target.value}
          />
        </div>
        {user && user.role === "Job Seeker" && (
          <div>
            <label>My Preferred Jobs</label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input
                type="text"
                disabled
                value={user && user.niches.firstNiche}
                onChange={(e) => e.target.value}
              />
              <input
                type="text"
                disabled
                value={user && user.niches.secondNiche}
                onChange={(e) => e.target.value}
              />
              <input
                type="text"
                disabled
                value={user && user.niches.thirdNiche}
                onChange={(e) => e.target.value}
              />
            </div>
          </div>
        )}
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            disabled
            value={user && user.phone}
            onChange={(e) => e.target.value}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            disabled
            value={user && user.address}
            onChange={(e) => e.target.value}
          />
        </div>
        <div>
          <label>User Role</label>
          <input
            type="text"
            disabled
            value={user && user.role}
            onChange={(e) => e.target.value}
          />
        </div>
        <div>
          <label>Cover Letter</label>
          <textarea
            type="text"
            disabled
            value={user && user.coverLetter}
            onChange={(e) => e.target.value}
            rows={5}
          />
        </div>
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
      </div>
    </>
  );
};

export default MyProfile;
