<script>
  import { content } from "../stores.js";
</script>

<section id="about" class="mt-24 md:mt-32 pb-16 md:pb-32 relative">
  <div
    id="backdrop"
    class="absolute left-0 w-full right-0 bottom-0 top-1/6 bg-gray-100" />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="md:hidden text-4xl md:text-6xl">
      {@html $content.about.headline}
    </h2>
    <img
      class="md:w-1/2 relative mt-8"
      src="/about-me.jpg"
      alt="Stephan Simonett" />
    <div class="flex md:-mt-1/6 relative z-30">
      <div class="md:w-3/12" />
      <div class="md:p-24 md:shadow-2xl md:w-9/12 md:bg-white">
        <h2 class="hidden md:block text-4xl md:text-6xl">
          {@html $content.about.headline}
        </h2>
        <p class="text-2xl mt-4 md:text-4xl text-gray-500 font-light">
          {$content.about.subline}
        </p>
        <p class="text-lg md:text-2xl mt-6 md:mt-10">
          {@html $content.about.body}
        </p>
      </div>
    </div>
  </div>
</section>
