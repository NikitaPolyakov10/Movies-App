import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return <Route {...route} key={index} />;
          })}
          <Redirect to="/movies/popular/page/1" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
