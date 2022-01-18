import React from "react";
import offlineImg from "../../images/offline-img.png";
import onlineImg from "../../images/online-indicator.png";

const OnlineUsers = (props) => {
  // All Props
  const {
    admin,
    onUserSelect,
    allAdmin,
    users,
    userName,
    checkUnseenMesseges,
  } = props;

  return (
    <>
      {/* Conditional Rendering for admins and users */}
      {admin?.role === "Admin" ? (
        <div style={{ width: "100%" }}>
          <div className="online-users">
            <div className="online-user-header">Online Users</div>
            <ul className="users-list-admin">
              {users &&
                Object.keys(users).map((user, index) => (
                  <>
                    {user !== userName ? (
                      <li key={index} onClick={() => onUserSelect(user)}>
                        <span className="users-name-admin">{user}</span>
                        {checkUnseenMesseges(user) !== 0 ? (
                          <span className="new-msg-count-admin">
                            {checkUnseenMesseges(user)}
                          </span>
                        ) : null}
                      </li>
                    ) : null}
                  </>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <div className="online-users">
            <div className="online-user-header">Our Admins</div>
            <ul className="users-list">
              {allAdmin &&
                allAdmin.map((eachAdmin, index) => (
                  <>
                    {eachAdmin.name !== userName ? (
                      <li
                        key={index}
                        onClick={() => onUserSelect(eachAdmin.name)}
                      >
                        <span className="profileImage-main">
                          <img
                            className="profile-image"
                            src={eachAdmin.profileImg}
                            alt="ProfileImage"
                          />
                          {eachAdmin.name in users ? (
                            <>
                              <img
                                className="online-image"
                                src={onlineImg}
                                alt="ONLINE"
                              />
                            </>
                          ) : (
                            <>
                              <img
                                className="online-image"
                                src={offlineImg}
                                alt="OFFLINE"
                              />
                            </>
                          )}
                        </span>
                        <span className="users-name">{eachAdmin.name}</span>
                        {checkUnseenMesseges(eachAdmin.name) !== 0 ? (
                          <span className="new-msg-count">
                            {checkUnseenMesseges(eachAdmin.name)}
                          </span>
                        ) : null}
                      </li>
                    ) : null}
                  </>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default OnlineUsers;
