import './App.css';
import Left from './Left/Left';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './Main/TopNav';
import Main from './Main/Main';
import MainMiddle from './Main/MainMiddle';
import '@coreui/coreui/dist/css/coreui.min.css'



function App() {
  return (
    <div className="App d-flex">
       <Left />
       <Main />
    </div>
  );
}

export default App;
