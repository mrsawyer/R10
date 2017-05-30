import {
  createRouter
} from '@expo/ex-navigation';


import NavigationLayout from './NavigationLayout';
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
}));

export default Router;