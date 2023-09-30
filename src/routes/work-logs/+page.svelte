<script lang="ts">
    import { onMount } from 'svelte';
    import { get, post, likeLog, postComment } from '../../lib/api/logs';
    import LogItem from '../../components/LogItem.svelte';
    import type { Log } from '../../lib/api/logs';


    let isLoading = true; // New state for loading animation

    async function refreshLogs() {
        const response = await get();
        if (response.body && Array.isArray(response.body)) {
            logs = response.body;
        } else {
            console.error(response.body.error);
            logs = [];
        }
        isLoading = false;  // Update the loading state
    }

    async function handleLike(logId: number) {
        const response = await likeLog(logId);
        if (response && response.status === 200) {
            await refreshLogs();
        }
    }

    async function handlePost() {
      if (newLogContent && newLogAuthor) {
        const response = await post(newLogContent, newLogAuthor);
        console.log(response);
        if (response.status === 500) {
          await refreshLogs(); // Refresh logs from the server
          newLogContent = "";
            newLogAuthor = "";
        } else {
          console.error(response.body.error);
        }
      }
    }

    async function handlePostComment(logId: number) {
        if (newCommentContent) {
            const response = await postComment(logId, newLogAuthor, newCommentContent);
            if (response && response.status === 200) {
                newCommentContent = "";
                await refreshLogs();
            }
        }
    }

    $: logs = [] as Log[];
    let newLogAuthor: string = "";
    let newLogContent: string = "";
    let newCommentContent: string = "";

    onMount(refreshLogs);

</script>
    
<div class="logs-container">
    <div class="post-log my-4">
      <input type="text" placeholder="Author" bind:value={newLogAuthor} />
      <textarea placeholder="What did you do today?" bind:value={newLogContent} />
      <button on:click={handlePost}>Post</button> <!-- Modified this line -->
    </div>

    {#if isLoading} <!-- Added this conditional block -->
        <div class="loader"></div>
    {:else}
        {#each logs.slice().reverse() as log (log.id)}
            <LogItem bind:log on:like={e => handleLike(e.detail)}/>
        {/each}
    {/if}
</div>


<style>
    .logs-container {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        max-width: 800px;
        margin: 50px auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
    .post-log {
        background-color: #fff;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .post-log input,
    .post-log textarea {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 0.3s;
    }
    
    .post-log input:focus,
    .post-log textarea:focus {
        border-color: #555;
        outline: none;
    }
    
    .post-log button {
        align-self: flex-start;
        padding: 8px 16px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .post-log button:hover {
        background-color: #555;
    }

    .loader {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 20px auto;  /* Center the loader */
}

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    </style>