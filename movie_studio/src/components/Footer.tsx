import Image from "next/image";
import Link from "next/link";

const infoArray = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Press", href: "/press" },
];

const contactArray = [
  { title: "Videos", href: "/videos" },
  { title: "Gaming", href: "/gaming" },
  { title: "Travel", href: "/travel" },
  { title: "Music", href: "/music" },
  { title: "Sports", href: "/sports" },
];

const Information = ({ contact }: { contact?: boolean }) => {
  const links = contact ? contactArray : infoArray;

  return (
    <div className="flex flex-col text-gray-300">
      {links.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group"
        >
          <span className="w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200" />
          {item.title}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* About Us Section */}
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          About us
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="https://i.ibb.co/ZW0SbjJ/logo-dark.png"
            alt="Streamtube Logo"
            width={120}
            height={100}
            priority
            className="cursor-pointer w-40 h-auto"
          />
        </Link>
        <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
          streamtube is your destination for discovering movies from around the world.
          Powered by data from The Movie Database (TMDB), we bring you the latest trailers,
          top-rated films, and trending titles — all in one place.
          Whether you're into blockbusters or hidden gems, streamtube helps you explore,
          search, and enjoy movie content like never before.
        </p>
      </div>

      {/* Information Links */}
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Information
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information />
      </div>

      {/* Category Links */}
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Category
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information contact />
      </div>

      {/* Contact Info */}
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Connect with Us
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <div className="text-gray-300 text-sm flex flex-col gap-2">
          <p>
            Phone: <span className="text-white font-medium">001 7728 3369</span>
          </p>
          <p>
            Email: <span className="text-white font-medium">jgtech1205@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
