<script lang="ts">
    import { getKickstarterComments, postKickstarterComment } from '../../lib/api/kickstarter';
    import type { KickstarterComment } from '../../lib/api/kickstarter';

    let comments: Array<KickstarterComment> = [];
    let newCommentContent = "";

    // Fetch comments when component mounts
    getKickstarterComments().then(res => {
        if (res.status === 200) {
            comments = res.body;
        } else {
            comments = [];
        }
    });

    // Function to post a new comment
    async function handleCommentSubmit() {
    const res = await postKickstarterComment(newCommentContent);
    if (res.status === 200) {
        comments = [...comments, res.body];
        newCommentContent = "";
    }
}
    // Sample data for pledge options
    let pledgeOptions = [
        {
            amount: 5,
            description: "A description of what backers will get at this tier."
        },
        {
            amount: 25,
            description: "A description of what backers will get at this tier."
        },
        // ... add more pledge options as needed
    ];
</script>

<div class="kickstarter-page">
    <header>
        <img src="logo.png" alt="Your Project Logo">
        <nav>
            <a href="#overview">Overview</a>
            <a href="#updates">Updates</a>
            <a href="#backers">Backers</a>
            <a href="#comments">Comments</a>
            <a href="#faq">FAQ</a>
        </nav>
    </header>

    <section id="overview">
        <h1>Your Project Name</h1>
        <p>A brief description of your project goes here.</p>
        <video controls class = "mx-auto">
            <source src="promo_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>

    <section id="pledge-options">
        <h2>Support This Project</h2>
        {#each pledgeOptions as option}
            <div class="pledge-card">
                <h3>Pledge ${option.amount} or more</h3>
                <p>{option.description}</p>
            </div>
        {/each}
    </section>

    <section id="updates" class = "my-5">
        <h2>Latest Updates</h2>
        <article class="update">
            <h3>Update #1</h3>
            <p>Details about the update...</p>
            <footer>
                <time>Posted on: {new Date().toLocaleDateString()}</time>
            </footer>
        </article>
        <!-- ... add more updates as needed -->
    </section>
    
    <!-- Section for comments -->
    <section id="comments">
        <h2>Community Comments</h2>
    
        <!-- Display existing comments -->
        {#each comments as comment}
            <article class="comment">
                <p>{comment.content}</p>
                <footer>
                    <time>{new Date(comment.created_at).toLocaleDateString()}</time>
                </footer>
            </article>
        {/each}
    
        <!-- Form to add new comment -->
        <div class="comment-form">
            <label for="newComment">Join the discussion:</label>
            <textarea id="newComment" placeholder="Share your thoughts..." bind:value={newCommentContent}></textarea>
            <button on:click={handleCommentSubmit}>Post Comment</button>
        </div>
    </section>
    
    <!-- ... rest of the code ... -->
    

    <footer>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
    </footer>
</div>
<style>
    :root {
      --primary-color: #0077cc;
      --secondary-color: #f5f5f5;
      --background-color: #fafafa;
      --border-color: #e2e8f0;
      --text-color: #333;
      --footer-bg: #222;
    }
  
    body {
      background-color: var(--background-color);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.7;
      margin: 0;
      padding: 0;
    }
  
    .kickstarter-page {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
  
    header {
      background-color: var(--secondary-color);
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
  
    header img {
      width: 200px;
    }
  
    nav a {
      margin: 0 15px;
      padding: 5px 10px;
      text-decoration: none;
      color: var(--text-color);
      transition: color 0.3s, background-color 0.3s;
      border-radius: 5px;
    }
  
    nav a:hover {
      color: white;
      background-color: var(--primary-color);
    }
  
    #overview {
      padding: 40px 0;
      text-align: center;
    }
  
    #overview h1 {
      font-size: 2.5em;
      margin-bottom: 20px;
      color: var(--text-color);
    }
  
    #overview p {
      font-size: 1.2em;
      margin-bottom: 30px;
    }
  
    #overview video {
      border-radius: 10px;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    }
  
    #pledge-options {
      background-color: var(--secondary-color);
      border-radius: 8px;
      padding: 30px;
      margin-top: 40px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
  
    #pledge-options h2 {
      font-size: 2em;
      margin-bottom: 30px;
      text-align: center;
    }
  
    .pledge-card {
      border: 1px solid var(--border-color);
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }
  
    .pledge-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    }
  
    footer {
      background-color: var(--footer-bg);
      color: #fff;
      text-align: center;
      padding: 30px 0;
      margin-top: 50px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .comment {
    border: 1px solid var(--border-color);
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    background-color: var(--secondary-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.comment footer {
    margin-top: 10px;
    font-size: 0.8em;
    color: #777;
}

.comment-form {
    margin-top: 20px;
}

.comment-form label {
    display: block;
    margin-bottom: 10px;
}

.comment-form textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
}

.comment-form button {
    display: block;
    margin-top: 10px;
    background-color: var(--primary-color);
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.comment-form button:hover {
    background-color: #0062a3;
}

    /* Updates Section */
    .update {
        border: 1px solid var(--border-color);
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 8px;
        background-color: var(--secondary-color);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
    }

    .update h3 {
        font-size: 1.5em;
    }

    .update footer {
        margin-top: 10px;
        font-size: 0.9em;
        color: #777;
    }

    /* Comments Section */
    .comment {
        border: 1px solid var(--border-color);
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 8px;
        background-color: var(--secondary-color);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
    }

    .comment p {
        font-size: 1em;
    }

    .comment footer {
        margin-top: 10px;
        font-size: 0.9em;
        color: #777;
    }

    .comment-form textarea {
        resize: vertical;  /* Allow vertical resizing */
    }

  </style>