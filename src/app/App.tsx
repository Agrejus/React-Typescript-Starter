/** 
 * This is the main entry point of your React application. 
 * The React application is a React component like any other react components. 
 */
import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './shared-components/header/Header';

const useSuspense = <T extends {}>(Component: React.ComponentType<T>) => {
  return (props?: T) => <React.Suspense fallback={<div>Loading</div>}>
    <Component {...props ?? {} as T} />
  </React.Suspense>
}

const Home = useSuspense(React.lazy(() => import('./pages/home/Home')));
const Test = useSuspense(React.lazy(() => import('./pages/test/Test')));

export const App: React.FunctionComponent = () => {
  return <Router>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
}