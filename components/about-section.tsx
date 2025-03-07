"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

const skills = {
  design: ["UI/UX Design", "Figma", "Photoshop"],
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "MongoDB", "MySQL", "REST API"],
};

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/mano.jpg" // Corrected image path
                alt="Profile"
                layout="fill" // Use layout="fill" for responsive images
                objectFit="cover" // Ensures the image covers the entire container
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Freelance Web Developer</h3>
            <p className="text-muted-foreground mb-6">
  I&#39;m a results-driven freelance web developer specializing in crafting high-performance websites and
  applications. With a keen eye for design and a passion for clean code, I help businesses and startups
  establish a strong online presence.
</p>

            <p className="text-muted-foreground mb-8">
              Whether you need a stunning landing page, a dynamic web application, or a complete website revamp, I
              provide tailored solutions to meet your needs. My expertise spans modern front-end frameworks, intuitive
              UI/UX design, and scalable backend architectures.
            </p>

            <Card className="p-6">
              <Tabs defaultValue="design">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                </TabsList>
                <TabsContent value="design" className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.design.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="frontend" className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="backend" className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
