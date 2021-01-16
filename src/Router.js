import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import routes from './utils/Routes';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Nav } from './components/Nav';
import ActionTypes from './store/Actions';
import { Context } from './store/Store';
import { useTheme } from './utils/ThemeService';
import { setStateFromLocal } from './utils/LocalStorageUtils';

const Router = () => {
  const [state, dispatch] = useContext(Context);
  const theme = useTheme();

  useEffect(() => {
    setStateFromLocal(
      'language',
      state.language,
      ActionTypes.SET_LANGUAGE,
      dispatch
    );
    setStateFromLocal('theme', state.theme, ActionTypes.SET_THEME, dispatch);
  });

  return (
    <BrowserRouter>
      <div className={`app clr-bg-primary ${theme}`}>
        <Nav />

        <div className="window-restrictions">
          <div className="content-wrapper clr-bg-primary">
            <ScrollToTop />
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.projects} component={Projects} />
              <Route exact path={routes.about} component={About} />
              <Route exact path={routes.blog} component={Blog} />
              <Route exact path={routes.contact} component={Contact} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
