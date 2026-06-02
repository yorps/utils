import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css';

import * as serviceWorker from './utils/serviceWorker';

import App from './App';
import Converter from './components/tools/Converter';
import Generator from './components/tools/Generator';
import UuidGenerator from './components/tools/UuidGenerator';
import DateTool from './components/datetool/DateTool';
import Base64Decoder from './components/decoder/Base64Decoder';
import JSONFormatter from "./components/formatter/JSONFormatter";
import XMLFormatter from "./components/formatter/XMLFormatter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/datetool",
        element: <DateTool />,
    },
    {
        path: "/converter",
        element: <Converter />,
    },
    {
        path: "/generator",
        element: <Generator />,
    },
    {
        path: "/uuid",
        element: <UuidGenerator />,
    },
    {
        path: "/base64decoder",
        element: <Base64Decoder />,
    },
    {
        path: "/json",
        element: <JSONFormatter />,
    },
    {
        path: "/xml",
        element: <XMLFormatter />,
    },
], {
    basename: "/utils"
});

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);

    root.render(
        <RouterProvider router={router} />
    );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

