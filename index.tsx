"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Code, Figma, Github, Linkedin, Mail, MenuIcon, Monitor, MoonIcon, SunIcon, X } from 'lucide-react'

const yellowGradientText = "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Abdi Koodhaa</h1>
            <nav className="hidden md:flex space-x-4">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`hover:text-primary transition-colors duration-300 ${
                    activeSection === section ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                      <a
                        key={section}
                        href={`#${section}`}
                        className="text-lg hover:text-primary transition-colors duration-300"
                        onClick={closeMenu}
                      >
                        {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <motion.section
          id="hero"
          className="py-20 bg-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-4xl font-bold mb-4 ${yellowGradientText}`}>Hello, I'm Abdi Koodhaa</h2>
            <p className="text-xl mb-8">Software Engineer & Graphic Designer</p>
            <Button>Download CV</Button>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-8 text-center ${yellowGradientText}`}>About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/placeholder.svg"
                  alt="Abdi Koodhaa"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg mb-4">
                  Hello! I'm Abdi Koodhaa, a passionate software engineer and graphic designer with a keen eye for detail and a love for creating beautiful, functional digital experiences.
                </p>
                <p className="text-lg mb-4">
                  With years of experience in both fields, I bring a unique perspective to every project, combining technical expertise with creative flair. I specialize in full-stack web development, mobile app design, and creating stunning visual identities for brands.
                </p>
                <p className="text-lg">
                  When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or sketching ideas for my next big project. I'm always eager to take on new challenges and push the boundaries of what's possible in the digital realm.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-8 text-center ${yellowGradientText}`}>My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                icon={<Code className="h-8 w-8" />}
                title="Software Engineering"
                description="Proficient in various programming languages and frameworks"
              />
              <SkillCard
                icon={<Figma className="h-8 w-8" />}
                title="Graphic Design"
                description="Creating visually appealing designs and user interfaces"
              />
              <SkillCard
                icon={<Monitor className="h-8 w-8" />}
                title="Web Development"
                description="Building responsive and interactive web applications"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-8 text-center ${yellowGradientText}`}>Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Project 1"
                description="A brief description of project 1"
                tags={['React', 'Node.js', 'MongoDB']}
              />
              <ProjectCard
                title="Project 2"
                description="A brief description of project 2"
                tags={['Python', 'Django', 'PostgreSQL']}
              />
              <ProjectCard
                title="Project 3"
                description="A brief description of project 3"
                tags={['Vue.js', 'Express', 'MySQL']}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 bg-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-8 ${yellowGradientText}`}>Get in Touch</h2>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-background py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 Abdi Koodhaa. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function SkillCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            {icon}
            <span className={`ml-2 ${yellowGradientText}`}>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ProjectCard({ title, description, tags }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className="h-full transition-transform duration-300 transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <CardTitle className={yellowGradientText}>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="outline">View Project</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardFooter>
      </Card>
    </motion.div>
  )
}