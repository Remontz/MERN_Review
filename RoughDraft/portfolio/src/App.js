import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header>
        <Contact />
      </Header>
      <AboutMe />
      {/* 
        //Header
          //Nav Links
          //Logo
          // Contact Links
          // Dark Mode & Writing Mode

        // About Me Summary
          // Photo
          // 3-Sentence Intro
          // Learn More Link goes to About Me Page
        
        // Algo / Small Projects
          //Tab Box
            //Tabs Show projects that user can use
        ----
        // In Writing Mode: Poems Cascading, user moves a basket to catch the one they'd like to read.  Poem stays rendered on right side until pulled out of basket.


        // Full Stack Projects
          //Java Python and Mern Sections
        -----
        // In writing Mode: Short Stories & Longer
          // Shows box that displays a book cover type image of the story
          // Clicking opens a "reader page"

        // In Writing Mode : User can login and set favorites, setup readList, create & share content, leave comments
      */}
    </div>
  );
}

export default App;
