import instagramIcon from "../assets/instagram-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import whatsappIcon from "../assets/whatsapp-icon.svg";

export const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 border-t-4 rounded-t-3xl">
      <section className="p-8 flex justify-around">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">
            Designer Awards 2022
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum
            leo tellus.
          </p>
          <p className="text-xl font-semibold mb-2 text-white">
            @blablabla.com
          </p>
        </div>
        <div>
          <ul className="text-white">
            <li>Lore</li>
            <li>Ipsum</li>
            <li>Consectetur</li>
            <li>Duis rutrum</li>
          </ul>
          <div className="h-8 w-28 flex items-center justify-between">
            <button className="h-full rounded-full bg-orange-500 p-1">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="h-full w-auto"
              />
            </button>
            <button className="h-full rounded-full bg-orange-500 p-1">
              <img src={emailIcon} alt="Email" className="h-full w-auto" />
            </button>
            <button className="h-full rounded-full bg-orange-500 p-1">
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="h-full w-auto"
              />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};
