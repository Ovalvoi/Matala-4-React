import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './FComponenets/Router';
import './App.css'; // Import the global styles

export default function App() {

return <RouterProvider router={router} />;
}
