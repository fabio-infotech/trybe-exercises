import './App.css';
import PageHeader from './Components/PageHeader';

const tasks = ['acordar', 'levantar', 'escovar os dentes', 'se arrumar', 'toma café', 'trabalhar'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <PageHeader />
      <ul>
        { task('surfar') }
        { tasks.map(task => <li>{ task }</li>) }
      </ul>
    </div>
  );
}

export default App;
