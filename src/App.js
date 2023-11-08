import Header from './components/Header.component';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
       <Header/>
       <Search/>
       <Weather/>
    </div>
  );
}

export default App;
