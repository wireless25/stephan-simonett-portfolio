<script>
  const handleForm = () => {
    console.log("hallo");
  };
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-32">
  <h2 class="text-4xl md:text-6xl">
    <span class="font-black">You like</span>
    <span class="font-light">what you see?</span>
  </h2>
  <p class="text-lg md:text-2xl mt-6 md:mt-10 max-w-4xl mx-auto">
    I’m always interrested in meeting new people and work on cool projects in my
    spare time. If you like to talk about the web, drink a coffee or realize a
    project together, drop your email and we’ll get in touch.
  </p>
  <form on:submit|preventDefault={handleForm} class="mt-12 md:mt-24">
    <div class="md:flex items-start md:w-8/12 mx-auto">
      <div class="flex-grow">
        <input
          type="text"
          class="bg-gray-100 text-xl md:text-3xl py-2 pl-4 w-full"
          placeholder="hello@stephansimonett.ch" />
        <p class="text-sm text-gray-500 mt-2 max-w-2xl mx-auto text-left">
          If you don’t like to give away your email, just open your email client
          a send me a good old email to hello@stephansimonett.ch
        </p>
      </div>
      <button
        type="submit"
        class="bg-blue-brand font-black text-xl md:text-3xl py-2 px-16 mt-6
        md:mt-0 block text-white tracking-wide md:ml-4 md:flex-none">
        Say hi
      </button>
    </div>
  </form>
</div>
