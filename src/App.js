import './App.css';
import Layout from './components/Layout/Layout'
import DataSearch from './components/fetchAndSearch/DataSearch'
function App() {
  return (
    <div className="App">
      <Layout>
        <DataSearch />
      </Layout>
    </div>
  );
}

export default App;
