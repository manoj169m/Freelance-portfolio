"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl md:text-xl">
            Have a project that you think I can help with? Let's make it happen! Whether you're looking for a
            stunning website, a web application, or a digital transformation, I'm here to help. 
            Shoot me an <motion.span animate={{
              color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
              transition: { duration: 8, repeat: Infinity }
            }}><a href="mailto:manoj16935@gmail.com">email</a></motion.span> or give me a <motion.span animate={{
              color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
              transition: { duration: 8, repeat: Infinity }
            }}><a href="tel:+919080536574">call</a></motion.span>—let's get started! You can also find me on <motion.span animate={{
              color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
              transition: { duration: 8, repeat: Infinity }
            }}><a href="https://www.linkedin.com/in/mano-bharathi-b-157982223/" target="_blank">LinkedIn</a></motion.span>!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
