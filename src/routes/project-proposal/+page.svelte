<script lang="ts">
let text = `Smart Collar

Project Introduction
Smart dog collar that measures the force a dog is pulling with - collar delivers a proportional amount of vibration/shocking to train the dog to stop pulling
Digitized pinch collar
Connect via bluetooth to app where training statistics over time can be monitored


Problem Space & Applications
Shock/Vibration collar that adjusts amount of vibration delivered based on the force 
Takes the load off the owner to have a remote control and use it at the right time
Dog vibration/shock collars exist but are training just as much for the dog as well as the owner.
When to apply shock and for what
More humane version of a pinch collar 
Human applies too much force
Not really a product that exists

Example Scenarios
Leash training
Prevent dog lunging at other dogs
Dog pulling too hard with regular collar

Related Technology
Vibrating Collars 
Require user input (use button to vibrate)
Leash tension meter
Measure pull direction and force
Differentiates between tension by dog vs. tension by handler

Potential Design Solutions
PCB
Control sensors and vibrations
Store data to be used in app, communicate via bluetooth
4 force sensors and 4 vibrational motor discs - one for each side of the collar to isolate the vibrations to the direction the dog is pulling in
Buying separate dog collars and linking them together

Resources
Triaxial accelerometer - measure tension and direction of pull → differentiate between human and dog
Force sensor
Spring
Vibrating motor disc

Intended Demo
Collar that shocks/vibrates based on the tension of the dog pulling
An app that can track the data from the collar through bluetooth communication.

Stretch goals:
Have the collar short/vibrate on the side that the dog is pulling
`

</script>

<div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-6">Smart Collar - Project Proposal</h1>
  
    <section class="bg-white p-5 rounded shadow mb-6">
      <h2 class="text-xl font-semibold mb-4">Project Introduction</h2>
      <ul class="list-disc pl-5">
        <li>Smart dog collar that measures the force a dog is pulling with - collar delivers a proportional amount of vibration/shocking to train the dog to stop pulling</li>
        <li>Digitized pinch collar</li>
        <li>Connect via bluetooth to app where training statistics over time can be monitored</li>
      </ul>
    </section>
  
    <section class="bg-white p-5 rounded shadow mb-6">
      <h2 class="text-xl font-semibold mb-4">Problem Space & Applications</h2>
      <ul class="list-disc pl-5">
        <li>Shock/Vibration collar that adjusts amount of vibration delivered based on the force </li>
        <li>Takes the load off the owner to have a remote control and use it at the right time</li>
        <li>Dog vibration/shock collars exist but are training just as much for the dog as well as the owner.</li>
        <li>When to apply shock and for what</li>
        <li>More humane version of a pinch collar </li>
        <li>Human applies too much force</li>
        <li>Not really a product that exists</li>
      </ul>
    </section>
  
    <section class="bg-white p-5 rounded shadow mb-6">
      <h2 class="text-xl font-semibold mb-4">Example Scenarios</h2>
      <ul class="list-disc pl-5">
        <li>Leash training</li>
        <li>Prevent dog lunging at other dogs</li>
        <li>Dog pulling too hard with regular collar</li>
      </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
      <h2 class="text-xl font-semibold mb-4">Related Technology</h2>
      <ul class="list-disc pl-5">
        <li>Vibrating Collars </li>
        <li>Require user input (use button to vibrate)</li>
        <li>Leash tension meter</li>
        <li>Measure pull direction and force</li>
        <li>Differentiates between tension by dog vs. tension by handler</li>
      </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
      <h2 class="text-xl font-semibold mb-4">Potential Design Solutions</h2>
      <ul class="list-disc pl-5">
        <li>PCB</li>
        <li>Control sensors and vibrations</li>
        <li>Store data to be used in app, communicate via bluetooth</li>
        <li>4 force sensors and 4 vibrational motor discs - one for each side of the collar to isolate the vibrations to the direction the dog is pulling in</li>
        <li>Buying separate dog collars and linking them together</li>
      </ul>
    </section>

    <section class= "bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Resources</h2>
        <ul class="list-disc pl-5">
            <li>Triaxial accelerometer - measure tension and direction of pull → differentiate between human and dog</li>
            <li>Force sensor</li>
            <li>Spring</li>
            <li>Vibrating motor disc</li>
        </ul>
    </section>

    <section class= "bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Intended Demo</h2>
        <ul class="list-disc pl-5">
            <li>Collar that shocks/vibrates based on the tension of the dog pulling</li>
            <li>An app that can track the data from the collar through bluetooth communication.</li>
        </ul>
    </section>

    <section class= "bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Stretch Goals</h2>
        <ul class="list-disc pl-5">
            <li>Have the collar short/vibrate on the side that the dog is pulling</li>
        </ul>
    </section>

</div>

