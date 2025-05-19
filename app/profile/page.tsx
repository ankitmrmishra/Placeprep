"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, ImageIcon, Shield, Bell, Key, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Profile {
  id: string
  full_name: string | null
  avatar_url: string | null
  email: string
  is_admin: boolean
}

// Mock profile data - would be replaced with actual API data
const mockProfile: Profile = {
  id: "user123",
  full_name: "Jane Smith",
  avatar_url: null,
  email: "jane.smith@example.com",
  is_admin: true,
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    full_name: "",
    avatar_url: "",
  })

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setProfile(mockProfile)
        setFormData({
          full_name: mockProfile.full_name || "",
          avatar_url: mockProfile.avatar_url || "",
        })
      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setProfile({
        ...profile!,
        full_name: formData.full_name,
        avatar_url: formData.avatar_url,
      })
      // Show success message
      alert("Profile updated successfully")
    } catch (error) {
      console.error("Error updating profile:", error)
      // Show error message
      alert("Failed to update profile")
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-40 mb-8" />
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                <Skeleton className="h-24 w-24 rounded-full mb-4 md:mb-0" />
                <div className="md:ml-6">
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-6 w-16" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-32 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Your Profile</h1>
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-slate-100 shadow-md mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  {profile?.avatar_url ? (
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={profile.avatar_url || "/placeholder.svg"} alt={profile.full_name || "User"} />
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-bold">
                        {getInitials(profile.full_name || profile.email)}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xl font-bold">
                      {getInitials(profile.full_name || profile.email)}
                    </div>
                  )}
                </div>
                <div className="md:ml-6">
                  <h2 className="text-2xl font-bold text-slate-900">{profile?.full_name || "Welcome!"}</h2>
                  <p className="text-slate-600">{profile?.email}</p>
                  {profile?.is_admin && (
                    <Badge className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                      <Shield className="h-3 w-3 mr-1" />
                      Admin
                    </Badge>
                  )}
                </div>
              </div>

              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                  <TabsTrigger value="profile">Profile Information</TabsTrigger>
                  <TabsTrigger value="settings">Account Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="full_name"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleInputChange}
                          className="pl-10 border-slate-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          value={profile?.email || ""}
                          disabled
                          className="pl-10 bg-slate-50 text-slate-500 border-slate-200"
                        />
                      </div>
                      <p className="text-xs text-slate-500">Email cannot be changed</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="avatar_url">Avatar URL</Label>
                      <div className="relative">
                        <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="avatar_url"
                          name="avatar_url"
                          value={formData.avatar_url}
                          onChange={handleInputChange}
                          className="pl-10 border-slate-200"
                          placeholder="https://example.com/avatar.jpg"
                        />
                      </div>
                      <p className="text-xs text-slate-500">Enter a URL for your profile picture</p>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={
                          isSaving ||
                          (formData.full_name === profile?.full_name && formData.avatar_url === profile?.avatar_url)
                        }
                        className="rounded-full"
                      >
                        {isSaving ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="settings">
                  <div className="space-y-6">
                    <div className="border border-slate-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                            <Key size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">Change Password</h4>
                            <p className="text-sm text-slate-500">Update your password for better security</p>
                          </div>
                        </div>
                        <Button variant="outline" className="rounded-full">
                          Change
                        </Button>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                            <Bell size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">Notification Preferences</h4>
                            <p className="text-sm text-slate-500">Manage how you receive notifications</p>
                          </div>
                        </div>
                        <Button variant="outline" className="rounded-full">
                          Configure
                        </Button>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-4 hover:border-red-200 hover:bg-red-50/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3">
                            <Trash2 size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">Delete Account</h4>
                            <p className="text-sm text-slate-500">Permanently delete your account and all your data</p>
                          </div>
                        </div>
                        <Button variant="destructive" className="rounded-full">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-100 shadow-md">
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
                <CardDescription>Track your learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-700">Tests Completed</span>
                      <span className="text-sm font-medium text-slate-900">12</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    <div className="mt-1 flex justify-between text-xs text-slate-500">
                      <span>0</span>
                      <span>20</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-700">Resources Read</span>
                      <span className="text-sm font-medium text-slate-900">18</span>
                    </div>
                    <Progress value={45} className="h-2" indicatorClassName="bg-violet-600" />
                    <div className="mt-1 flex justify-between text-xs text-slate-500">
                      <span>0</span>
                      <span>40</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-700">Average Score</span>
                      <span className="text-sm font-medium text-slate-900">72%</span>
                    </div>
                    <Progress value={72} className="h-2" indicatorClassName="bg-emerald-600" />
                    <div className="mt-1 flex justify-between text-xs text-slate-500">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-md">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Badges and milestones you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "First Test", icon: "🏆", unlocked: true },
                    { name: "Perfect Score", icon: "🎯", unlocked: true },
                    { name: "Fast Learner", icon: "⚡", unlocked: true },
                    { name: "Problem Solver", icon: "🧩", unlocked: false },
                    { name: "Coding Expert", icon: "💻", unlocked: false },
                    { name: "Interview Ready", icon: "🚀", unlocked: false },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl ${
                        badge.unlocked ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-400 opacity-60"
                      }`}
                    >
                      <span className="text-2xl mb-1">{badge.icon}</span>
                      <span className="text-xs font-medium text-center">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
