<script lang="ts">
import { onMount } from "svelte";

import Report from "../lib/cse475_finalreport.docx.pdf";
let isModalOpen = true;

onMount(() => {
  // This will ensure the modal is open on page load
  isModalOpen = true;
});

function closeModal() {
  isModalOpen = false;
}
</script>

<style>
    /* Gradient text effect */
    .gradient-text {
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
        -webkit-background-clip: text;
        color: transparent;
    }

    .background-container {
    height: 100vh; 
    width: 100vw; 
    background-image: url("../lib/images/bck.png");
    background-size: cover;  /* Scales the image to cover the entire element, cropping as necessary */
    background-repeat: no-repeat;  
    background-position: center center; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}


    .content {
        position: absolute;
        top: 33%;
    }

</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="relative h-screen w-screen">
        <!-- Background Image with overlaid content -->
        <div class="background-container h-screen">
            <!-- Modal for Final Report -->
                {#if isModalOpen}
                <div class="modal modal-open ">
                <div class="modal-box bg-white text-black grid grid-rows-3">
                    <h3 class = " tracking-wider font-light text-2xl">Fresh off the press! See our Final Report here.</h3>
                    <a href={Report} target="_blank" class="btn text-center btn-primary text-white">Download Report</a>
                    <div class="modal-action">
                    <label for="my-modal" class="btn btn-error text-white" on:click={closeModal}>Close</label>
                    </div>
                </div>
                </div>
                {/if}
            <div class="text-center content">
                <h1 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Dog Pulling You Out Of <span class="gradient-text">This World?</span></h1>
                <p class="text-xl md:text-2xl lg:text-2xl text-white">Experience Zero-G Resistance.</p>
            </div>
        </div>
    </div>
