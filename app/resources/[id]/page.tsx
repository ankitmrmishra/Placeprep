"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Bookmark, Share, Clock, Calendar, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Resource {
  id: string
  title: string
  description: string
  content: string
  category: string
  created_at: string
  created_by: string
  profiles: {
    full_name: string | null
    avatar_url?: string | null
  }
}

// Mock resource data - would be replaced with actual API data
const mockResource: Resource = {
  id: "1",
  title: "Mastering Binary Search Trees",
  description:
    "Learn how to implement, traverse, and optimize binary search trees for technical interviews. This comprehensive guide covers all the essential operations and common interview questions.",
  content: `
    <h2>Introduction to Binary Search Trees</h2>
    <p>A Binary Search Tree (BST) is a node-based binary tree data structure that has the following properties:</p>
    <ul>
      <li>The left subtree of a node contains only nodes with keys less than the node's key.</li>
      <li>The right subtree of a node contains only nodes with keys greater than the node's key.</li>
      <li>Both the left and right subtrees must also be binary search trees.</li>
    </ul>
    
    <h2>Basic Operations</h2>
    <h3>Insertion</h3>
    <p>To insert a new node into a BST, we compare the key of the new node with the root. If the key is less than the root, we recursively insert it into the left subtree. If the key is greater than the root, we recursively insert it into the right subtree.</p>
    
    <pre><code>
    function insert(root, key) {
      if (root === null) {
        return new Node(key);
      }
      
      if (key < root.key) {
        root.left = insert(root.left, key);
      } else if (key > root.key) {
        root.right = insert(root.right, key);
      }
      
      return root;
    }
    </code></pre>
    
    <h3>Search</h3>
    <p>To search for a key in a BST, we compare the key with the root. If the key is equal to the root, we return the root. If the key is less than the root, we recursively search in the left subtree. If the key is greater than the root, we recursively search in the right subtree.</p>
    
    <pre><code>
    function search(root, key) {
      if (root === null || root.key === key) {
        return root;
      }
      
      if (key < root.key) {
        return search(root.left, key);
      }
      
      return search(root.right, key);
    }
    </code></pre>
    
    <h2>Common Interview Questions</h2>
    <ol>
      <li>Validate if a binary tree is a BST</li>
      <li>Find the kth smallest element in a BST</li>
      <li>Convert a sorted array to a balanced BST</li>
      <li>Find the lowest common ancestor of two nodes in a BST</li>
    </ol>
    
    <h2>Time Complexity Analysis</h2>
    <p>The time complexity of BST operations depends on the height of the tree:</p>
    <ul>
      <li>Search: O(h) where h is the height of the tree</li>
      <li>Insert: O(h)</li>
      <li>Delete: O(h)</li>
    </ul>
    <p>In the worst case, when the tree is skewed, the height can be O(n), making the operations O(n). However, for a balanced BST, the height is O(log n), making the operations O(log n).</p>
  `,
  category: "dsa",
  created_at: "2023-05-15T10:30:00Z",
  created_by: "user123",
  profiles: {
    full_name: "Jane Smith",
    avatar_url: null,
  },
}

// Mock related resources
const relatedResources = [
  {
    id: "5",
    title: "Advanced Sorting Algorithms",
    description: "Learn about advanced sorting techniques beyond the basics like quicksort and mergesort.",
    category: "dsa",
  },
  {
    id: "6",
    title: "Graph Algorithms Explained",
    description: "A comprehensive guide to graph algorithms including BFS, DFS, Dijkstra, and more.",
    category: "dsa",
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default function ResourceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [resource, setResource] = useState<Resource | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchResource = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setResource(mockResource)
      } catch (error) {
        console.error("Error fetching resource:", error)
        setError("Failed to load resource. It may not exist or you may not have permission to view it.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchResource()
  }, [id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
            <div className="p-8">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <div className="flex items-center mb-6">
                <Skeleton className="h-6 w-24 mr-4" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-2/3 mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-1/3 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !resource) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Resource Not Found</h2>
            <p className="text-slate-600 mb-6">{error || "The resource you are looking for does not exist."}</p>
            <Link href="/resources">
              <Button className="rounded-full">Back to Resources</Button>
            </Link>
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
          <div className="flex flex-col">
            <Link
              href="/resources"
              className="inline-flex items-center text-slate-300 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={18} className="mr-1" />
              Back to Resources
            </Link>
            <h1 className="text-3xl font-bold text-white mb-4">{resource.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border-blue-500/30">
                {resource.category.toUpperCase()}
              </Badge>
              <div className="flex items-center text-slate-300">
                <Calendar size={16} className="mr-1" />
                <span>{formatDate(resource.created_at)}</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Clock size={16} className="mr-1" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={resource.profiles.avatar_url || ""} alt={resource.profiles.full_name || ""} />
                    <AvatarFallback className="bg-blue-100 text-blue-700">
                      {resource.profiles.full_name
                        ? resource.profiles.full_name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-slate-900">{resource.profiles.full_name || "Anonymous"}</p>
                    <p className="text-sm text-slate-500">Content Creator</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Bookmark size={16} className="mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Share size={16} className="mr-1" />
                    Share
                  </Button>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-8">{resource.description}</p>

              <div className="prose prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none max-w-none">
                <div dangerouslySetInnerHTML={{ __html: resource.content }} />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Related Resources</h3>
              <Link
                href="/resources"
                className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium"
              >
                View all resources <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedResources.map((related) => (
                <div
                  key={related.id}
                  className="group relative bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-all"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-slate-600 mb-4">{related.description}</p>
                  <Link href={`/resources/${related.id}`}>
                    <Button variant="outline" size="sm" className="rounded-full">
                      View Resource
                    </Button>
                  </Link>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl pointer-events-none transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
