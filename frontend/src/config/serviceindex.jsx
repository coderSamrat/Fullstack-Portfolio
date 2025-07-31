import { Layers, Monitor, Palette, Server } from "lucide-react";


export const services = [
      {
            title: "Web Designing",
            description: "Creating visually appealing and user-friendly website designs",
            icon: <Palette className="w-8 h-8 text-primary" />,
            features: [
                  "UI/UX Design",
                  "Responsive Layouts",
                  "Modern Aesthetics",
                  "Brand Consistency"
            ]
      },
      {
            title: "Frontend Development",
            description: "Building interactive and responsive user interfaces",
            icon: <Monitor className="w-8 h-8 text-primary" />,
            features: [
                  "ReactJS Development",
                  "JavaScript ES6+",
                  "Tailwind CSS",
                  "Component Libraries"
            ]
      },
      {
            title: "Backend Development",
            description: "Developing robust server-side applications and APIs",
            icon: <Server className="w-8 h-8 text-primary" />,
            features: [
                  "NodeJS & Express",
                  "RESTful APIs",
                  "Database Design",
                  "Authentication"
            ]
      },
      {
            title: "MERN Stack Development",
            description: "Full-stack web applications using MongoDB, Express, React, and Node.js",
            icon: <Layers className="w-8 h-8 text-primary" />,
            features: [
                  "Complete Web Apps",
                  "Real-time Features",
                  "Scalable Architecture",
                  "Modern Tech Stack"
            ]
      }
];