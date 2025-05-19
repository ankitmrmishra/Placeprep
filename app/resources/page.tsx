"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Filter, BookOpen, Code, Brain, Building, Server, Users, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

// Mock data - would be replaced with actual API calls
const CATEGORIES = [
  { id: "dsa", name: "Data Structures & Algorithms", icon: Code },
  { id: "system-design", name: "System Design", icon: Server },
  { id: "behavioral", name: "Behavioral Questions", icon: Brain },
  { id: "company-specific", name: "Company Specific", icon: Building },
  { id: "interview-tips", name: "Interview Tips", icon: Users },
]

interface Resource {
  id: string
  title: string
  description: string
  category: string
  created_at: string
}

// Mock resources - would be replaced with actual API data
const mockResources: Resource[] = [
  {
    id: "1",
    title: "Mastering Binary Search Trees",
    description:
      "Learn how to implement, traverse, and optimize binary search trees for technical interviews. This comprehensive guide covers all the essential operations and common interview questions.",
    category: "dsa",
    created_at: "2023-05-15T10:30:00Z",
  },
  {
    id: "2",
    title: "System Design: Designing a URL Shortener",
    description:
      "A step-by-step guide to designing a scalable URL shortening service like bit.ly. Covers requirements gathering, API design, database schema, and scaling considerations.",
    category: "system-design",
    created_at: "2023-05-10T14:20:00Z",
  },
  {
    id: "3",
    title: "Behavioral Interview Preparation Guide",
    description:
      "Comprehensive guide to answering common behavioral questions using the STAR method. Includes example answers and templates for different scenarios.",
    category: "behavioral",
    created_at: "2023-05-05T09:15:00Z",
  },
  {
    id: "4",
    title: "Google Interview Process Explained",
    description:
      "An insider's guide to Google's interview process, including what to expect in each round, common questions, and tips from successful candidates.",
    category: "company-specific",
    created_at: "2023-04-28T11:45:00Z",
  },
  {
    id: "5",
    title: "Dynamic Programming: From Beginner to Expert",
    description:
      "Master dynamic programming with this comprehensive guide. Learn to identify DP problems and develop efficient solutions with step-by-step examples.",
    category: "dsa",
    created_at: "2023-04-22T16:30:00Z",
  },
  {
    id: "6",
    title: "Microservices Architecture Fundamentals",
    description:
      "Learn the core principles of microservices architecture, including service boundaries, communication patterns, and deployment strategies.",
    category: "system-design",
    created_at: "2023-04-18T13:20:00Z",
  },
]

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export default function ResourcesPage() {
  const [searchParams, setSearchParams] = useState(new URLSearchParams())
  const [resources, setResources] = useState<Resource[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    // Simulate API call
    const fetchResources = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        let filteredResources = [...mockResources]

        if (selectedCategory) {
          filteredResources = filteredResources.filter((resource) => resource.category === selectedCategory)
        }

        if (searchTerm) {
          const term = searchTerm.toLowerCase()
          filteredResources = filteredResources.filter(
            (resource) =>
              resource.title.toLowerCase().includes(term) || resource.description.toLowerCase().includes(term),
          )
        }

        setResources(filteredResources)
      } catch (error) {
        console.error("Error fetching resources:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResources()
  }, [selectedCategory, searchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would update the URL search params
  }

  const handleCategoryClick = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory("")
    } else {
      setSelectedCategory(category)
    }
  }

  const getCategoryIcon = (categoryId: string) => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId)
    if (!category) return BookOpen
    return category.icon
  }

  const getCategoryName = (categoryId: string) => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId)
    return category ? category.name : categoryId
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Resources</h1>
              <p className="mt-1 text-slate-300">
                Browse through our comprehensive collection of preparation materials
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
                Submit Resource <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-20 border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Filters</h2>

              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 rounded-full border-slate-200"
                  />
                </div>
                <Button type="submit" className="w-full mt-2 rounded-full">
                  Search
                </Button>
              </form>

              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <Filter size={16} className="mr-1" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={cn(
                          "w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                          selectedCategory === category.id
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "hover:bg-slate-100 text-slate-700",
                        )}
                      >
                        <Icon size={18} className="mr-2" />
                        <span>{category.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : resources.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {resources.map((resource) => {
                  const Icon = getCategoryIcon(resource.category)
                  return (
                    <motion.div
                      key={resource.id}
                      variants={itemVariants}
                      className="group relative bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-slate-100"
                    >
                      <Link href={`/resources/${resource.id}`} className="block p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {resource.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className="mb-3 bg-blue-50 text-blue-700 border-blue-100 flex w-fit items-center"
                            >
                              <Icon size={12} className="mr-1" />
                              {getCategoryName(resource.category)}
                            </Badge>
                            <p className="text-slate-600">{truncateText(resource.description, 150)}</p>
                          </div>
                        </div>
                      </Link>
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl pointer-events-none transition-colors duration-300"></div>
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl shadow-md p-10 text-center border border-slate-100">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={24} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">No resources found</h3>
                <p className="text-slate-600 mb-6">
                  {selectedCategory
                    ? `No resources found in the "${getCategoryName(selectedCategory)}" category.`
                    : "Try adjusting your filters or search term."}
                </p>
                {selectedCategory && (
                  <Button
                    onClick={() => handleCategoryClick(selectedCategory)}
                    variant="outline"
                    className="rounded-full"
                  >
                    Clear Category Filter
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
