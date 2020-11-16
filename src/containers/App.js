import { Component } from 'react';
import './App.css';
import ProjectDemos from '../components/ProjectDemos/ProjectDemos';
import PrevExperience from '../components/PrevExperience/PrevExperience';
import About from '../components/About/About';
import Yakka from '../assests/vids/react project walkthrough.mp4';
import VideoId from '../assests/vids/VideoID web application.mp4';
import ShopIt from '../assests/vids/Flatiron JS SPA Project.mp4';
class App extends Component {
  state = {
    projects: [
      {url: "https://www.youtube.com/watch?v=lnlib5_8bKs&feature=youtu.be", vid: Yakka, title: "Yakka", description: "some text" },
      {url: "https://www.youtube.com/watch?v=jOXHyLsxfk0&feature=youtu.be", vid: VideoId, title: "VideoId", description: "some text" },
      {url: "https://www.youtube.com/watch?v=313u7LB4V20&feature=youtu.be", vid: ShopIt, title: "ShopIt", description: "some text" }
    ]
  }

  render() {
    return (
      <div className="App">
        <About/>
        <ProjectDemos
        projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
