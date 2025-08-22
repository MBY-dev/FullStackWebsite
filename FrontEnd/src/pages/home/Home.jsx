
import "./Home.scss";
import { Story } from "../../components/Stories/Story";
import { Posts } from "../../components/Posts/Posts";
const  Home = () => {
  return (
     <>    
     <div className="home">
      <Story />
      <Posts />
     </div>
     </>   
  );
}

export default Home;