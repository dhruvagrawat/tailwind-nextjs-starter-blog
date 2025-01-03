import Link from './Link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative h-[700px] w-full bg-sky-200">
      {/* Background Image */}
      <Image
        src="/static/defImages/fbg.png"
        alt="Footer background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full px-[5%]">
        {/* Top Section - Feedback and Links in single row */}
        <div className="flex w-full justify-between  py-[5%]">
          {/* Feedback Section - 40% width */}
          <div className="w-[40%]">
            <div className="flex items-end">
              <Image
                src="/static/defImages/fear.png"
                alt="Hindi Logo"
                width={400}
                height={200}
                className="mr-[5%]"
              />
              <button className="rounded-full bg-green-200 px-[5%] py-2">Submit</button>
            </div>
            <input
              type="text"
              placeholder="Type your Message"
              className="mt-4 w-full rounded-full px-[5%] py-2 text-black"
            />
          </div>

          {/* Links Section - 50% width */}
          <div className="flex w-[50%] justify-between">
            {/* Socials Column */}
            <div className="w-[30%]">
              <h3 className="mb-[10%] text-xl font-bold text-blue-500">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Pinterest
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

            {/* Others Column */}
            <div className="w-[30%]">
              <h3 className="mb-[10%] text-xl font-bold text-blue-500">Others</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Livebuy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Main Column */}
            <div className="w-[30%]">
              <h3 className="mb-[10%] text-xl font-bold text-blue-500">Main</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Livebuy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Livebuy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    Livebuy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section with 200px padding */}
        <div className="pb-[200px] text-center">
          {/* People illustration container */}
          <div className="mx-auto w-[80%]">{/* Add your people illustrations here */}</div>
        </div>

        {/* Visit Button */}
        <div className="absolute bottom-[10%] right-[10%]">
          <Link
            href="#"
            className="rounded-full bg-orange-400 px-[5%] py-3 text-white hover:bg-orange-500"
          >
            ∞VisitLivebuy
          </Link>
        </div>
      </div>
    </footer>
  )
}
