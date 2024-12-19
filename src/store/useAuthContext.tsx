import { useContext } from "react";
import { AuthContext } from "./authContext";

function useAuthContext() {
  const authState = useContext(AuthContext);
  return authState;
}
export default useAuthContext;
