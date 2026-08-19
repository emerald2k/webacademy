import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from 'react-router';

const products = [
  { id: '1', name: 'Laptop Lenovo', price: 3200 },
  { id: '2', name: 'iPhone', price: 5200 },
  { id: '3', name: 'Monitor Samsung', price: 850 },
];

function Products() {
  return (
    <>
      <h1>Produse</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} lei</p>
          <Link to={`/produse/${product.id}`}>Vezi produs</Link>{' '}
          {/* Link către pagina de detalii a produsului */}
        </div>
      ))}
    </>
  );
}

function ProductDetails() {
  const { id } = useParams(); // useParams este un hook care permite accesarea parametrilor din URL. În acest caz, obținem parametrul id din URL-ul curent, care corespunde ID-ului produsului selectat.

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h1>Produsul nu există</h1>;
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>Preț: {product.price} lei</p>
      <Link to="/produse">Înapoi la produse</Link>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/produse" />} />{' '}
        {/* Redirect to /produse */}
        <Route path="/produse" element={<Products />} />{' '}
        {/* Route for the products list */}
        <Route path="/produse/:id" element={<ProductDetails />} />{' '}
        {/* Route for product details */}
      </Routes>
    </BrowserRouter>
  );
}
