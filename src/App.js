import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Item from './pages/Item'
import store from './store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/item" component={() => <Item />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  )
}