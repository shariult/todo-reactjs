import Button from "../components/ui/Button";
import useAuthContext from "../store/useAuthContext";

function SignIn() {
  const authState = useAuthContext();
  return (
    <div className="p-24">
      {authState!.isLoggedIn ? (
        <h2 className="heading-2 mb-24">You are logged In</h2>
      ) : (
        <h2 className="heading-2 mb-24">You are not logged in</h2>
      )}
      <Button
        variant="button"
        onClick={authState!.signInHandle}
        className="btn btn--primary mr-12"
      >
        Sign In
      </Button>
      <Button
        variant="button"
        onClick={authState!.signOutHandle}
        className="btn btn--primary mr-12"
      >
        Sign Out
      </Button>
    </div>
  );
}

export default SignIn;
