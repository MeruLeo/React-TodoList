import "./footer.css";

const helpFulLinks = [
  {
    icon: <i className="fi fi-tr-house-blank"></i>,
    href: "#",
    title: "صفحه اصلی",
  },
  {
    icon: <i class="fi fi-tr-guide-alt"></i>,
    href: "#",
    title: "درباره ما",
  },
  {
    icon: <i class="fi fi-tr-customer-service"></i>,
    href: "#",
    title: "ارتباط با پشتیبانی",
  },
  {
    icon: <i className="fi fi-tr-bugs"></i>,
    href: "#",
    title: "گزارش باگ",
  },
];
const devingLinks = [
  {
    icon: <i className="fi fi-tr-square-terminal"></i>,
    href: "#",
    title: "دوینگ",
  },
  {
    icon: <i className="fi fi-tr-square-terminal"></i>,
    href: "#",
    title: "...",
  },
  {
    icon: <i className="fi fi-tr-square-terminal"></i>,
    href: "#",
    title: "...",
  },
];
const socialLinks = [
  {
    icon: <i className="fi fi-brands-instagram"></i>,
    href: "#",
    title: "اینستاگرم",
  },
  {
    icon: <i className="fi fi-brands-telegram"></i>,
    href: "#",
    title: "تلگرام",
  },
  {
    icon: <i className="fi fi-brands-discord"></i>,
    href: "#",
    title: "دیسکورد",
  },
  {
    icon: <i className="fi fi-brands-youtube"></i>,
    href: "#",
    title: "یوتیوب",
  },
];

const FooterLink = ({ href, title, icon }) => (
  <li className="flex items-center footer-link">
    {icon}
    <a
      href={href}
      className="no-underline text-gray-400 transition-all hover:text-purple-org"
    >
      {title}
    </a>
  </li>
);
const FooterLinkWrapper = ({ title, links }) => (
  <ul className="relative m-0 p-4">
    <h5>{title}</h5>
    {links.map((link, index) => (
      <FooterLink
        key={index}
        href={link.href}
        title={link.title}
        icon={link.icon}
      />
    ))}
  </ul>
);

const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};

const Footer = () => {
  return (
    <>
      <footer className="relative top-[55rem] bg-header-dark text-white h-96 p-4 flex items-center border-t-4 border-background-dark justify-center flex-col">
        <div className="bg-background-dark p-1 w-fit rounded-3xl absolute -top-14">
          <img
            className="w-24 h-24 rounded-3xl"
            src="src/assets/ToDingOrg.png"
            alt="toding logo"
          />
        </div>
        <button
          onClick={scrollToTop}
          href="#"
          className="bg-header-dark absolute left-0 -top-5 text-purple-org w-11 transition-all duration-300 ease-in hover:bg-purple-org hover:text-header-dark flex items-center justify-center border-1 border-purple-org rounded-full h-11"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <h2 className="absolute text-6xl right-0 -top-10 font-fedra">تودینگ</h2>
        {/* <div className="flex items-center justify-center"></div> */}
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between">
            <FooterLinkWrapper title={"لینک های مفید"} links={helpFulLinks} />
            <FooterLinkWrapper title={"ما"} links={devingLinks} />
            <FooterLinkWrapper title={"راه های ارتباطی"} links={socialLinks} />
          </div>
          <div>
            <img src="src/assets/books.png" className="w-48 h-48" alt="books" />
          </div>
          <div className="flex justify-between flex-col p-4">
            <h3 className="font-fedra">عضویت در خبرنامه</h3>
            <p>
              با عضویت در خبرنامه از آخرین اخبار تودینگ ،آپدیت ها و ... مطلع
              بشوید.
            </p>
            <div className="bg-journal-header w-full flex items-center justify-between p-2 rounded-full">
              <input
                type="text"
                className="outline-none bg-transparent p-2"
                placeholder="ایمیل خود را وارد کنید"
              />
              <button className="bg-purple-org p-2 w-20 rounded-full">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
