import './App.css';
import Layout from './components/Layout/Layout'
import DataSearch from './components/FetchAndSearch/DataSearch'
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
