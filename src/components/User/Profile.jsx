import React from "react";
import { useAuth } from "../../Utils/Authentication/Auth";
const Profile = () => {
  const { user } = useAuth();
  return user === null ? <div>User is Not Present</div> : <div>Present</div>;
};

export default Profile;
