import './App.css';
import Card from './components/Card';
import { members } from './assets/data';

function App() {
  const name = members[0].name;
  const engName = members[0].englishName;
  return (
    <>
      <Card name={name} engName={engName} />
      <div>안녕</div>
      <div>김채은</div>
    </>
  );
}

export default App;
