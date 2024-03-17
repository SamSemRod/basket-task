import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import  {store}  from './store/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
