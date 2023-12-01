/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Carousel from "./componets/home/carousel";
import Welcome_popular from "./componets/home/welcome_popular";
import Help_need from "./componets/home/help_need";
import Testinomials from "./componets/home/testinomials";
import Mainfooter from "./componets/footer/mainfooter";
// import Ratings from "./componets/Rating/Ratings";
// import MainDashboard from "./componets/adminDashboard/MainDashboard";
// import Feedback from "./componets/feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="page-wrapper">
        <Carousel />
        <Welcome_popular />
        <Help_need />
        <Testinomials />
        <Mainfooter />
      </div>
      {/* <Ratings /> */}
      {/* <MainDashboard /> */}
      {/* <Feedback /> */}
    </div>
  );
}

export default App;
