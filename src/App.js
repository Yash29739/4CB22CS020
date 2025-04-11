import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import TopUsers from './TopUsers';
import TrendingPosts from './TrendingPosts';
import Feeds from './Feeds';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feeds/>}/>
        <Route path='/topUsers' element={<TopUsers/>}/>
        <Route path='/trendingPosts' element={<TrendingPosts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
