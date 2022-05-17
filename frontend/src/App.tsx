import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="h-screen w-screen flex flex-col bg-brown-500">
      <header class="h-5/6 bg-brown-500 px-4 py-4 w-screen flex items-center justify-center flex-col gap-4 md:gap-8">
        <h1 class="font-bold text-4xl md:text-8xl text-gray-200 text-center">
          WhichChipotle
        </h1>
        <h3 class="text-lg md:text-4xl text-gray-200 tracking-widest text-center">
          Find the best 
          <a
            href="https://chipotle.com"
            target="_blank"
            rel="noreferrer"
            class="underline"
          >
            Chipotle
          </a> near you
        </h3>
        <hr />
        <div class="flex justify-center items-stretch self-stretch py-8">
          <div class="flex flex-col-reverse md:flex-row gap-6 justify-around items-center md:w-1/2">
            <div class="flex flex-1 flex-col md:flex-row justify-center items-stretch">
              <input 
                class="
                  outline-none border-4 border-fg-200 shadow-lg 
                  rounded-t-xl md:rounded-none md:rounded-l-xl
                  text-lg md:text-xl
                  w-full 
                  py-3 px-3 
                  text-gray-700 
                  leading-tight 
                  focus:border-fg-400 focus:shadow-border
                " 
                id="username" 
                type="text" 
                placeholder="Address" 
              />
              <button 
                class="
                flex flex-row justify-center items-center
                gap-2 md:gap-4 
                border-4 border-fg-400 outline-none 
                hover:bg-fg-400 
                text-white font-bold text-lg md:text-xl 
                py-2 px-3 md:py-4 md:px-6 
                rounded-b-xl md:rounded-none md:rounded-r-xl
                "
                onClick={() => alert("Soz, this doesn't work yet. It'll be there soon I promise!")}
              >
                <svg stroke="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                Search
              </button>
            </div>
            <div class=" text-white">
              or
            </div>
            <button 
              class="flex gap-4 bg-fg-A hover:bg-fg-400 text-white font-bold text-xl py-4 px-6 rounded-xl"
              onClick={() => alert("Soz, this doesn't work yet. It'll be there soon I promise!")}
            >
              <svg stroke="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
              Find Where I Am
            </button>
          </div>
        </div>
      </header>
      <footer class="flex-1 bg-gray-600 w-screen flex items-center justify-center flex-col gap-8">

      </footer>
    </div>
  );
};

export default App;
