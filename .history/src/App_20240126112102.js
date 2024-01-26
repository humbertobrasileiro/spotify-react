import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Main>
        <Header></Header>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
