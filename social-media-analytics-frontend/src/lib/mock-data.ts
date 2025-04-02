import type { User, Post, Comment } from "./types"

// Mock users data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: "3",
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: "4",
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: "5",
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
]

// Mock comments data
const mockComments: Comment[] = [
  {
    id: "1",
    postId: "1",
    name: "Eliseo Gardner",
    email: "Eliseo@gardner.biz",
    body: "This is amazing! I've been looking for something like this for a while. The design is so clean and intuitive.",
  },
  {
    id: "2",
    postId: "1",
    name: "Jayne Kuhic",
    email: "Jayne_Kuhic@sydney.com",
    body: "I agree with Eliseo. The UI is fantastic and the functionality is exactly what I needed. Great job!",
  },
  {
    id: "3",
    postId: "1",
    name: "Nikita Garfield",
    email: "Nikita@garfield.biz",
    body: "This is a game-changer for our team. We've been struggling with our workflow, but this solves so many of our problems.",
  },
  {
    id: "4",
    postId: "2",
    name: "Lew Alysha",
    email: "Lew@alysha.tv",
    body: "I'm not sure if this is the right solution for us. We might need something more customizable for our specific needs.",
  },
  {
    id: "5",
    postId: "2",
    name: "Hayden Althea",
    email: "Hayden@althea.biz",
    body: "I see your point, Lew, but I think with a few tweaks this could work really well for our team. Let's discuss it more.",
  },
  {
    id: "6",
    postId: "3",
    name: "Presley Mueller",
    email: "Presley.Mueller@myrl.com",
    body: "This is exactly what I've been looking for! The interface is so intuitive and the features are comprehensive.",
  },
  {
    id: "7",
    postId: "3",
    name: "Dallas Prosacco",
    email: "Dallas_Prosacco@gmail.com",
    body: "I'm having some trouble with the mobile version. Is anyone else experiencing lag on smaller screens?",
  },
  {
    id: "8",
    postId: "4",
    name: "Mallory Kunze",
    email: "Mallory_Kunze@gmail.com",
    body: "This is a great start, but I think there are a few features missing that would make it perfect for our use case.",
  },
  {
    id: "9",
    postId: "5",
    name: "Meghan Littel",
    email: "Meghan_Littel@gmail.com",
    body: "I'm impressed with how fast this loads even with a lot of data. The performance optimization is excellent.",
  },
  {
    id: "10",
    postId: "5",
    name: "Carmen Keeling",
    email: "Carmen_Keeling@gmail.com",
    body: "I agree with Meghan. The performance is stellar, and the UI is beautiful. Great work on this project!",
  },
  {
    id: "11",
    postId: "6",
    name: "Veronica Goodwin",
    email: "Veronica_Goodwin@gmail.com",
    body: "I've been using this for a week now and it's significantly improved my workflow. Highly recommended!",
  },
  {
    id: "12",
    postId: "7",
    name: "Oswald Vandervort",
    email: "Oswald.Vandervort@gmail.com",
    body: "The dark mode is a nice touch. It makes it much easier on the eyes when working late at night.",
  },
  {
    id: "13",
    postId: "8",
    name: "Leanne Schroeder",
    email: "Leanne_Schroeder@gmail.com",
    body: "I'm finding the navigation a bit confusing. It would be helpful to have more clear section headers.",
  },
  {
    id: "14",
    postId: "9",
    name: "Glenna Reichert",
    email: "Glenna_Reichert@gmail.com",
    body: "This is exactly what our team needed. The collaboration features are especially useful for our remote setup.",
  },
  {
    id: "15",
    postId: "10",
    name: "Kurtis Weissnat",
    email: "Kurtis_Weissnat@gmail.com",
    body: "I'm impressed with the attention to detail in this design. Every interaction feels polished and intentional.",
  },
]

// Generate dates for the last 30 days
function getRandomDate(daysAgo: number) {
  const date = new Date()
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo))
  return date.toISOString()
}

// Mock posts data with more comments
export const mockPosts: Post[] = [
  {
    id: "1",
    userId: "1",
    title: "How to Build a Modern UI with React and Tailwind CSS",
    body: "In this comprehensive guide, I'll walk you through the process of creating beautiful, responsive user interfaces using React and Tailwind CSS. We'll cover component design, responsive layouts, and performance optimization techniques that will take your frontend skills to the next level.",
    createdAt: getRandomDate(2),
    comments: mockComments.filter((comment) => comment.postId === "1"),
  },
  {
    id: "2",
    userId: "1",
    title: "The Future of Web Development: What to Expect in 2025",
    body: "Web development is evolving at a rapid pace. In this post, I explore the emerging trends that will shape the industry in the coming years, from AI-assisted coding to new frameworks and tools that will revolutionize how we build for the web.",
    createdAt: getRandomDate(5),
    comments: mockComments.filter((comment) => comment.postId === "2"),
  },
  {
    id: "3",
    userId: "2",
    title: "Optimizing React Performance: Advanced Techniques",
    body: "Is your React application feeling sluggish? In this deep dive, I share advanced optimization strategies that have helped me improve rendering performance by up to 60% in complex applications. Learn about memoization, code splitting, and when to use custom hooks for better performance.",
    createdAt: getRandomDate(1),
    comments: mockComments.filter((comment) => comment.postId === "3"),
  },
  {
    id: "4",
    userId: "2",
    title: "Building Accessible Web Applications: A Complete Guide",
    body: "Accessibility is not just a nice-to-have feature—it's essential. This guide covers everything from semantic HTML to ARIA attributes, keyboard navigation, and testing tools that will help you create web applications that everyone can use, regardless of ability.",
    createdAt: getRandomDate(7),
    comments: mockComments.filter((comment) => comment.postId === "4"),
  },
  {
    id: "5",
    userId: "3",
    title: "From Junior to Senior Developer: Lessons Learned",
    body: "My journey from a junior developer to a senior role taught me valuable lessons about code quality, communication, and career growth. In this post, I share the most important insights that helped me advance in my career and become a more effective developer.",
    createdAt: getRandomDate(3),
    comments: mockComments.filter((comment) => comment.postId === "5"),
  },
  {
    id: "6",
    userId: "3",
    title: "State Management in 2025: Beyond Redux and Context",
    body: "State management continues to evolve in the React ecosystem. This post explores newer alternatives to traditional solutions like Redux, including atomic state management, server components, and other approaches that simplify how we handle application state.",
    createdAt: getRandomDate(10),
    comments: mockComments.filter((comment) => comment.postId === "6"),
  },
  {
    id: "7",
    userId: "4",
    title: "The Complete Guide to CSS Grid and Flexbox",
    body: "Modern CSS layout techniques have transformed how we design web interfaces. This comprehensive guide covers everything you need to know about CSS Grid and Flexbox, with practical examples and tips for creating complex layouts with clean, maintainable code.",
    createdAt: getRandomDate(15),
    comments: mockComments.filter((comment) => comment.postId === "7"),
  },
  {
    id: "8",
    userId: "4",
    title: "Testing React Applications: Best Practices",
    body: "Effective testing is crucial for maintaining a healthy codebase. Learn how to set up a comprehensive testing strategy for your React applications using Jest, React Testing Library, and Cypress. This guide covers unit tests, integration tests, and end-to-end testing approaches.",
    createdAt: getRandomDate(8),
    comments: mockComments.filter((comment) => comment.postId === "8"),
  },
  {
    id: "9",
    userId: "5",
    title: "Microservices vs. Monoliths: Choosing the Right Architecture",
    body: "The debate between microservices and monolithic architectures continues to divide the development community. This post examines the pros and cons of each approach, with real-world examples to help you make the right choice for your next project.",
    createdAt: getRandomDate(4),
    comments: mockComments.filter((comment) => comment.postId === "9"),
  },
  {
    id: "10",
    userId: "5",
    title: "Getting Started with TypeScript: A Practical Introduction",
    body: "TypeScript has become an essential tool for JavaScript developers. This beginner-friendly guide will help you understand the fundamentals of TypeScript, set up your development environment, and start writing type-safe code that catches errors before they reach production.",
    createdAt: getRandomDate(12),
    comments: mockComments.filter((comment) => comment.postId === "10"),
  },
]

