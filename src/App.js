import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
   <Navbar title="TextUtils" aboutText="AboutUs"/>
   {/* <Navbar/> */}
   <div className="container">
   <TextForm heading="Enter text to Analyse"/>
   </div>
   </>
  );
}

export default App;
