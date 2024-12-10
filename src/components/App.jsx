import './App.css';
import Footer from './Footer';
import HeroContainer from  './HeroContainer';
import Navbar from './navbar';
import SearchResultsContainer from './SearchResultsContainer';


function App() {
    return (
        <>
            <Navbar />
            <HeroContainer />
            <SearchResultsContainer />
            <Footer/>
        </>
    );
}

export default App;
