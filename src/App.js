import Header from './components/Header.component';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Home from './components/Home';
import Favorite from './components/Favorite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // const Stack = createStackNavigator();
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
