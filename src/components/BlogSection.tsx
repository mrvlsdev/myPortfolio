import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

interface Props {
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    title: "The Future of Web Development: What's Next?",
    excerpt:
      "Exploring upcoming trends in web development and how they'll shape the future of the internet.",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    title: "Optimizing React Performance",
    excerpt:
      "Learn advanced techniques for improving your React application's performance.",
    date: "2024-02-10",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    category: "React",
    readTime: "8 min read",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt:
      "A comprehensive guide to making your web applications accessible to everyone.",
    date: "2024-02-05",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "Accessibility",
    readTime: "6 min read",
  },
];

const BlogSection = ({ posts = defaultPosts }: Props) => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground">
            Thoughts on development, design, and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full bg-card/30 backdrop-blur-sm border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="group"
                    onClick={() => console.log(`Read ${post.title}`)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
