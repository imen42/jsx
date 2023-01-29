
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from "./component/headerNav/HeaderNav";
import VideoPlayer from './component/videoPlayer/VideoPlayer';
import ProfileDescription from './component/profileDescription/ProfileDescription';
import Comment from './component/comments/Comment';

function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <div>
        <div>
          <VideoPlayer/>
          <ProfileDescription/>
          <Comment /> 
        </div>
        {/*videolist*/}

      </div>
    
    </div>
  );
}

export default App;
