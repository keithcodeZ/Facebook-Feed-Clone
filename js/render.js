import { posts } from "./data.js";

export function renderPosts() {
    const container = document.getElementById("posts-container");
    console.log(container);
    
    container.innerHTML = posts.map((post, index) =>
    `<article class="post-card">
        <div class="post-header">
          <img src="${post.avatar}" alt="${post.name}" class="avatar">
          <div>
            <h3 class="name">${post.name}</h3>
            <p class="timestamp">${post.timestamp} · 🌐</p>
          </div>
        </div>

        <p class="content">${post.content}</p>
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ""}

        <div class="stats">
          <span>👍❤️😆 ${post.likes}</span>
          <span>${post.comments} comments · ${post.shares} shares</span>
        </div>

        <div class="actions">
          <button>👍 Like</button>
          <button>💬 Comment</button>
          <button>↗️ Share</button>
        </div>
      </article>`
    ).join('')
    
}