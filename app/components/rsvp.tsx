/* This example requires Tailwind CSS v2.0+ */

export default function Rsvp() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    // Netlify will accept form submissions to any valid URL
    // by submitting to a static file we skip Remix's POST catcher
    fetch("/favicon.ico", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        window.location.href = "/thanks/";
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            RSVP by 7th May
          </p>
          <div className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Enter your name + the name of some other fool who want in
                </h3>

                <form
                  className="mt-5 sm:flex sm:items-center"
                  method="post"
                  name="Test Form"
                  data-netlify="true"
                  action="/thanks/"
                  onSubmit={handleSubmit}
                >
                  <input name="form-name" value="Test Form" type="hidden" />
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="name" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="KickAss Name"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    RSVP to Party!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
