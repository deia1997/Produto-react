import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TelaProduto from './componentes/TelaProduto';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TelaProdutoDetalhes from './componentes/TelaProdutoDetalhes';

const router = createBrowserRouter(
[
  {
path: "/",
element: <TelaProduto/>
},

{
path: "/produtoDetalhes",
element: <TelaProdutoDetalhes/>
}
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);



reportWebVitals();

