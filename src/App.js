// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer title='Acuarios de Biotopo' greeting='World Championship'/>
    </div>
  );
}

export default App;
