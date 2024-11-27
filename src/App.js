import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import SyllabusCards from './components/courses/Courses';
import ThirdScreen from './screens/ThirdScreen';
import Recommends from './components/recommends/Recommends';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';

function App() {
  return <>
  {/* <NavBarNew/> */}
  <FirstScreen/>
  <SecondScreen/>
  <AboutMe/>
<ThirdScreen/>
<Recommends/>
<ForthScreen/>
<ByMe/>
  </>
}

export default App;
