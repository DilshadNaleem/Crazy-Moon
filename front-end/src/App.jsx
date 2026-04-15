import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

// 1. Define your page components
const Home = () => <h1>🏠 Home</h1>;
const Profile = () => <h1>👤 Profile</h1>;
const NotFound = () => <h1>404: Page Not Found</h1>;

// 2. A simple Navigation component
// const Navbar = () => (
//   <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#f4f4f4' }}>
//     <Link to="/">Home</Link>
//     <Link to="/profile">Profile</Link>
//     <Link to="/secret">Broken Link</Link>
//   </nav>
// );

// 3. The Main App
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ profile" element={<Profile />} />
          {/* The "*" path catches any URL that doesn't match the above */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}