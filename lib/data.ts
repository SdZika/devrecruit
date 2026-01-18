export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Built a scalable e-commerce solution with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "Developed a comprehensive patient management system with HIPAA compliance",
    tech: ["Vue.js", "Python", "MongoDB", "Docker"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    description:
      "Created real-time analytics dashboard for financial data visualization",
    tech: ["Angular", "Java", "MySQL", "Kafka"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description:
      "iOS and Android app with secure payment processing and biometric authentication",
    tech: ["React Native", "Firebase", "Stripe", "AWS"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "AI-Powered Recruitment Platform",
    description:
      "Machine learning platform for candidate matching and automated screening",
    tech: ["Python", "TensorFlow", "React", "Redis"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Enterprise CRM Solution",
    description:
      "Custom CRM system with advanced reporting and integration capabilities",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Kubernetes"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];
