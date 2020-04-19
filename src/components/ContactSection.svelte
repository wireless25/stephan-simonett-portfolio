<script>
  const handleForm = () => {
    console.log("hallo");
  };
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
  <h2 class="text-6xl">
    <span class="font-black">You like</span>
    <span class="font-light">what you see?</span>
  </h2>
  <p class="text-2xl mt-10 max-w-4xl mx-auto">
    I’m always interrested in meeting new people and work on cool projects in my
    spare time. If you like to talk about the web, drink a coffee or realize a
    project together, drop your email and we’ll get in touch.
  </p>
  <form on:submit|preventDefault={handleForm} class="mt-24">
    <div class="flex w-8/12 mx-auto">
      <input
        type="text"
        class="bg-gray-100 text-3xl py-2 pl-4 flex-grow"
        placeholder="hello@stephansimonett.ch" />
      <button
        type="submit"
        class="bg-blue-brand font-black text-3xl py-2 px-16 ml-4 text-white
        tracking-wide">
        Say hi
      </button>
    </div>
    <p class="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
      If you don’t like to give away your email, just open your email client a
      send me a good old email to hello@stephansimonett.ch
    </p>
  </form>
</div>
