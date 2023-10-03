<script lang="ts">
    export let log: any;
    let liked = false;  // To track the state of the like action

    function handleLike() {
        liked = !liked; // Toggle liked state
        log.likes++;    // Update the number of likes
        // Trigger the like function from the parent
        dispatch('like', log.id);
    }

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function formatDate(isoDate: string): string {
        const date = new Date(isoDate);
        // format date as mm/dd/yyyy
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

</script>

<div class="log">
    <div class="log-content">
        <div class="log-author">{log.author}</div>
        <div class="log-date">{formatDate(log.date)}</div>
        <div class="log-content-text whitespace-pre-line">{log.content}</div>
    </div>
    <div class="actions">
        <button on:click={handleLike}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "red" : "none"} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{log.likes}</span>
        </button>
    </div>
</div>

<style>
.log {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.log-content {
    margin-bottom: 10px;
}

.log-author {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
}

.log-date {
    color: #777;
    font-size: 0.9em;
    margin-bottom: 10px;
}

.log-content-text {
    font-size: 1em;
    color: #333;
}

.actions button {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    margin-right: 10px;
    cursor: pointer;
    background-color: transparent; /* Made the button background transparent */
    transition: background-color 0.3s;
}

.actions button:hover {
    background-color: #ddd;
}

.actions svg {
    margin-right: 8px;
}
</style>
