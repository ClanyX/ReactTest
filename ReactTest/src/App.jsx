import './App.css'
import ButtonComponent from './component/ButtonComponent'
import CheckBoxGun from './component/CheckBoxGun';

function App() {
  return (
    < div style={{ textAlign: 'center' , marginTop: '50 px' }} >
      <h1 > VitePWA + MUI App </ h1 >
      <ButtonComponent /><br></br>
      <CheckBoxGun />
    </ div >
  );
}

export default App
