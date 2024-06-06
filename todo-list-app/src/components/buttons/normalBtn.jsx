import "./../account/login/login.css";

const NormalBtn = ({ content }) => {
  return (
    <button
      className={`gra-btn m-4 text-white font-bold w-full border-1 border-purple-org p-2 rounded-lg outline-0 transition-all duration-200 hover:bg-white`}
    >
      {content}
    </button>
  );
};

export default NormalBtn;
