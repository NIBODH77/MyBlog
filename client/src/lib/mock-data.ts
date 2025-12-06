import { format, subHours, subMinutes } from "date-fns";

export type User = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  stats: {
    followers: number;
    following: number;
    questions: number;
    answers: number;
  };
  isExpert?: boolean;
};

export type Topic = {
  id: string;
  name: string;
  description: string;
  icon: string;
  followers: number;
  questionCount: number;
};

export type Comment = {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  upvotes: number;
  replies?: Comment[];
};

export type Answer = {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  upvotes: number;
  comments: Comment[];
  isAccepted?: boolean;
};

export type Question = {
  id: string;
  title: string;
  content: string;
  author: User;
  topics: Topic[];
  createdAt: string;
  upvotes: number;
  viewCount: number;
  answers: Answer[];
  isBookmarked?: boolean;
};

export type Notification = {
  id: string;
  type: "upvote" | "answer" | "follow" | "mention" | "reply" | "system";
  actor?: User;
  content?: string;
  read: boolean;
  createdAt: string;
  targetId?: string; // ID of question or answer
};

// MOCK DATA

export const currentUser: User = {
  id: "u1",
  name: "Alex Morgan",
  handle: "@alexmorgan",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  bio: "Product Designer & Frontend Enthusiast. Building tools for the future.",
  stats: {
    followers: 1240,
    following: 85,
    questions: 12,
    answers: 45
  },
  isExpert: true
};

export const users: User[] = [
  currentUser,
  {
    id: "u2",
    name: "Sarah Chen",
    handle: "@schen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Fullstack Developer. React & Node.js expert.",
    stats: { followers: 890, following: 120, questions: 5, answers: 82 },
    isExpert: true
  },
  {
    id: "u3",
    name: "Jordan Lee",
    handle: "@jlee_dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    bio: "Learning something new every day.",
    stats: { followers: 150, following: 300, questions: 25, answers: 10 }
  },
  {
    id: "u4",
    name: "Emily Davis",
    handle: "@emilyd",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    bio: "UX Researcher. Passionate about accessibility.",
    stats: { followers: 2100, following: 50, questions: 8, answers: 120 },
    isExpert: true
  }
];

export const topics: Topic[] = [
  { id: "t1", name: "React", description: "A JavaScript library for building user interfaces", icon: "⚛️", followers: 15400, questionCount: 3200 },
  { id: "t2", name: "Design Systems", description: "Everything about scaling UI consistency", icon: "🎨", followers: 8200, questionCount: 900 },
  { id: "t3", name: "UX Research", description: "Understanding user behaviors and needs", icon: "🔍", followers: 5600, questionCount: 450 },
  { id: "t4", name: "TypeScript", description: "Typed JavaScript at any scale", icon: "ts", followers: 12300, questionCount: 2100 },
  { id: "t5", name: "Career Advice", description: "Navigating the tech industry", icon: "💼", followers: 25000, questionCount: 5600 }
];

export const questions: Question[] = [
  {
    id: "q1",
    title: "What is the best way to handle state in a large React application in 2025?",
    content: "I've been using Redux for years, but with the rise of server components and new libraries like Zustand and Jotai, I'm wondering what the current industry standard is for complex client-side state?",
    author: users[2],
    topics: [topics[0], topics[3]],
    createdAt: subHours(new Date(), 2).toISOString(),
    upvotes: 45,
    viewCount: 1205,
    isBookmarked: false,
    answers: [
      {
        id: "a1",
        author: users[1],
        content: "For most client-side state, **Zustand** has become the go-to because of its simplicity and minimal boilerplate. \n\nHowever, for server state (data fetching), you should definitely be using **TanStack Query**. It handles caching, deduping, and background updates out of the box.\n\nIf you are using Next.js App Router, you might need less client state than you think.",
        createdAt: subHours(new Date(), 1).toISOString(),
        upvotes: 120,
        isAccepted: true,
        comments: [
          {
            id: "c1",
            author: users[0],
            content: "Agreed! TanStack Query is a game changer.",
            createdAt: subMinutes(new Date(), 45).toISOString(),
            upvotes: 5
          }
        ]
      },
      {
        id: "a2",
        author: users[3],
        content: "Context API is often sufficient for smaller apps or specific subtree state (like a compound component). Don't reach for a library until you actually have a prop drilling problem or performance issues.",
        createdAt: subMinutes(new Date(), 30).toISOString(),
        upvotes: 25,
        comments: []
      }
    ]
  },
  {
    id: "q2",
    title: "How do you document your Design System tokens effectively?",
    content: "We are struggling to keep our Figma tokens and CSS variables in sync. Any tools or workflows you recommend?",
    author: users[0],
    topics: [topics[1]],
    createdAt: subHours(new Date(), 5).toISOString(),
    upvotes: 89,
    viewCount: 3400,
    isBookmarked: true,
    answers: []
  },
  {
    id: "q3",
    title: "Is it worth learning Rust for web development?",
    content: "With tools like identifying moving to Rust, is it becoming a requirement for frontend tooling engineers?",
    author: users[2],
    topics: [topics[4]],
    createdAt: subHours(new Date(), 12).toISOString(),
    upvotes: 230,
    viewCount: 10500,
    isBookmarked: false,
    answers: []
  }
];

export const notifications: Notification[] = [
  {
    id: "n1",
    type: "upvote",
    actor: users[1],
    content: "upvoted your answer on \"How do you document Design System tokens?\"",
    read: false,
    createdAt: subMinutes(new Date(), 5).toISOString(),
    targetId: "q2"
  },
  {
    id: "n2",
    type: "reply",
    actor: users[3],
    content: "replied to your comment",
    read: false,
    createdAt: subHours(new Date(), 1).toISOString(),
    targetId: "c1"
  },
  {
    id: "n3",
    type: "system",
    content: "Welcome to Nexus! Complete your profile to get started.",
    read: true,
    createdAt: subHours(new Date(), 24).toISOString()
  }
];
