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


    // Updating the project name and description
    let projectName = "Smart Dog Collar";
    let projectDescription = "SmartPaws is an innovative dog collar with a built-in ESP32 MCU and Load Cell that senses the pulling force on the leash. It provides vibration feedback to the dog for a better walking experience and includes an app for owners to track training progress.";

    // Update pledge options with descriptions and rewards
    let pledgeOptions = [
        {
            amount: 25,
            description: "Thank you for your support! Receive project updates and your pet's name engraved on your first order"
        },
        {
            amount: 75,
            description: "Early bird special! Get one Smart collar at a discounted rate before it hits the market."
        },
        {
            amount: 150,
            description: "Receive the Smart collar and a 6-month subscription to the Smart Collar app with additional training features."
        },
    ];

    // Sample data for updates
    let updates = [
        {
            title : "Sensor is Working!",
            content: "We are excited to announce that our sensor is working! We attached the collar to Quentin and took him for a walk.\
            We gave him treats and pets when he was walking correctly",
            date: "11-09-2023"
        },
        {
            title: "We are funded!",
            content: "We are excited to announce that daddy Bezos sold his soul for 1 million dollars to fund our project. We will be posting an update soon.",
            date: "11-09-2023"
        },

        {
            title: "Team is close to deciding the products direction",
            content: "The Team is set to meet this week to discuss the direction of the product. We will be posting an update soon.",
            date: "10-01-2023"
        },
    ]
    updates = updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

</script>


<div class="kickstarter-page p-5">

    <!-- Header -->
    <header class="flex justify-between items-center p-5 rounded-lg shadow-md mb-5 border-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/University_of_Washington_Block_W_logo_RGB_brand_colors.SVG/1280px-University_of_Washington_Block_W_logo_RGB_brand_colors.SVG.png" alt="Your Project Logo" class="w-12 h-8">
        <nav>
            <a href="#overview" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Overview</a>
            <a href="#updates" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Updates</a>
            <a href="#featured-backers" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Backers</a>
            <a href="#comments" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">Comments</a>
            <a href="#faq" class="text-text-color mx-3 hover:bg-primary-color hover:text-white rounded py-1 px-2 transition">FAQ</a>
        </nav>
    </header>

    <!-- Overview -->
    <div class="section-container">
    <section id="overview" class="text-center my-5 text-gray-800 font-bold">
        <h1 class="text-4xl mb-4">Smart Dog Collar</h1>
        <p class="text-lg font-light mb-4">Introducing Our Smart Collar: The Future of Dog Training and Walking. Engineered with a precise Force Sensor, Our Smart Collar is designed to detect the force your dog applies to the leash and provide gentle vibratory feedback. This innovative approach encourages better leash habits for a more enjoyable walking experience. Paired with a dedicated app, it allows pet owners to track their furry friend's progress, understand walking behaviors, and set targets for a disciplined stroll. Support our journey on Kickstarter to bring harmony to your daily walks and redefine the bond between you and your dog.</p>
        <!-- AI Generated image of the product -->
        <div class = "flex justify-center">
        <img src="src/lib/images/proto.png" alt="Smart Dog Collar" class="w-1/2 h-1/2">
        </div>
        <p class="text-md font-light mb-4">AI Generated image of our prototype</p>


    </section>
    </div>

    <!-- Pledge Options -->
    <div class="section-container">
    <section id="pledge-options" class=" p-5 rounded-lg shadow-md my-5 border-2">
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
    <section id="updates" class="my-5 px-5 py-3 shadow-lg rounded-lg border-2">
        <h2 class="text-2xl font-bold mb-4 text-slate-800">Latest Updates</h2>
        {#each updates.slice(0, 3) as update} <!-- Display only the 3 most recent updates -->
            <article class="update mb-4 bg-white rounded-md p-4 border-2">
                <h3 class="text-xl font-semibold mb-2 underline">{update.title}</h3>
                <p class="mb-2 text-gray-700 whitespace-pre-line">{update.content}</p>
                <p class="text-sm text-gray-500">{update.date}</p>
            </article>
        {/each}
        
        {#if expandUpdates}
            {#each updates.slice(3) as update} <!-- Display the older updates when expanded -->
                <article class="update mt-4 bg-white rounded-md p-4 border-2">
                    <h3 class="text-xl font-semibold mb-2 underline">{update.title}</h3>
                    <p class="mb-2 text-gray-700 whitespace-pre-line">{update.content}</p>
                    <p class="text-sm text-gray-500">{update.date}</p>
                </article>
            {/each}
        {/if}
    
        {#if updates.length > 3}
            <button on:click={() => expandUpdates = !expandUpdates} class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mt-4">
                {expandUpdates ? 'Show Less' : 'Show More'}
            </button>
        {/if}
    </section>
    </div>
    

<!-- Comments Section -->
<div class="section-container">
<section id="comments" class="mt-10 px-5 py-3 shadow-lg rounded-lg border-2">
    <h2 class="text-2xl font-bold mb-4 text-slate-800">Community Comments</h2>
    {#if comments.length === 0}
        <p class="text-gray-600">No comments yet. Be the first to comment!</p>
    {:else}
        {#each comments.slice(0, 3) as comment} <!-- Display only the 3 most recent comments -->
        <article class="comment border-b last:border-b-0 p-4 border-2 m-6">
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
                <article class="comment mt-4 border-2">
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
    <div class="comment-form mt-5 border-2">
        <label for="newComment text-xl" class = "text-2xl font-bold text-slate-800">Join the discussion:</label>
        <textarea id="newComment" placeholder="Share your thoughts..." bind:value={newCommentContent}></textarea>
        <button on:click={handleCommentSubmit} class = "bg-white rounded-md text-slate-800 p-2 font-bold hover:scale-105 border-2">Post Comment</button>
    </div>
    </div>
    
    <div class="section-container">
        <section id="featured-backers" class="my-5 p-5 rounded-lg shadow-md border-2">
            <!-- Content featuring Elon Musk, Jeff Bezos, and Britney Spears -->
            <h2 class="text-2xl font-bold mb-4 text-slate-800">Featured Backers</h2>
            <div class="flex flex-wrap justify-center">
                <div class="flex flex-col items-center justify-center p-5 m-5 border-2 rounded-lg shadow-md">
                    <img src="https://variety.com/wp-content/uploads/2023/02/Elon-Musk.jpg?w=1000&h=563&crop=1" alt="Elon Musk" class="w-32 h-32 rounded-full">
                    <h3 class="text-xl font-semibold mt-2">Elon Musk</h3>
                    <p class="text-gray-700">CEO of Tesla</p>
                </div>
                <div class="flex flex-col items-center justify-center p-5 m-5 border-2 rounded-lg shadow-md">
                    <img src="https://images.foxtv.com/static.q13fox.com/www.q13fox.com/content/uploads/2023/10/932/524/jeff-bezos-getty.jpg?ve=1&tl=1" alt="Jeff Bezos" class="w-32 h-32 rounded-full">
                    <h3 class="text-xl font-semibold mt-2">Jeff Bezos</h3>
                    <p class="text-gray-700">CEO of Amazon</p>
                </div>
                <div class="flex flex-col items-center justify-center p-5 m-5 border-2 rounded-lg shadow-md object-cover">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg" alt="Britney Spears" class="w-32 h-32 rounded-full">
                    <h3 class="text-xl font-semibold mt-2">Britney Spears</h3>
                    <p class="text-gray-700">Pop Star</p>
                </div>
        </section>
    </div>

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