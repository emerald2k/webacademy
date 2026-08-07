import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router';

const articles = [
  {
    slug: 'ce-este-react',
    title: 'Ce este React?',
    text: 'React este o bibliotecă pentru interfețe.',
  },
  {
    slug: 'ce-este-router',
    title: 'Ce este React Router?',
    text: 'React Router ajută la navigarea între pagini.',
  },
];

function Blog() {
  return (
    <>
      <h1>Blog</h1>

      {articles.map((article) => (
        <div key={article.slug}>
          <h3>{article.title}</h3>
          <Link to={`/blog/${article.slug}`}>Citește</Link>
        </div>
      ))}
    </>
  );
}

function Article() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <h1>Articolul nu există</h1>;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.text}</p>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        {/* This route will match any path with a single segment and render the Blog component. */}
        <Route path="/:customParam" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}
