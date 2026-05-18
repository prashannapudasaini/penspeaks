import BlogCard from './BlogCard';

export default function BlogGrid() {
  const blogs = [
    { id: 1, title: 'The Architecture of Solitude', category: 'Philosophy', date: 'Oct 12', readTime: '6 min' },
    { id: 2, title: 'Echoes of the Modern Muse', category: 'Poetry', date: 'Oct 08', readTime: '3 min' },
    { id: 3, title: 'Rethinking Digital Minimalism', category: 'Society', date: 'Oct 01', readTime: '8 min' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}