import Navbar from './Navbar';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import TopUsers from './TopUsers';
import TrendingPosts from './TrendingPosts';
import Feeds from './Feeds';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='topUsers' element={<TopUsers/>}/>
        <Route path='feeds' element={<Feeds/>}/>
        <Route path='trendingPosts' element={<TrendingPosts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
