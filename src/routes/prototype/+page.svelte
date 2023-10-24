<script>
  import { onMount} from 'svelte';
  import casing from "../../lib/images/casing.png"
  import cross_section from "../../lib/images/cross_section.png";
  import see_through from "../../lib/images/see_through.png";

  let images = [
      casing,
      cross_section,
      see_through
  ];
  
  let currentImageIndex = 0;

  onMount(() => {
      const interval = setInterval(() => {
          currentImageIndex = (currentImageIndex + 1) % images.length;
      }, 10000);

      return () => clearInterval(interval);
  });
</script>


<style>
  .full-screen {
      min-height: 100vh;
      display: flex;
      flex-direction: row;
      background-color: #f5f5f5;
      align-items: center;
      justify-content: center;
      padding: 4em;
      gap: 3em;
  }

  .img-container {
      background-color: var(--slate-200);
      padding: 2em;
      border-radius: 15px;
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  }

  .img-container img {
      max-width: 40vw;
      transition: opacity 0.5s ease;
      border-radius: 15px;
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  }

  .details {
      flex: 1;
      background-color: var(--slate-200);
      padding: 2em;
      border-radius: 15px;
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  }

  h1 {
      margin-bottom: 1.5em;
  }

  h2 {
      margin-top: 2em;
      margin-bottom: 1em;
  }

  p {
      color: #2d3748;  /* gray-800 */
  }

  .detail-section {
      margin-bottom: 1.5em;
  }
</style>

<div class="full-screen">
  <div class="img-container border-2 border-violet-700">
      <img src={images[currentImageIndex]} alt="Dog Collar Prototype">
  </div>
  
  <div class="details border-violet-700 border-2">
      <h1 class = "text-3xl tracking-wider font-extrabold text-violet-600">Rapid Prototype: Dog Collar Design</h1>
      
      <div class="detail-section">
          <h2 class = "text-violet-700 text-xl">Collar Mechanism</h2>
          <p>Designed with two endpoints affixed to a metal piece, serving as the primary foundation. Strain gauges are utilized to accurately measure the force exerted by the dog on the leash.</p>

          <h2 class = "text-violet-700 text-xl">MCU Casing</h2>
          <p>Features a 3D printed housing for the Microcontroller Unit (MCU). This protective casing is strategically positioned atop the metal piece. For secure and streamlined assembly, the casing will be affixed to the metal using screws. Inclusion of specialized holes ensures effortless wiring of the strain gauges from the metal directly to the MCU.</p>

          <h2 class = "text-violet-700 text-xl">Vibration Motors</h2>
          <p>Integrated vibration motors, housed in a distinct compartment, are wired to communicate directly with the MCU, ensuring responsive feedback.</p>

          <h2 class = "text-violet-700 text-xl">Electronics & Compartments</h2>
          <p>All vital electronic components are enclosed within a singular, expansive compartment, eliminating the need for external wiring throughout the collar material.</p>

          <h2 class = "text-violet-700 text-xl">Power Management</h2>
          <p>Equipped with a durable Lipo battery, the design also incorporates a dedicated charging port directly on the collar, ensuring prolonged usage and easy charging capabilities.</p>
      </div>
  </div>
</div>
