import { FooterLinksProps } from "@/interfaces";

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div className=" flex flex-col gap-6 list-none">
      <h2 className="text-sm lg:text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col shrink-0 space-y-2.5 text-xs lg:text-sm">
        <li className="cursor-pointer">
          <a href="#"></a>
          {links.first}
        </li>
        <li className="cursor-pointer">
          <a href="#"></a>
          {links.second}
        </li>
        <li className="cursor-pointer">
          <a href="#"></a>
          {links.third}
        </li>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-[#CACACA] md:px-[60px]">
      <div className="flex flex-col justify-between gap-8 pt-8 pb-24 min-h-[20rem] lg:flex-row">
        <div className="flex flex-col gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="32"
            viewBox="0 0 60 32"
            fill="#ffff"
          >
            <path
              d="M22.191 20.7395C22.191 26.7167 17.3455 31.5622 11.3683 31.5622C5.39112 31.5622 0.545654 26.7167 0.545654 20.7395C0.545654 14.7624 5.39112 9.91689 11.3683 9.91689C17.3455 9.91689 22.191 14.7624 22.191 20.7395ZM7.66264 20.7395C7.66264 22.7861 9.32173 24.4452 11.3683 24.4452C13.4149 24.4452 15.074 22.7861 15.074 20.7395C15.074 18.693 13.4149 17.0339 11.3683 17.0339C9.32173 17.0339 7.66264 18.693 7.66264 20.7395Z"
              fill="#fff"
            />
            <path
              d="M15.4735 9.91689H22.9374V31.5622H15.4735V9.91689Z"
              fill="#ffff"
            />
            <path
              d="M26.6693 4.69216L34.1332 0.960205V31.5622H26.6693V4.69216Z"
              fill="#ffff"
            />
            <path
              d="M53.8773 5.42319C54.1744 5.13749 54.6469 5.14679 54.9326 5.44394L59.071 9.74837C59.3567 10.0455 59.3474 10.518 59.0503 10.8037L42.4667 26.7476C42.1696 27.0333 41.6971 27.024 41.4114 26.7268L37.273 22.4224C36.9873 22.1252 36.9966 21.6527 37.2937 21.367L53.8773 5.42319Z"
              fill="#ffff"
            />
            <path
              d="M58.9383 21.5916C59.2294 21.8834 59.2289 22.356 58.9371 22.6471L54.7103 26.8648C54.4185 27.1559 53.9459 27.1554 53.6548 26.8636L37.4056 10.5792C37.1144 10.2874 37.1149 9.8148 37.4067 9.52363L41.6335 5.30599C41.9253 5.01482 42.3979 5.01533 42.6891 5.30713L58.9383 21.5916Z"
              fill="#ffff"
            />
          </svg>
          <p className="text-xs lg:text-sm leading-5 w-[85%]">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 items-start place-items-center ">
          <FooterLinks
            title="Explore"
            links={{
              first: "Apartment in Dubai",
              second: "Hotels in New York",
              third: "Villa in Spain",
              fourth: "Mansion in Indonesia",
            }}
          />

          <FooterLinks
            title="Company"
            links={{
              first: "About us",
              second: "Blog",
              third: "Career",
              fourth: "Customers",
              fifth: "Brand",
            }}
          />

          <FooterLinks
            title="Help"
            links={{
              first: "Support",
              second: "Cancel booking",
              third: "Refund process",
            }}
          />
        </div>
      </div>

      <hr className="opacity-20" />
      <div className="flex justify-between py-6 text-xs lg:text-sm">
        <div>
          <p>
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details{" "}
            <a href="#" className="text-[#34967C]">
              here
            </a>
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#">Terms of Service</a>
          <a href="#">Policy service</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
