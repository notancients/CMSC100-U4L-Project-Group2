
import { useNavigate } from "react-router-dom";

function LogoutPrompt() {
    const navigate = useNavigate();
    
    function logout() {
        console.log("Removing the details in the user's local storage.");
        try{
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
        } catch (err) {
            console.log("There was an error with removing user details.");
        }
        console.log("Successfully removed all the details in the user's local storage.");
        navigate("/");
    }


    return (
        <div>
            <buttton id="logoutButton" onClick={logout}>Logout</buttton>
        </div>
    )
}

export {
    LogoutPrompt
}