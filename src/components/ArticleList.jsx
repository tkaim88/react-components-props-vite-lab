// src/components/ArticleList.jsx
// This component renders all articles inside a main element

import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        // Using spread operator to pass all post properties
        // The key prop is unique (using post.id) for React optimization
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;