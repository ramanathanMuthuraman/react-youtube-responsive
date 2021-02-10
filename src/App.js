import "./App.css";
import YoutubePlayer from "./YoutubePlayer";

function App() {
  return (
    <div className="App">
      <YoutubePlayer youtubePlayerProps={{ videoId: "wIdU0eYT8p0" }} />
    </div>
  );
}

export default App;
