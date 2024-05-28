import "./home.css";

const MagicBtn = ({ content, icon }) => {
  return (
    <>
      <a href="#" className="cssbuttons-io">
        <span>
          {icon}
          {content}
        </span>
      </a>
    </>
  );
};

export default MagicBtn;
