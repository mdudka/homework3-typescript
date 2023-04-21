const postsApiUrl = "https://jsonplaceholder.typicode.com/posts" as string;

interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

async function fetchPosts(url: string): Promise<IPost[]> {
    const response = await fetch(url);
    const data = await response.json();
    return data as IPost[];
}

function renderPosts(postsArray: IPost[]) {
    const ulPosts = document.getElementById('posts-list');
    if (ulPosts) {
        postsArray.forEach(post => {
            ulPosts.innerHTML += `
                <li class="posts-list__item">
                    <p>
                        ${post.id}. 
                        <strong>${post.title}</strong> by user ${post.userId}
                    </p>
                    <p>${post.body}</p>
                </li>
            `
        });
    }
}

window.addEventListener('load', async () => {
    const posts = await fetchPosts(postsApiUrl);
    renderPosts(posts);
})
