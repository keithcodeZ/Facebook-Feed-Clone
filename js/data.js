const defaultPosts = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    avatar: "https://i.pravatar.cc/80?img=12",
    timestamp: "2 hrs",
    content: "Ang init ngayong araw grabe. 🥵",
    image: null,                          // ← WALANG image
    likes: 245,
    comments: 18,
    shares: 4
  },
  {
    id: 2,
    name: "Maria Santos",
    avatar: "https://i.pravatar.cc/80?img=45",
    timestamp: "5 hrs",
    content: "Check out this view! 😍",
    image: "../images/post-vangogh.jpg",       // ← MAY image
    likes: 1200,
    comments: 89,
    shares: 23
  },
  {
    id: 3,
    name: "Pedro Reyes",
    avatar: "https://picsum.photos/id/1015/600/400",
    timestamp: "1 day",
    content: "Salamat sa lahat ng bumati! 🎂",
    image: null,                          // ← WALANG image
    likes: 567,
    comments: 45,
    shares: 2
  }
]

function savePost(){
    localStorage.setItem('posts', JSON.stringify(defaultPosts))
}

const hasPost = localStorage.getItem('posts')
if (!hasPost) {
    savePost()
}

export const posts = hasPost ? JSON.parse(hasPost) : defaultPosts; 