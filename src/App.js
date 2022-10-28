import './App.css';
import Layout from './components/Layout/Layout'
// import DataSearch from './components/FetchAndSearch/DataSearch'
import NewPost from './components/Post/NewPost'
import Props from './components/Props'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <DataSearch /> */}
        {/* <NewPost /> */}
        <Props />
      </Layout>
    </div>
  );
}

export default App;
