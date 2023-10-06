<script lang="ts">
    import type { WeeklyReport } from '../lib/api/weekly-report.js';
    import { getImage, getFile } from '../lib/api/weekly-report';
    export let report: WeeklyReport;
    let liked = false;  // To track the state of the like action

    function handleLike() {
        liked = !liked; // Toggle liked state
        report.likes++;    // Update the number of likes
        // Trigger the like function from the parent
        dispatch('like', report.id);
    }

    import { createEventDispatcher, onMount } from 'svelte';
    const dispatch = createEventDispatcher();

    function formatDate(isoDate: string): string {
        const date = new Date(isoDate);
        // format date as mm/dd/yyyy
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    let imageURL: string | null = null;
    let fileURL: string | null = null;

    onMount(async () => {
        // Get the image from the server
        if (report.imageURL) {
            const response = await getImage(report.imageURL);
            if (response.status === 200) {
                imageURL = URL.createObjectURL(response.body);
            }
        }

        // Get the file from the server
        if (report.fileURL) {
            const fileResponse = await getFile(report.fileURL);
            if (fileResponse.status === 200) {
                fileURL = URL.createObjectURL(fileResponse.body);
            }
        }
    });

</script>

<div class="report">
    <div class="report-content">
        <div class="report-author">{report.author}</div>
        <div class="report-date">{formatDate(report.created_at)}</div>
        <div class="report-content-text whitespace-pre-line">{report.content}</div>
        <!-- Add Image and File links if they exist -->
        <!-- Display Image if it exists -->
        {#if imageURL}
            <div class="report-image">
                <img src="{imageURL}" alt="Report Image" />
            </div>
        {/if}

        <!-- Provide download link if file exists -->
        {#if fileURL}
            <div class="report-file">
                <a href="{fileURL}" download target="_blank">Download Attached File</a>
            </div>
        {/if}
    </div>
    <div class="actions">
        <button on:click={handleLike}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "red" : "none"} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{report.likes}</span>
        </button>
    </div>
</div>

<style>
.report {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.report-content {
    margin-bottom: 10px;
}

.report-author {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
}

.report-date {
    color: #777;
    font-size: 0.9em;
    margin-bottom: 10px;
}

.report-content-text {
    font-size: 1em;
    color: #333;
}

.report-image img {
    max-width: 100%;
    margin-top: 10px;
}

.report-file {
    margin-top: 10px;
}

.actions button {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s;
}

.actions button:hover {
    background-color: #ddd;
}

.actions svg {
    margin-right: 8px;
}
</style>
