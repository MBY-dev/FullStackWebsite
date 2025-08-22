import "./Navbar.scss";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import GridViewIcon from '@mui/icons-material/GridViewOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";



const  Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  const {darkMode,toggleDarkMode} = useContext(DarkModeContext);
  return (
     <div className="navbar">
      <div className="left">
       <Link to="/" style={{textDecoration: "none"}}> 
        <span >CasaoSocial</span>
       </Link>
       <HomeIcon/>
       {darkMode ? <LightModeIcon onClick={toggleDarkMode} style={{cursor:"pointer"}}/> : <DarkModeIcon onClick={toggleDarkMode} style={{cursor:"pointer"}}/>}
        <GridViewIcon/>
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search..."/>  
        </div>
      </div>
      <div className="right">
        <PersonIcon/>
        <MailIcon/>
        <NotificationsIcon/>
        <div className="user">
          <img src={currentUser.profilePicture} alt=""  />
          <span>{currentUser.name}</span>
        </div>
      </div>
     </div>
  );
}

export default Navbar;