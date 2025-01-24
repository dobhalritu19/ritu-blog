import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post.' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post.' },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to My Blog</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-6 mb-4" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
