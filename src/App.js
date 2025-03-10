import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route exact path="/" element={<Create />} />
      </Switch>
    </Router>
  );
}

export default App;
