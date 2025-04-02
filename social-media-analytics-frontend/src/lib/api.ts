import axios from "axios"
import type { User, Post } from "./types"
import { mockUsers, mockPosts } from "./mock-data"

// Create an axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})


export async function fetchUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockUsers
}

export async function fetchUser(id: string): Promise<User> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  const user = mockUsers.find((user) => user.id === id)

  if (!user) {
    throw new Error(`User with ID ${id} not found`)
  }

  return user
}

export async function fetchPosts(): Promise<Post[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 700))
  return mockPosts
}

export async function fetchUserPosts(userId: string): Promise<Post[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockPosts.filter((post) => post.userId === userId)
}

