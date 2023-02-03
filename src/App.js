import './App.css';
import Header from './Header';
import Post_1 from './Post_1';
import Post_2 from './Post_2';
import Post_3 from './Post_3';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="AppDiv">
        <Header/>
        <Post_1/>
        <Post_2/>
        <Post_3/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
