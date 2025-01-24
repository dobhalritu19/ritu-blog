import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h1>Blog Post {id}</h1>
      <p className="lead">This is the detailed view of blog post {id}.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Proin vel mauris a justo fermentum tincidunt.
      </p>
    </div>
  );
};

export default SinglePost;
