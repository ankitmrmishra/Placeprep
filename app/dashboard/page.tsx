"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen,
  FileText,
  BarChart,
  Award,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  ChevronRight,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface DashboardStats {
  totalResources: number
  totalTests: number
  testsCompleted: number
  avgScore: number
}

interface RecentActivity {
  id: string
  type: "test_attempt" | "resource_view"
  title: string
  date: string
  score?: number
  maxScore?: number
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<DashboardStats>({
    totalResources: 0,
    totalTests: 0,
    testsCompleted: 0,
    avgScore: 0,
  })
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        setStats({
          totalResources: 120,
          totalTests: 45,
          testsCompleted: 12,
          avgScore: 78,
        })

        setRecentActivity([
          {
            id: "1",
            type: "test_attempt",
            title: "Data Structures Interview Test",
            date: "May 15, 2023",
            score: 85,
            maxScore: 100,
          },
          {
            id: "2",
            type: "resource_view",
            title: "System Design: Designing a URL Shortener",
            date: "May 12, 2023",
          },
          {
            id: "3",
            type: "test_attempt",
            title: "Behavioral Questions Mock",
            date: "May 10, 2023",
            score: 90,
            maxScore: 100,
          },
          {
            id: "4",
            type: "resource_view",
            title: "Dynamic Programming: From Beginner to Expert",
            date: "May 8, 2023",
          },
        ])
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Skeleton className="h-8 w-40 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>
            <div className="flex space-x-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 rounded-2xl" />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Skeleton className="h-96 lg:col-span-2 rounded-2xl" />
            <Skeleton className="h-96 rounded-2xl" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="mt-1 text-slate-300">Track your progress and continue your preparation journey</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
              <Link href="/resources">
                <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100">Browse Resources</Button>
              </Link>
              <Link href="/tests">
                <Button
                  variant="outline"
                  className="rounded-full border-slate-700 text-slate-300 hover:bg-slate-800/50"
                >
                  Take a Test
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          <motion.div variants={itemVariants}>
            <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500">Total Resources</p>
                    <h2 className="text-2xl font-bold text-slate-900">{stats.totalResources}</h2>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                    <FileText size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500">Available Tests</p>
                    <h2 className="text-2xl font-bold text-slate-900">{stats.totalTests}</h2>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Award size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500">Tests Completed</p>
                    <h2 className="text-2xl font-bold text-slate-900">{stats.testsCompleted}</h2>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-slate-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <BarChart size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500">Average Score</p>
                    <h2 className="text-2xl font-bold text-slate-900">{stats.avgScore}%</h2>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-slate-100 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {recentActivity.length > 0 ? (
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex justify-between items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center">
                          {activity.type === "test_attempt" ? (
                            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                              <FileText size={18} />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <BookOpen size={18} />
                            </div>
                          )}
                          <div className="ml-4">
                            <p className="font-medium text-slate-900">{activity.title}</p>
                            <div className="flex items-center text-sm text-slate-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{activity.date}</span>
                              {activity.type === "test_attempt" && (
                                <div className="flex items-center ml-2">
                                  <Award className="h-4 w-4 mr-1 text-amber-500" />
                                  <span>
                                    {activity.score} / {activity.maxScore} (
                                    {Math.round(((activity.score || 0) / (activity.maxScore || 1)) * 100)}%)
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-600">No recent activity found</p>
                    <p className="text-sm text-slate-500 mt-1">Take tests to track your progress</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-slate-100 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Upcoming Tests</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Data Structures Interview Test",
                      duration: "60 minutes",
                      badge: "Recommended",
                    },
                    {
                      title: "System Design Fundamentals",
                      duration: "45 minutes",
                    },
                    {
                      title: "Behavioral Questions Mock",
                      duration: "30 minutes",
                    },
                  ].map((test, index) => (
                    <div
                      key={index}
                      className="group relative border border-slate-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-semibold text-slate-900">{test.title}</h4>
                            {test.badge && (
                              <Badge className="ml-2 bg-blue-100 text-blue-700 hover:bg-blue-200">{test.badge}</Badge>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-slate-500 mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{test.duration}</span>
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Zap className="h-4 w-4 text-amber-500" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button size="sm" className="w-full rounded-full">
                          Start Test
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Card className="border-slate-100 shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-bold">Your Progress</CardTitle>
                <div className="flex items-center text-emerald-600 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>Improving</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Data Structures & Algorithms",
                    progress: 65,
                    color: "bg-blue-600",
                  },
                  {
                    title: "System Design",
                    progress: 40,
                    color: "bg-violet-600",
                  },
                  {
                    title: "Behavioral Questions",
                    progress: 80,
                    color: "bg-emerald-600",
                  },
                ].map((category, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-4">
                    <h4 className="text-sm font-medium text-slate-700">{category.title}</h4>
                    <div className="mt-2">
                      <Progress
                        value={category.progress}
                        className="h-2 bg-slate-100"
                        indicatorClassName={category.color}
                      />
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="text-xs text-slate-500">{category.progress}% completed</p>
                      <Link
                        href="#"
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        Continue <ChevronRight className="h-3 w-3 ml-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
