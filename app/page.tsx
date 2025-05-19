"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Yash from "@/public/testimonial/yash.png";
import Aarif from "@/public/testimonial/aarif.png";
import Aamir from "@/public/testimonial/aamir.png";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle,
  FileCode,
  LayoutDashboard,
  Code,
  Clock,
  Star,
  Users,
  Zap,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

// Testimonial data
const testimonials = [
  {
    name: "Yash Tripathi",
    role: "Software Engineer at Google",
    image: Yash,
    content:
      "PrepPathway was instrumental in my journey to Google. The structured learning path and mock interviews gave me the confidence I needed to ace my technical rounds.",
    rating: 5,
  },
  {
    name: "Aarif Khan",
    role: "Frontend Developer at Meta",
    image: Aarif,
    content:
      "The system design resources are exceptional. I went from struggling with architecture questions to confidently explaining complex systems during my interviews.",
    rating: 5,
  },
  {
    name: "Aaamir Pathan",
    role: "Product Manager at Amazon",
    image: Aamir,
    content:
      "The behavioral interview preparation was a game-changer. I learned how to structure my responses and showcase my achievements effectively.",
    rating: 5,
  },
];

// Companies data
const companies = [
  "Google",
  "Meta",
  "Amazon",
  "Microsoft",
  "Apple",
  "Netflix",
  "Uber",
  "Airbnb",
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("dsa");
  const isMobile = useMobile();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0">
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient
                  id="radialGradient"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="url(#radialGradient)"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-20"></div>
        </div>

        {/* Navbar */}
        <header className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">
                  PrepPathway
                </span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="#features"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#resources"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Resources
                </Link>
                <Link
                  href="#testimonials"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="#pricing"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Log in
                </Link>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hidden sm:flex"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-24 sm:pb-40 flex flex-col items-center z-10">
          <motion.div
            style={{ opacity, scale }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full filter blur-[100px] opacity-20"
          />
          <motion.div
            style={{ opacity, scale }}
            className="absolute top-1/4 -right-10 w-60 h-60 bg-blue-500 rounded-full filter blur-[100px] opacity-20"
          />

          <Badge className="mb-5 bg-slate-800/50 text-slate-300 hover:bg-slate-800/70 backdrop-blur-sm border-slate-700">
            <Star className="h-3.5 w-3.5 mr-1" /> Trusted by engineers at top
            tech companies
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white tracking-tight"
          >
            Ace Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
              Placements
            </span>{" "}
            With Confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-center text-xl text-slate-300"
          >
            The premium platform with personalized learning paths,
            expert-crafted practice tests, and resources to help you land your
            dream job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/20 transition-all duration-200 hover:shadow-blue-500/30"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-full border-slate-700 text-slate-300 hover:bg-slate-800/50 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl blur opacity-30"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/image.png"
                width={1200}
                height={600}
                alt="Platform Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">Trusted by engineers from</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="text-slate-400 font-medium"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Premium Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Everything You Need To Succeed
            </h2>
            <p className="text-lg text-slate-600 mb-16">
              Our platform offers comprehensive tools and resources designed to
              help you excel in placement interviews.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Curated Resources",
                description:
                  "Access a vast library of study materials, interview questions, and coding challenges organized by topics and companies.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <FileCode className="h-6 w-6" />,
                title: "Practice Tests",
                description:
                  "Take mock interviews and practice tests that simulate real placement scenarios for technical and behavioral interviews.",
                color: "from-violet-500 to-violet-600",
              },
              {
                icon: <LayoutDashboard className="h-6 w-6" />,
                title: "Progress Tracking",
                description:
                  "Monitor your performance, identify strengths and weaknesses, and track your improvement over time.",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Expert Mentorship",
                description:
                  "Connect with industry professionals who provide personalized guidance and feedback on your preparation.",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "AI-Powered Insights",
                description:
                  "Receive intelligent recommendations and insights based on your performance and learning patterns.",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Company-Specific Prep",
                description:
                  "Access tailored preparation materials for specific companies and roles you're targeting.",
                color: "from-emerald-500 to-emerald-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-slate-200 to-slate-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-full bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section id="resources" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Learning Paths</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Learning Categories
            </h2>
            <p className="text-lg text-slate-600">
              Master the essential skills and knowledge required for successful
              placement interviews.
            </p>
          </div>

          <Tabs
            defaultValue="dsa"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3 h-14 p-1 bg-slate-100 rounded-full">
                <TabsTrigger
                  value="dsa"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                >
                  DSA
                </TabsTrigger>
                <TabsTrigger
                  value="system"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                >
                  System Design
                </TabsTrigger>
                <TabsTrigger
                  value="behavioral"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                >
                  Behavioral
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <TabsContent value="dsa" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Master Data Structures & Algorithms
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Our comprehensive DSA curriculum covers essential topics
                      that are frequently asked in technical interviews.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Array and String Manipulation",
                        "Graph Algorithms and Tree Traversals",
                        "Dynamic Programming Techniques",
                        "Sorting and Searching Algorithms",
                        "Time and Space Complexity Analysis",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-slate-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button className="mt-8 rounded-full" size="lg">
                      Explore DSA Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-md p-6 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-3 text-xs text-slate-500">
                          binary_search.js
                        </div>
                      </div>
                      <div className="font-mono p-4 bg-slate-900 text-slate-100 rounded-lg text-sm overflow-hidden">
                        <pre className="language-javascript">
                          <code>{`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="system" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      System Design Fundamentals
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Learn how to design scalable systems and tackle system
                      design interview questions with confidence.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Scalability and Load Balancing",
                        "Database Design and Caching",
                        "Microservices Architecture",
                        "API Design and Communication Patterns",
                        "Distributed Systems and Fault Tolerance",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-violet-600" />
                          </div>
                          <span className="text-slate-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button
                      className="mt-8 rounded-full bg-violet-600 hover:bg-violet-700"
                      size="lg"
                    >
                      Explore System Design Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                      <div className="w-full max-w-md p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center mb-4">
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="ml-3 text-xs text-slate-500">
                            binary_search.js
                          </div>
                        </div>
                        <div className="font-mono p-4 bg-slate-900 text-slate-100 rounded-lg text-sm overflow-hidden">
                          <pre className="language-javascript">
                            <code>{`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`}</code>
                          </pre>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent mix-blend-multiply"></div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="behavioral" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Ace Behavioral Interviews
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Prepare for behavioral questions and showcase your soft
                      skills effectively during interviews.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "STAR Method for Structured Responses",
                        "Leadership and Teamwork Examples",
                        "Conflict Resolution Scenarios",
                        "Career Motivation and Goals",
                        "Cultural Fit and Company Values",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-slate-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button
                      className="mt-8 rounded-full bg-amber-600 hover:bg-amber-700"
                      size="lg"
                    >
                      Explore Behavioral Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                      <div className="w-full max-w-md p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center mb-4">
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="ml-3 text-xs text-slate-500">
                            binary_search.js
                          </div>
                        </div>
                        <div className="font-mono p-4 bg-slate-900 text-slate-100 rounded-lg text-sm overflow-hidden">
                          <pre className="language-javascript">
                            <code>{`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`}</code>
                          </pre>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent mix-blend-multiply"></div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95%", label: "Success Rate" },
              { value: "10,000+", label: "Practice Questions" },
              { value: "500+", label: "Mock Interviews" },
              { value: "50+", label: "Company Profiles" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How PrepPathway Works
            </h2>
            <p className="text-lg text-slate-600">
              Our streamlined approach helps you prepare effectively and track
              your progress.
            </p>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block"></div>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    icon: <Code className="h-6 w-6" />,
                    title: "Learn & Practice",
                    description:
                      "Access structured learning materials and practice with hundreds of coding problems and interview questions.",
                    color: "bg-blue-500",
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Take Mock Tests",
                    description:
                      "Simulate real interview experiences with timed tests covering technical and behavioral questions.",
                    color: "bg-violet-500",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6" />,
                    title: "Track Progress",
                    description:
                      "Get detailed insights on your performance and focus on areas that need improvement.",
                    color: "bg-emerald-500",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-white border-2 border-slate-200 text-slate-900 mb-6">
                      <div
                        className={`absolute inset-0 ${step.color} rounded-full opacity-10`}
                      ></div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-lg text-slate-600">
              Join thousands of students who have successfully secured offers at
              top companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.59 4.59A2 2 0 1 1 11 8H8.5C8.5 10.5 10 12 12 13V15C9 14 5.5 12 5.5 8C5.5 6.18 6.14 4.5 7.23 3.23C8.32 1.96 9.86 1 11.5 1C13.14 1 14.68 1.96 15.77 3.23C16.86 4.5 17.5 6.18 17.5 8C17.5 12 14 14 11 15V13C13 12 15.5 10.5 15.5 8H13A2 2 0 1 1 14.41 4.59"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    width={48}
                    height={48}
                    alt={testimonial.name}
                    className="rounded-full mr-4 size-14 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
                <p className="text-slate-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg text-slate-600">
              Flexible pricing options to suit your preparation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$19",
                period: "per month",
                description:
                  "Perfect for beginners starting their preparation journey.",
                features: [
                  "Access to basic learning resources",
                  "100+ practice questions",
                  "Basic progress tracking",
                  "Community forum access",
                ],
                cta: "Get Started",
                popular: false,
                color: "border-slate-200 hover:border-slate-300",
              },
              {
                name: "Pro",
                price: "$49",
                period: "per month",
                description:
                  "Comprehensive preparation for serious candidates.",
                features: [
                  "All Basic features",
                  "1000+ practice questions",
                  "Mock interviews with feedback",
                  "Company-specific preparation",
                  "Advanced analytics and insights",
                ],
                cta: "Get Started",
                popular: true,
                color: "border-blue-200 hover:border-blue-300",
              },
              {
                name: "Enterprise",
                price: "$99",
                period: "per month",
                description:
                  "Complete solution for those aiming for top companies.",
                features: [
                  "All Pro features",
                  "Unlimited practice questions",
                  "1-on-1 mentorship sessions",
                  "Resume and portfolio review",
                  "Interview guarantee program",
                  "Lifetime access to resources",
                ],
                cta: "Contact Sales",
                popular: false,
                color: "border-slate-200 hover:border-slate-300",
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-8 border-2 transition-all duration-200",
                  plan.popular
                    ? "border-blue-500 shadow-xl shadow-blue-100"
                    : "border-slate-200 hover:border-slate-300"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "w-full rounded-full",
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Ace Your Placement Interviews?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join thousands of students who have successfully secured offers at
              top companies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="px-8 py-6 text-base font-medium rounded-full bg-white text-slate-900 hover:bg-slate-100"
              >
                Get Started for Free
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-medium rounded-full border-white/30 text-white hover:bg-white/10"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">
                PrepPathway
              </div>
              <p className="mb-4">
                The premium platform for placement preparation and career
                success.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DSA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    System Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Behavioral
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mock Interviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Company Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Licenses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-slate-800 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 PrepPathway. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <p>Designed with ❤️ for aspiring tech professionals</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
