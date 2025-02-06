import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'current-script-polyfill'

import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
dayjs.locale(ru)

import React from 'react'
import ReactDOM from "react-dom/client";

import { ReactApplicationContainer } from './containers/react-application-container'

import 'antd/dist/antd.min.css'

const container = document.getElementById('root')


const root = ReactDOM.createRoot(container);
root.render(
  
  <ReactApplicationContainer />
  
);
