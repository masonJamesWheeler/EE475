<script>
    import australianShepherd from "../lib/images/dogs/Australian_Shepherd.png";
    import germanShepherd from "../lib/images/dogs/German_Shepherd.png";
    import bulldog from "../lib/images/dogs/Bulldog.png";
    import doberman from "../lib/images/dogs/Doberman.png";
    import goldenRetriever from "../lib/images/dogs/Golden_Retriever.png";
    import pitbull from "../lib/images/dogs/Pitbull.png";
    import labrador from "../lib/images/dogs/Labrador.png";
    import greatDane from "../lib/images/dogs/Great_Dane.png";
    import husky from "../lib/images/dogs/Husky.png";
    import chowChow from "../lib/images/dogs/Chow_Chow.png";
    import corgi from "../lib/images/dogs/Corgi.png";

    let dogs = [
        australianShepherd,
        germanShepherd,
        bulldog,
        doberman,
        goldenRetriever,
        pitbull,
        labrador,
        greatDane,
        husky,
        chowChow,
        corgi
    ];
    let currentDog = 0;

    setInterval(() => {
        currentDog = (currentDog + 1) % dogs.length;
    }, 10000); // Change every 10 seconds
</script>

<style>
    body, html {
        @apply m-0 p-0;
    }
    body, html {
        @apply m-0 p-0;
    }

    img[data-active='false'] {
        opacity: 0;
    }

    img[data-active='true'] {
        opacity: 1;
    }

</style>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<div class="flex flex-col md:flex-row min-w-fit h-full bg-gradient-to-b from-blue-200 to-blue-100 p-4 md:p-16 items-center justify-center">
    <!-- Left: Image Card -->
    <div class="w-full md:w-1/2 h-64 md:h-96 bg-white rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 relative mb-8 md:mb-0">
        {#each dogs as dog, index}
            <img class="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-1000" src={dog} alt="Dog breed" data-active={index === currentDog ? 'true' : 'false'} />
        {/each}
    </div>

    <!-- Right: Marketing Text -->
    <div class="w-full md:w-1/2 flex flex-col justify-center pl-4 md:pl-20 space-y-4 md:space-y-6">
        <div class="text-3xl md:text-4xl font-extrabold text-blue-900">Transform Your Walks with Our Vibrating Collar</div>
        <div class="text-base md:text-lg text-blue-800 leading-relaxed">
            Introducing a revolution in dog walking. Crafted with precision, our collar vibrates in tune with the force of your dog's pull, guiding them towards a tension-free stroll. Experience walks without the tug-of-war, safeguarding your dog from potential strain and elevating your walking bond. Because your furry friend deserves nothing but the best.
        </div>
    </div>    
</div>
