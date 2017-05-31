import {
  createRouter
} from '@expo/ex-navigation';

import NavigationLayout from './NavigationLayout';
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
}));

export default Router;
