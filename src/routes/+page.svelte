<script lang="ts">
  import { onMount } from 'svelte';
  import LogItem from '../components/LogItem.svelte';
  import HeroHome from '../components/Hero_Home.svelte';
  import Pitch_Cards from '../components/Dog_Silo.svelte';
  import { get, post, likeLog, postComment } from '../lib/api/logs'; // Imported additional methods
  import type { Log } from '../lib/api/logs';

  let recentLogs: Log[] = [];
  let isLoading = true;


  async function fetchRecentLogs() {
    const response = await get();
    if (response.status === 500) {
      console.error(response.body.error);
      return;  // Handle the error appropriately
    }
    if (Array.isArray(response.body)) {
      // sort the recent logs by most recent date
      recentLogs = response.body.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      recentLogs = response.body.slice(0, 3);
    }
    isLoading = false;
  }

  async function handleLike(logId: number) {
    const response = await likeLog(logId);
    if (response && response.status === 200) {
      await fetchRecentLogs();
    }
  }



  let newLogContent: string = "";
  let newCommentContent: string = "";

  onMount(fetchRecentLogs);
</script>

<HeroHome />
<Pitch_Cards />
<!-- Dashboard Layout -->

<div class="dashboard">
  <header>
      <h1>Project Dashboard</h1>
      <p>Welcome to our project. Here's a brief overview and the most recent updates.</p>
      <div class="current-date">Current Date: {new Date().toLocaleDateString()}</div>
  </header>

  <section class="recent-logs">
      <h2>Recent Work Logs</h2>
      {#if isLoading}
          <div class="loader"></div>
          {:else}
          {#each recentLogs as log (log.id)}
              <LogItem bind:log on:like={e => handleLike(e.detail)}/>
          {/each}
      {/if}
  </section>
</div>

<style>
  body {
      background-color: #f3f4f6;
      font-family: 'Arial', sans-serif;
  }

  .dashboard {
      background: linear-gradient(145deg, #f8f9fa, #e6e8ec);
      padding: 40px 30px;
      max-width: 900px;
      margin: 60px auto;
      border-radius: 15px;
      box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
  }

  header {
      margin-bottom: 30px;
  }

  h1 {
      font-size: 2.5em;
      font-weight: 600;
      color: #333;
      margin-bottom: 15px;
  }

  header p {
      font-size: 1.1em;
      color: #555;
      margin-bottom: 20px;
      line-height: 1.5;
  }

  .current-date {
      font-size: 0.95em;
      color: #777;
      border-top: 1px solid #e0e0e0;
      padding-top: 15px;
  }

  .recent-logs {
      background: #ffffff;
      border-radius: 15px;
      padding: 25px;
      box-shadow: 4px 4px 10px #d1d1d1, -4px -4px 10px #ffffff;
  }

  h2 {
      font-size: 2em;
      font-weight: 500;
      color: #444;
      margin-bottom: 30px;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 15px;
  }

    .loader {
      border: 6px solid #f3f3f3;
      border-top: 6px solid #3498db;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin: 0 auto;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
</style>
