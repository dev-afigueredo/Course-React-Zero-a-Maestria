// components
import FirstComponent from './components/FirstComponent';

// styles / CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <Events />
    </div>
  );
}

export default App;
