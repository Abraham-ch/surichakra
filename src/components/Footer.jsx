export default function Footer() {
  return (
    <div className="text-black w-full pt-6 pb-8 px-8 bg-white  flex flex-col justify-center items-center Frounded">
      <div className="flex flex-col justify-center w-full items-center">
        <div className="grid grid-cols-3 lg:grid-cols-9 gap-y-4 grid-rows-1 px-8 mx-auto max-w-7xl py-10 border-b-2 border-gray-300/50">
          <ul className="flex flex-col gap-y-2 col-span-1 lg:col-span-2 py-8 mx-auto lg:mx-0">
            <li>
              <h3 className="font-semibold roboto">Product</h3>
            </li>
            <li className="text-sm">Employee Database</li>
            <li className="text-sm">Payroll</li>
            <li className="text-sm">Absenses</li>
            <li className="text-sm">Time tracking</li>
            <li className="text-sm">Shift planner</li>
            <li className="text-sm">Recruiting</li>
          </ul>

          <ul className="flex flex-col gap-y-2 col-span-1 lg:col-span-2 py-8 mx-auto lg:mx-0">
            <li>
              <h3 className="font-semibold roboto">Information</h3>
            </li>
            <li className="text-sm">FAQ</li>
            <li className="text-sm">Blog</li>
            <li className="text-sm">Support</li>
          </ul>

          <ul className="flex flex-col gap-y-2 col-span-1 lg:col-span-2 py-8 mx-auto lg:mx-0">
            <li>
              <h3 className="font-semibold roboto">Company</h3>
            </li>
            <li className="text-sm">About us</li>
            <li className="text-sm">Careers</li>
            <li className="text-sm">Contact us</li>
            <li className="text-sm">Lift Media</li>
          </ul>

          <div className="flex flex-col gap-y-2 bg-slate-200 px-10 py-8 rounded-lg col-span-3 row-start-1 col-start-1 lg:col-start-7 lg:col-span-3">
            <h3 className="font-semibold roboto pb-4">Subscribe</h3>
            <div className="flex border-2 rounded-lg">
              <input
                type="email"
                className="px-4 py-3 w-full"
                placeholder="Email address"
              />
              <button className="rounded-r-lg bg-blue-500 text-white px-3 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500 pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam alias dolor commodi, quasi aspernatur pariatur ea
              explicabo totam nemo eveniet.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full items-center pt-8 px-24 pb-4">
        <div>
          <a href="#">Surichakra</a>
        </div>
        <div className="flex justify-center text-sm roboto font-semibold">
          <a href="#" className="px-3">
            Therms
          </a>
          <a href="#" className="px-3 ">
            Privacy
          </a>
          <a href="#" className="px-3 ">
            Cookies
          </a>
        </div>
        <span>
          <ul className="flex gap-x-3">
            <li>
              <a
                href="https://wa.me/956394308"
                target="_blank"
                className="hover:text-green-600 transition-all"
              >
                <svg
                  className="hover:scale-105"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/skytech-la/?originalSubdomain=pe"
                target="_blank"
                className="hover:text-blue-600 transition-all"
              >
                <svg
                  className="hover:scale-105"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:ascaytaos@gmail.com"
                target="_blank"
                className="transition-all hover:text-red-600"
              >
                <svg
                  className="hover:scale-105"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
