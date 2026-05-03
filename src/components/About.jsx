// src/components/About.jsx
// Purpose: Renders an aside section with blog logo and description
// Props: 
//   - image: URL string for the blog logo (optional, has default)
//   - about: string description of the blog

function About({ image, about }) {
  // Default image URL that matches the test expectation
  const defaultImage = "https://via.placeholder.com/215";
  
  return (
    <aside>
      {/* Image with accessibility alt text */}
      <img 
        src={image || defaultImage}  // Use prop image or fallback to default
        alt="blog logo" 
      />
      {/* About text paragraph */}
      <p>{about}</p>
    </aside>
  );
}

export default About;