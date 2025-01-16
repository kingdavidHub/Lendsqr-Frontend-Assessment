import { UserRecord } from "../types";

const useUserDetailsStorage = (userId: string | undefined) => {
  const userStoredData = localStorage.getItem("usersRecord");
  const userData: UserRecord[] | null = userStoredData
    ? JSON.parse(userStoredData)
    : null;
  const matchedData = userData?.find(
    (user) => user.id == userId
  );
  return matchedData;
};
export default useUserDetailsStorage;
