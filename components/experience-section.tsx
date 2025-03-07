"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Trainee",
    company: "Techvation, Tiruchirappalli",
    period: "October 2024 - January 2025",
    description:
      "Gained hands-on experience in Next.js and TypeScript, building dynamic applications and improving code efficiency. Adapted to startup demands by engaging in both development and cold calling, developing a well-rounded skill set in tech and client interaction.",
    type: "work",
  },
  {
    id: 2,
    title: "Process Associate",
    company: "Tata Consultancy Services (TCS), Chennai",
    period: "April 2023 - December 2023",
    description:
      "Optimized data entry processes, reducing processing time by 30% and improving data accuracy. Streamlined communication channels between departments, enhancing collaboration and reducing response time by 25%. Implemented quality control measures, resulting in a 20% decrease in errors and improving overall workflow efficiency.",
    type: "work",
  },
  {
    id: 3,
    title: "MERN FullStack Developer Internship",
    company: "Self-Project",
    period: "Project-Based",
    description:
      "Developed a full-featured MERN stack application, including a dynamic shopping cart. Built a responsive front-end using React.js with state management through Redux. Implemented robust back-end services using Node.js and Express.js for seamless API integration. Utilized MongoDB to manage and store user data and product information efficiently.",
    type: "work",
  },
  {
    id: 4,
    title: "Bachelor of Computer Application",
    company: "Bharath College of Arts and Science, Thanjavur",
    period: "2019 - 2022",
    description:
      "Cumulative GPA: 7.8. Gained knowledge in HTML, CSS, JavaScript, React.js, and backend technologies, building a strong foundation in full-stack development.",
    type: "education",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: exp.id % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {exp.type === "work" ? (
                      <Briefcase className="h-5 w-5" />
                    ) : (
                      <GraduationCap className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-muted-foreground">{exp.company}</p>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
