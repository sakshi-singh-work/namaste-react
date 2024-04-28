import { useEffect, useState } from "react";

const useUserStatus = () => {
  const [userStatus, setUserStatus] = useState(true);
  useEffect(() => {
    addEventListener("online", () => {
      setUserStatus(true);
    });

    addEventListener("offline", () => {
      setUserStatus(false);
    });
  }, []);
  return userStatus;
};

export default useUserStatus;