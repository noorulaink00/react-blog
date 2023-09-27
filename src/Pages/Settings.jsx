import SideBar from "../components/SideBar";
import "../css/Settings.css";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTittle">Update Your Account</span>
          <span className="settingsDeleteTittle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Image</label>
          <div className="settingsPP">
            <img
              src="data:image/jpeg;base64,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 "
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="far fa-user-circle settingsPPIcon"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
