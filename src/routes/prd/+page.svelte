<div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-6">Dog Collar - Product Proposal</h1>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Product Summary</h2>
        <p>
            A dog collar that facilitates the decision of how much and when to shock a dog for all dog owners. 
            Shock/Vibration collars are currently as much training for the dog as they are for the human due to 
            having to be really intentional in when and how much to shock and vibrate the dog. 
            The dog then has to filter out the false or not powerful enough shocks to accurately learn what to do. 
            Our dog collar uses strain gauges to determine when the dog is actually pulling and by how much force.
            From there this is communicated to an MCU who is then able to activate vibration motors on the color 
            when the strain reaches certain levels and make the vibration equal to the gauge readouts. Along with our 
            collar is an app that displays the readings from the strain gauge. This way a dog owner is able to track 
            and see how much their dog pulled on their collar to be able to see the progress that their pet is making.
        </p>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Deliverables</h2>
        <ul class="list-disc pl-5">
            <li>A collar that vibrates based on the force the user’s dog is pulling and sends these leash-pulling statistics from the collar to an app via bluetooth.</li>
            <li>Stretch goal: have a collar that also detects the direction in which the user’s dog is pulling and can isolate the vibration to that side.</li>
        </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Critical Features</h2>
        <ul class="list-disc pl-5">
            <li>Able to differentiate the amount of force from the dog’s pulling</li>
            <li>Able to track accurate leash-pulling statistics</li>
            <li>Able to emit vibration that corresponds to the amount of force at which the dog is pulling</li>
            <li>Stretch goal: Able to identify the direction the dog is pulling and isolate the vibrations to that side of the collar.</li>
        </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Performance Metrics</h2>
        <ul class="list-disc pl-5">
            <li>Vibration is delivered for the proper event</li>
            <li>Force of pull is transmitted to app</li>
            <li>Vibration is proportional to the force readout</li>
        </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Milestones</h2>
        <ul class="list-disc pl-5">
            <li>Sensor/sensing method selection with parallel communication to a computer</li>
            <li>Connection and readouts from the sensors</li>
            <li>Communication to a computer</li>
            <li>Activation vibration motors from MCU</li>
            <li>Linking activation of the motors to sensor readouts</li>
            <li>Making adjustable</li>
        </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Responsibilities</h2>
        <ul class="list-disc pl-5">
            <li>GPIO Functionality - Everyone</li>
            <li>Bluetooth communication - Lucy, Quentin</li>
            <li>App development - Quentin, Lucy</li>
            <li>Strain Gauge/CAD Design - Mason</li>
            <li>Accelerometer - Diana</li>
            <li>Linking accelerometer to vibration - Everyone</li>
            <li>Final Technical Report - Everyone</li>
            <li>Weekly Lab Notebooks - Diana</li>
        </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Materials</h2>
        <ul class="list-disc pl-5">
            <li>MCU: ESP32 or ESP82</li>
            <li>Strain gauge</li>
            <li>Vibrational motor discs</li>
            <li>Dog collar</li>
        </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Budget</h2>
        <p>
            $300<br>
            MCU: ESP32S ($11)<br>
            $289 left
        </p>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Risks</h2>
        <ul class="list-disc pl-5">
            <li>Accuracy of force detection</li>
            <li>Accuracy of direction detection</li>
        </ul>
    </section>

    <section class="bg-white p-5 rounded shadow mb-6">
        <h2 class="text-xl font-semibold mb-4">Risk Mitigation</h2>
        <p>
            We are going to focus on getting basic functionality of proportional vibration to the pull of the dog.
            From there, we will try to tackle the direction portion of the project.
        </p>
    </section>

</div>
