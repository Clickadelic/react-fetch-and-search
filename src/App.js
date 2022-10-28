import './App.css';
import Layout from './components/Layout/Layout'
// import DataSearch from './components/FetchAndSearch/DataSearch'
import NewPost from './components/Post/NewPost'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <DataSearch /> */}
        <NewPost />
      </Layout>
    </div>
  );
}

export default App;
