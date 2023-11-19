import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import facebook_icon from './assets/facebook_icon.svg'
import instagram_icon from './assets/instagram_icon.svg'
import github_icon from './assets/github_icon.svg'

function App() {
  return (
    <div className="App">
      <card>
        <Info />
        <About />
        <Interests/>
        <footer>
          <a href='https://www.facebook.com/dommondia' target="_blank"><img src={facebook_icon}></img></a>
          <a href='https://www.instagram.com/foolpaper/' target="_blank"><img src={instagram_icon}></img></a>
          <a href='https://github.com/dominicmondia' target="_blank"><img src={github_icon}></img></a>
        </footer>
      </card>
    </div>
  );
}

export default App;
