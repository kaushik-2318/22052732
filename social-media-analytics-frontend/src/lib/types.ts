export interface User {
  id: string
  name: string
  email: string
  username: string
}

export interface Comment {
  id: string
  postId: string
  name: string
  email: string
  body: string
}

export interface Post {
  id: string
  userId: string
  title: string
  body: string
  createdAt: string
  comments: Comment[]
}

