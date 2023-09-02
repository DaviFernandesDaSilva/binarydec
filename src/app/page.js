export default function Home() {
  return (
    <main>
      <div>
        <div className="text-center h-screen grid place-items-center py-64">
          <h1 data-aos="fade-up" className="text-6xl font-bold">
            Binary a Decimal
          </h1>
          <img
            data-aos="fade-down"
            src="/images/dropdown.png"
            className="animate-bounce invert h-16"
          ></img>
        </div>
      </div>
      <div>
        <div className="text-center h-screen grid place-items-center">
          <div class="flex flex-col items-center justify-center px-16 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href=""
              class="flex items-center mb-12 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Decimal to Binary
            </a>
            <div
              class="your-element"
              data-tilt
              data-tilt-max="50"
              data-tilt-speed="400"
              data-tilt-perspective="500"
            ></div>

            <div class="w-screen hover:scale-110 duration-300 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-12 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Binary to Decimal
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="binario"
                      class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Binary
                    </label>
                    <input
                      type="text"
                      name="binario"
                      id="binario"
                      class="h-16 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Binary"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-gray-700 hover:bg-gray-600 hover:scale-110 duration-150 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Traduzir
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
