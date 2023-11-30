import './App.css';
import Navbar from './componets/navbar/Navbar';
import Carousel from './componets/home/carousel';
import Welcome_popular from './componets/home/welcome_popular';
import Help_need from './componets/home/help_need';
import Testinomials from './componets/home/testinomials';
import Mainfooter from './componets/footer/mainfooter';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div class="page-wrapper">
<Carousel/>
<Welcome_popular/>
<Help_need/>
<Testinomials/>
<Mainfooter/>
    </div>

    </div>
  );
}

export default App;
