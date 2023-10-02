<script lang="ts">
    import {postKickstarterComment} from '$lib/api/kickstarter';
    import type { KickstarterComment } from '../../lib/api/kickstarter';
	import type { PageServerLoad } from './$types';

    let expandUpdates = false;
    let expandComments = false;

    export let data
    let comments = [...data.props.comments].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    console.log(comments)
    let newCommentContent = "";

    // Function to post a new comment
    async function handleCommentSubmit() {
        if (newCommentContent === "") return;
        

        const response = await postKickstarterComment(newCommentContent);
            comments = [newComment, ...comments];
            newCommentContent = "";
        
    }

    function formatDate(isoString) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };

    return new Date(isoString).toLocaleString(undefined, options);
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
    ];

    // Sample data for updates
    let updates = [
        {
            title: "Team is close to deciding the products direction",
            content: "The Team is set to meet this week to discuss the direction of the product. We will be posting an update soon.",
            date: "10-01-2023"
        },
    ]
    updates = updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

</script>


<div class="kickstarter-page bg-violet-600 p-5">

    <!-- Header -->
    <header class="flex justify-between items-center bg-violet-200 p-5 rounded-lg shadow-md mb-5">
        <img src="logo.png" alt="Your Project Logo" class="w-48">
        <nav>
            <a href="#overview" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Overview</a>
            <a href="#updates" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Updates</a>
            <a href="#backers" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Backers</a>
            <a href="#comments" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Comments</a>
            <a href="#faq" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">FAQ</a>
        </nav>
    </header>

    <!-- Overview -->
    <div class="section-container">
    <section id="overview" class="text-center my-5 text-white font-bold">
        <h1 class="text-4xl mb-4">Your Project Name</h1>
        <p class="text-xl mb-4">A brief description of your project goes here.</p>
        <video controls class="mx-auto rounded shadow-md">
            <source src="promo_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
    </div>

    <!-- Pledge Options -->
    <div class="section-container">
    <section id="pledge-options" class="bg-violet-200 p-5 rounded-lg shadow-md my-5">
        <h2 class="text-3xl font-bold tracking-wide mb-5 text-slate-800">
            Support This Project
        </h2>
                {#each pledgeOptions as option}
            <div class="pledge-card border border-border-color p-5 rounded-lg shadow-md mb-4 bg-white hover:shadow-lg transition">
                <h3 class="text-2xl mb-3">Pledge ${option.amount} or more</h3>
                <p class="text-gray-700">{option.description}</p>
            </div>
        {/each}
    </section>
    </div>


<!-- Updates Section -->
<div class="section-container">
<section id="updates" class="my-5 px-5 py-3 bg-violet-200 shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-slate-800">Latest Updates</h2>
    {#each updates.slice(0, 3) as update} <!-- Display only the 3 most recent updates -->
        <article class="update mb-4 bg-white rounded-md p-4">
            <h3 class="text-xl font-semibold mb-2">{update.title}</h3>
            <p class="mb-2 text-gray-700">{update.content}</p>
            <p class="text-sm text-gray-500">{update.date}</p>
        </article>
    {/each}
    {#if updates.length > 3}
        <button on:click={() => expandUpdates = !expandUpdates} class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            {expandUpdates ? 'Show Less' : 'Show More'}
        </button>
        {#if expandUpdates}
            {#each updates.slice(3) as update} <!-- Display the older updates -->
                <article class="update mt-4">
                    <h3 class="text-xl font-semibold mb-2">{update.title}</h3>
                    <p class="mb-2 text-gray-700">{update.content}</p>
                    <p class="text-sm text-gray-500">{update.date}</p>
                </article>
            {/each}
        {/if}
    {/if}
</section>
</div>

<!-- Comments Section -->
<div class="section-container">
<section id="comments" class="mt-10 px-5 py-3 bg-violet-200 shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-slate-800">Community Comments</h2>
    {#if comments.length === 0}
        <p class="text-gray-600">No comments yet. Be the first to comment!</p>
    {:else}
        {#each comments.slice(0, 3) as comment} <!-- Display only the 3 most recent comments -->
        <article class="comment mb-4 border-b last:border-b-0 pb-4">
            <p class="mb-2 text-gray-700">{comment.content}</p>
            <p class="text-sm text-gray-500">Posted on {formatDate(comment.created_at)}</p>
        </article>        
        {/each}
        {#if comments.length > 3}
            <button on:click={() => expandComments = !expandComments} class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                {expandComments ? 'Show Less' : 'Show More'}
            </button>
            {#if expandComments}
                {#each comments.slice(3) as comment} <!-- Display the older comments -->
                <article class="comment mt-4">
                    <p class="mb-2 text-gray-700">{comment.content}</p>
                    <p class="text-sm text-gray-500">Posted on {formatDate(comment.created_at)}</p>
                </article>                
                {/each}
            {/if}
        {/if}
    {/if}
</section>
</div>

    <!-- Form to add new comment -->
    <div class="section-container">
    <div class="comment-form mt-5 bg-violet-200">
        <label for="newComment text-xl" class = "text-2xl font-bold text-slate-800">Join the discussion:</label>
        <textarea id="newComment" placeholder="Share your thoughts..." bind:value={newCommentContent}></textarea>
        <button on:click={handleCommentSubmit} class = "bg-white rounded-md text-slate-800 p-2 font-bold hover:scale-105">Post Comment</button>
    </div>
    </div>
    <!-- ... rest of the code ... -->
    

    <footer class="bg-footer-bg text-white text-center p-8 mt-10 rounded-lg shadow-md">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
    </footer>
</div>

<style>
:root {
    --primary-color: #0077cc;
    --secondary-color: #f0f0f0; /* Slightly darker */
    --background-color: #e9e9e9; /* Slightly darker for better contrast */
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
    margin: 30px auto; /* Added vertical spacing */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Main container shadow */
    padding: 20px; /* Inner padding for shadow to show */
    border-radius: 10px; /* Curved borders for the main container */
}

.pledge-card:hover {
    background-color: var(--secondary-color); /* Subtle background on hover */
    transform: translateY(-3px); /* Slight raise effect on hover */
}

section {
    margin-bottom: 30px; /* Increased separation */
}

.comment {
    padding: 10px; /* Added padding */
    margin-bottom: 15px; /* Increased separation */
    border-radius: 5px; /* Curved borders */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); /* Subtle shadow */
    background-color: white;
}

.comment:last-child {
    margin-bottom: 0; /* Reset for last item */
}

.comment-form {
    padding: 15px;
    border-radius: 5px; /* Curved borders */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); /* Subtle shadow */
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
    resize: vertical;  
}
  </style>