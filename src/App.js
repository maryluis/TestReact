import './App.css';
import {Header, Footer, Main} from "./components";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import { store } from './redux';

function App() {
  return (
     <Provider store = {store}>
        <Router history = {createBrowserHistory}>
          <Header/>
          <Main/>
          <Footer/>
        </Router>
     </Provider>

  );
}

export default App;
