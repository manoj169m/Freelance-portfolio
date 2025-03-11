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
  src="/mano.jpg"
  alt="Profile"
  width={500}  // Define a width for the image
  height={300} // Define a height for the image
  style={{ objectFit: 'cover' }} // Apply objectFit using the style prop
  priority  // Optional: Preload the image for better performance
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
            <p className="text-muted-foreground mb-6 text-lg ">
  I'm a results-driven freelance <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> web developer </motion.span> specializing in crafting <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> high-performance websites </motion.span> and applications. With a keen eye for design and a passion for clean code, I help businesses and startups establish a strong online presence.
</p>
<p className="text-muted-foreground mb-8 text-lg">
  I help you grow your <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> business </motion.span> with a powerful online presence. Whether it’s a <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> landing page </motion.span>, dynamic <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> web app </motion.span>, or a <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> website revamp </motion.span>, I create custom solutions that drive growth and attract customers.
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
