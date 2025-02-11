import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar: string;
  platform: string;
}

interface Props {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    content:
      "One of the most talented developers I've worked with. Delivered our project ahead of schedule with exceptional quality.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    platform: "LinkedIn",
  },
  {
    content:
      "Incredible attention to detail and a true professional. The web application exceeded our expectations.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    platform: "Clutch",
  },
  {
    content:
      "Outstanding work on our e-commerce platform. The UI is beautiful and the performance improvements are remarkable.",
    author: "Emily Rodriguez",
    role: "CTO, ShopWave",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    platform: "Twitter",
  },
];

const TestimonialsSection = ({ testimonials = defaultTestimonials }: Props) => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground">What people say about my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card hover:shadow-lg transition-shadow duration-300">
                <Quote className="w-10 h-10 text-primary/40 mb-4" />
                <p className="text-lg mb-6 text-card-foreground">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary mt-1">
                      via {testimonial.platform}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
