import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Store from './store/Store'
import routes from './utils/Routes'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { Nav } from './components/Nav'

const Router = () => {
  return (
    <BrowserRouter>
      <Store>
        <div className="app">

          <Nav />

          <div className="window-restrictions">
            <div className="content-wrapper">
              <ScrollToTop />
              <Switch>
                <Route
                exact path={ routes.home }
                component={ Home }
                />
                <Route
                exact path={ routes.projects }
                component={ Projects }
                />
                <Route
                exact path={ routes.about }
                component={ About }
                />
                <Route
                exact path={ routes.blog }
                component={ Blog }
                />
                <Route
                exact path={ routes.contact }
                component={ Contact }
                />
              </Switch>
            </div>
          </div>
        </div>
      </Store>
    </BrowserRouter>
  )
}

export default Router
