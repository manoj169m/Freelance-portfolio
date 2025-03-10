"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code, Palette, Layout } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroSection() {
  // Text animation variants with explicit type for parameter i
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Background blobs animation
  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 0.9, 0.7],
      rotate: [0, 15, 0],
      borderRadius: ["40%", "50%", "40%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse" // Corrected to a valid value
      }
    }
  };

  // Staggered icon appearance
  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5
      }
    }
  };

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  // Skills icons animation
  const skillsVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8
      }
    }
  };

  const skillItemVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate="animate"
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-2/3 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="max-w-3xl z-10">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="text-primary inline-block"
                animate={{
                  color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
                  transition: { duration: 8, repeat: Infinity }
                }}
              >
                Mano
              </motion.span>
            </motion.h1>
            
            <motion.h2
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
            >
              Creative Designer & Full-Stack Developer
            </motion.h2>
            
            <motion.p
  custom={2}
  initial="hidden"
  animate="visible"
  variants={textVariants}
  className="text-lg text-muted-foreground mb-8 max-w-2xl"
>
  I help turn your ideas into reality with  <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> custom websites</motion.span> that look great and work smoothly. I focus on creating websites that are<motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}> easy to use,</motion.span>  reflect your  <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}>unique brand</motion.span>, and help you connect with the people who matter most to  <motion.span animate={{
      color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
      transition: { duration: 8, repeat: Infinity }
    }}>your business.</motion.span>
</motion.p>



            
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="relative overflow-hidden group">
                  <Link href="#contact">
                    <motion.span
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    Let&apos;s Collaborate
                  </Link> 
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild className="relative overflow-hidden">
                  <Link href="#projects">
                    <motion.span
                      className="absolute inset-0 bg-primary/10"
                      initial={{ y: "-100%" }}
                      whileHover={{ y: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    Explore Portfolio
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={iconContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-6"
            >
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2, rotate: 5, y: -5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/manoj169m" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2, rotate: -5, y: -5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.linkedin.com/in/mano-bharathi-b-157982223/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2, rotate: 5, y: -5 }} whileTap={{ scale: 0.9 }}>
                <Link href="mailto:manoj16935@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side animations */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 lg:mt-0 z-10"
          >
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0"
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    transition: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="w-full h-full rounded-full border-4 border-dashed border-primary/30"
                />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 0.8, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    rotate: -360,
                    transition: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="w-full h-full rounded-full border-4 border-dotted border-secondary/40"
                />
              </motion.div>
              
              {/* Central animated sphere */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: 1,
                  duration: 1
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-primary/30 backdrop-blur-sm bg-background/50 shadow-xl">
                  <motion.div
                    animate={{ 
                      background: [
                        "radial-gradient(circle at 30% 40%, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                        "radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.1), rgba(124, 58, 237, 0.1))",
                        "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2), rgba(124, 58, 237, 0.1), rgba(59, 130, 246, 0.1))",
                        "radial-gradient(circle at 30% 40%, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))"
                      ],
                      transition: { duration: 8, repeat: Infinity }
                    }}
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xl lg:text-2xl font-bold text-primary">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="text-center"
                    >
                      <motion.span
                        animate={{
                          color: ["#7c3aed", "#3b82f6", "#ec4899", "#7c3aed"],
                          transition: { duration: 8, repeat: Infinity }
                        }}
                      >
                        Freelance <br>
                        </br>
                        Web developer
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating skill icons */}
              <motion.div
                variants={skillsVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0"
              >
                <motion.div
                  variants={skillItemVariants}
                  className="absolute top-0 right-0"
                  animate={{
                    y: [0, -15, 0],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  <div className="w-12 h-12 bg-background rounded-full shadow-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </motion.div>
                
                <motion.div
                  variants={skillItemVariants}
                  className="absolute bottom-10 right-20"
                  animate={{
                    y: [0, 15, 0],
                    transition: { duration: 4, repeat: Infinity, delay: 0.5 }
                  }}
                >
                  <div className="w-12 h-12 bg-background rounded-full shadow-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-secondary" />
                  </div>
                </motion.div>
                
                <motion.div
                  variants={skillItemVariants}
                  className="absolute bottom-0 left-10"
                  animate={{
                    y: [0, -15, 0],
                    transition: { duration: 3.5, repeat: Infinity, delay: 0.8 }
                  }}
                >
                  <div className="w-12 h-12 bg-background rounded-full shadow-lg flex items-center justify-center">
                    <Layout className="h-6 w-6 text-accent" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="flex justify-center mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="animate-bounce"
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
