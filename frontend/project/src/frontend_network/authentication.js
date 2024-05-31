
import { useNavigate } from "react-router-dom";
import logoutbutton from '../images/logout.png';


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
            <img id="logoutButton" src={logoutbutton} alt="Logout" onClick={logout} style={{ width: '32px', height: '35px', marginTop: '11px' }} />
        </div>
        
    );
}

export {
    LogoutPrompt
};
