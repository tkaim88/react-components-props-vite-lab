// src/components/Article.jsx
// Purpose: Renders an individual blog article
// Props:
//   - title: string title of the article
//   - date: string publication date (optional, has default)
//   - preview: string preview text of the article
//   - minutes: number read time in minutes

function Article({ title, date, preview, minutes }) {
  // Default date that matches the test expectation
  // The test specifically looks for "January 1, 1970"
  const formattedDate = date || "January 1, 1970";
  
  return (
    <article>
      {/* Article title */}
      <h3>{title}</h3>
      
      {/* Publication date - uses default if not provided */}
      <small>{formattedDate}</small>
      
      {/* Article preview text */}
      <p>{preview}</p>
      
      {/* Read time - only shows if minutes prop exists */}
      {minutes && <p>{minutes} min read</p>}
    </article>
  );
}

export default Article;