import React from 'react';
import RouteKeys from './routesKeys';

interface RouteItem {
  key: string;
  path: string;
  component: React.ReactNode;
}

const RoutesApp: RouteItem[] = [
  {
    path: '',
    key: RouteKeys.index,
    component: null,
  },
  {
    path: RouteKeys.quests,
    key: RouteKeys.quests,
    component: null,
  },
];
export default RoutesApp;
