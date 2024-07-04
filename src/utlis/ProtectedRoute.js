import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ element }) => {

    const jwtToken = Cookies.get("jwt_token");
    return jwtToken ? element : <Navigate to="/login" />;
};
export default ProtectedRoute