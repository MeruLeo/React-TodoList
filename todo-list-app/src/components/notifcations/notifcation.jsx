import "./notifcation.css";

const Notifcation = ({ icon, msg, status, statusColor }) => {
  return (
    <div
      className={`bg-journal-body text-white notification border-3 border-purple-org flex absolute items-center justify-between top-20 w-72 p-2 m-2 rounded-3xl`}
    >
      <img src={icon} className={`w-16 h-16`} alt="notif icon" />
      <p className={`m-0 p-0 font-bold`}>{msg}</p>
      <i
        className={`fa-solid fa-circle-${status} text-2xl text-${statusColor}-500`}
      ></i>
    </div>
  );
};

export default Notifcation;
