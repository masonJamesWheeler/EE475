<script lang="ts">
    import { onMount } from 'svelte';
    import { get, post, likeLog} from '../../lib/api/weekly-report'; // Updated imports to include getFile and listFiles
    import WeeklyReportItem from '../../components/WeeklyReportItem.svelte';
    import type { WeeklyReport } from '../../lib/api/weekly-report';

    let isLoading = true;

    async function refreshReports() {
        const response = await get();
        if (response.body && Array.isArray(response.body)) {
            reports = response.body;
            console.log(reports);
            // sort the reports by date
            reports.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        } else {
            console.error(response.body.error);
            reports = [];
        }
        isLoading = false;
    }

    async function handleLike(reportId: number) {
        const response = await likeLog(reportId);
        if (response && response.status === 200) {
            await refreshReports();
        }
    }

    async function handlePost() {
      if (newReportContent && newReportAuthor) {
        const response = await post(newReportContent, newReportAuthor, selectedFile, selectedImage); // Updated to pass the file and image
        if (response.status === 500) {
          await refreshReports();
          newReportContent = "";
          newReportAuthor = "";
          selectedFile = null;
          selectedImage = null;
        } else {
          console.error(response.body.error);
        }
      }
    }

    function handleFileChange(event) {
        selectedFile = event.target.files[0];
    }

    function handleImageChange(event) {
        selectedImage = event.target.files[0];
    }

    // Assuming you don't need the comments function for the weekly reports

    $: reports = [] as WeeklyReport[];
    let newReportAuthor: string = "";
    let newReportContent: string = "";
    let selectedFile: File | null = null; // New state for selected file
    let selectedImage: File | null = null; // New state for selected image

    onMount(refreshReports);
</script>

<div class="logs-container">
    <div class="post-log my-4">
        <input type="text" placeholder="Author" bind:value={newReportAuthor} />
        <textarea placeholder="Type Weekly Report Here" bind:value={newReportContent} />
        
        <label class="file-label">Attach File:
          <input type="file" on:change={handleFileChange} />
        </label>
        
        <label class="image-label">Attach Image:
          <input type="file" accept="image/*" on:change={handleImageChange} />
        </label>
        
        <button on:click={handlePost}>Post</button>
    </div>
    
    {#if isLoading}
        <div class="loader"></div>
    {:else}
        {#each reports as report (report.id)}
            <WeeklyReportItem bind:report on:like={e => handleLike(e.detail)} />
        {/each}
    {/if}
</div>

<!-- The provided CSS should work as it is, so no changes needed. -->
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

    .file-label, .image-label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.9em;
        font-weight: bold;
        color: #555;
    }

    .file-label input, .image-label input {
        margin-left: 10px;
    }
    </style>
