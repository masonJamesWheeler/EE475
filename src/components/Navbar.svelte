<script lang="ts">
  import {onMount} from "svelte";

  let currentPage: string = "Dashboard";
  let isMobileMenuOpen: boolean = false;

  function toggleMobileMenu(): void {
    if (isMobileMenuOpen) {
      isMobileMenuOpen = false;
    } else {
      isMobileMenuOpen = true;
    }
    console.log(isMobileMenuOpen);
  }

  function setActivePage(page: string): void {
    currentPage = page;
    isMobileMenuOpen = false; // Close mobile menu when a link is clicked
  }

</script>

<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button on:click={toggleMobileMenu} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
          <!-- If the menu is open, show 'X', else show the hamburger menu. -->
          {#if isMobileMenuOpen}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          {:else}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/if}
          <span class="sr-only">Toggle main menu</span>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://www.pngkey.com/png/full/306-3068414_download-university-of-washington-logo-white.png" alt="University of Washington">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Links are updated here -->
            <a href="./" class:bg-gray-900={currentPage === 'Dashboard'} class:text-white={currentPage === 'Dashboard'} on:click={() => setActivePage('Dashboard')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a>
            <a href="team" class:bg-gray-900={currentPage === 'Team'} class:text-white={currentPage === 'Team'} on:click={() => setActivePage('Team')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
            <a href="work-logs" class:bg-gray-900={currentPage === 'Work Logs'} class:text-white={currentPage === 'Work Logs'} on:click={() => setActivePage('Work Logs')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Work Logs</a>
            <a href="pdr" class:bg-gray-900={currentPage === 'PDR'} class:text-white={currentPage === 'PDR'} on:click={() => setActivePage('PDR')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">PDR</a>
            <a href="project-pitch" class:bg-gray-900={currentPage === 'Project Pitch'} class:text-white={currentPage === 'ProjectPitch'} on:click={() => setActivePage('ProjectPitch')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Project Pitch</a>
            <a href="https://github.com/masonJamesWheeler/EE475" target="_blank" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="mr-2 fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4183 2.865 8.1663 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.68.59-3.37-1.15-3.37-1.15-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.84.09-.65.35-1.09.64-1.34-2.14-.24-4.39-1.07-4.39-4.78 0-1.06.38-1.92 1-2.6-.1-.24-.44-1.24.1-2.58 0 0 .81-.26 2.66 1a9.3 9.3 0 0 1 2.42-.33c.82 0 1.63.11 2.41.32 1.85-1.28 2.66-1 2.66-1 .54 1.34.2 2.34.1 2.58.62.68 1 1.54 1 2.6 0 3.72-2.26 4.54-4.41 4.77.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.78 0 .27.18.58.68.49C19.14 20.166 22 16.418 22 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
              Code Repo
          </a>
        <!-- ... github, etc. -->
        </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMobileMenuOpen}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Links are updated here in similar fashion to desktop links -->
      <a href="./" class:bg-gray-900={currentPage === 'Dashboard'} class:text-white={currentPage === 'Dashboard'} on:click={() => setActivePage('Dashboard')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Dashboard</a>
      <a href="work-logs" class:bg-gray-900={currentPage === 'Work Logs'} class:text-white={currentPage === 'Work Logs'} on:click={() => setActivePage('Work Logs')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Work Logs</a>
      <a href="pdr" class:bg-gray-900={currentPage === 'PDR'} class:text-white={currentPage === 'PDR'} on:click={() => setActivePage('PDR')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">PDR</a>
      <a href="project-pitch" class:bg-gray-900={currentPage === 'Project Pitch'} class:text-white={currentPage === 'ProjectPitch'} on:click={() => setActivePage('ProjectPitch')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Project Pitch</a>
      <a href="team" class:bg-gray-900={currentPage === 'Team'} class:text-white={currentPage === 'Team'} on:click={() => setActivePage('Team')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="https://github.com/masonJamesWheeler/EE475" target="_blank" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="mr-2 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4183 2.865 8.1663 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.68.59-3.37-1.15-3.37-1.15-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.84.09-.65.35-1.09.64-1.34-2.14-.24-4.39-1.07-4.39-4.78 0-1.06.38-1.92 1-2.6-.1-.24-.44-1.24.1-2.58 0 0 .81-.26 2.66 1a9.3 9.3 0 0 1 2.42-.33c.82 0 1.63.11 2.41.32 1.85-1.28 2.66-1 2.66-1 .54 1.34.2 2.34.1 2.58.62.68 1 1.54 1 2.6 0 3.72-2.26 4.54-4.41 4.77.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.78 0 .27.18.58.68.49C19.14 20.166 22 16.418 22 12c0-5.52-4.48-10-10-10z"></path>
        </svg>
        Code Repo
      </a>
      </div>
  </div>
  {/if}
</nav>
