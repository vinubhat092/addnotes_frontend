import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import NotesListPages from './pages/NotesListPages';
import NotePage from './pages/NotePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import CreatePage from './pages/CreatePage';
//import updateNote from './pages/updateNote';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <Router>
    <div className="container dark">
      <div className='app'>
        
        <AuthProvider>
        <Header/>
            <Routes><Route path="/login" element={<LoginPage />} /></Routes>
            <PrivateRoute path="/" element={<NotesListPages />} exact />
            <Routes><Route path="/notes/create" element={<CreatePage />} exact /></Routes>
            <Routes><Route path="/note/:id" element={<NotePage />} exact/></Routes>
            
        </AuthProvider>
        </div>
    </div>
    </Router>
  );
}

export default App;
