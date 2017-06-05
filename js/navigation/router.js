import {
  createRouter
} from '@expo/ex-navigation';

import NavigationLayout from './NavigationLayout';
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';
import Faves from '../scenes/Faves';

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
  speaker: () => Speaker,
  faves: () => Faves
}));

export default Router;
