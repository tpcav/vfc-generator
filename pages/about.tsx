import Link from "next/link"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function About() {
  return (
    <div className="relative overflow-hidden bg-white py-16 mt-10">
      <div>
        <nav className="z-10 bg-white shadow-md fixed top-0 w-full">
          <div className="container mx-auto px-6 py-2 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-gray-900">Linkwear</Link>
            <ul className="md:flex md:items-center">
              <li className="mr-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              </li>
              <li className="mr-6">
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              </li>
              <li className="mr-6">
                <Link href="mailto:tpc75@drexel" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="z-1 hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-blue-600">Learn to:</span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Create your own vCards
            </span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-500">
            Start by filling out the information you want to be on your VCF file.
          </p>
        </div>
        <div className="prose prose-lg prose-blue mx-auto mt-6 text-gray-500">
          <ul role="list">
            <li>Enter your name</li>
            <li>Phone number</li>
            <li>Email</li>
            <li>Address</li>
            <li>Website</li>
            <li>and more +</li>
          </ul>
          <p>
            Once you are finished, hit the <strong> generate button</strong>.
            Now your vCard link is created.
          </p>
          <div className='text-center'>
            <button className="bg-blue-500 hover:bg-blue-700 text-lg text-white text-center	font-bold py-2 px-4 mt-2 mb-2 rounded-lg focus:outline-none focus:shadow-outline">
              <Link href="/" className="text-white no-underline	">Create</Link>
            </button>
          </div>
          <h2>The future of this brand.</h2>
          <p>
            Linkwear will focus on making wearable RFID/NFC technology. Our products are intented to
            look like regular wearables. Including, rings, braclets, necklaces. 
          </p>
          <blockquote>
            <p>
              RFID technology and applications are revolutionizing supply-chain management and
              are enabling companies to obtain an enormous amount of data in a short period of time.
              It's only in its infancy state, but it's going to affect nearly all industries.
            </p>
          </blockquote>
          <p>- Paul Peercy</p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://cdn-shop.adafruit.com/1200x900/2804-00.jpg"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running.</h2>
          <p>
            Purus morbi dignissim senectus mattis <Link href="#">adipiscing</Link>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
      </div>
    </div>
  )
}
