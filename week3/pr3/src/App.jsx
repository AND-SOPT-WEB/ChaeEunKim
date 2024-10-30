import './App.css';
import Card from './components/Card';
import { members } from './assets/data';

function App() {
  const name = members[0].name;
  const engName = members[0].englishName;
  return (
    <div className='cards'>
      {members.map(member => (
        <Card
        num = {member.id}
        name = {member.name}
        engName = {member.englishName}
        github = {member.github}
        />
      ))}
    </div>
  );
}

export default App;