import styles from './page.module.css';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      excerpt: "Learn the fundamentals of web development and start your journey as a developer.",
      date: "March 15, 2024",
      category: "Web Development"
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we write and maintain code.",
      date: "March 10, 2024",
      category: "Artificial Intelligence"
    },
    {
      id: 3,
      title: "Best Practices for Modern Web Design",
      excerpt: "Discover the latest trends and best practices in modern web design.",
      date: "March 5, 2024",
      category: "Design"
    }
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Our Blog</h1>
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.category}>{post.category}</div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.postMeta}>
              <span className={styles.date}>{post.date}</span>
              <button className={styles.readMore}>Read More</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
} 