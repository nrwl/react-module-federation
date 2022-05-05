import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

const About = React.lazy(() => import('about/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const Shop = React.lazy(() => import('shop/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <h1>Store</h1>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Shop />} />

        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>
    </React.Suspense>
  );
}

export default App;
