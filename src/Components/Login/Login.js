import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Login() {
  const {
    googleSignIn,
    loginUser,
    emailHandle,
    passwordHandle,
    isErr,
    setUsers,
    setIsloding,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  //  console.log(location.state.from);
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUsers(result.user);
        history.push(redirect_url);

        // console.log(result.user);
      })
      .finally(() => setIsloding(false));
  };
  return (
    <div>
      <div className="container w-50">
        <div className="row">
          <h1 className="text-center text-primary">Sign In With</h1>
          <div className="text-center">
            <button onClick={handleGoogleLogin} className="btn btn-danger">
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
