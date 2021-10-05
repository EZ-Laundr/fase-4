import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import store from './store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  )
}