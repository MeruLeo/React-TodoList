import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { UserContext } from "../../../App.jsx";
import { Link } from "react-router-dom";
import CheckboxInput from "../../form/checkbox.jsx";
import NormCheckbox from "../../form/normCheckbox.jsx";

const Profile = () => {
  const { userInfo, isAccDone } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://toding-8e7ea-default-rtdb.firebaseio.com/users.json",
      );
      const responseData = response.data;
      const users = Object.entries(responseData);

      const findCurrentUser = users.find(
        ([key, user]) => user.username === userInfo[1].username,
      );

      if (findCurrentUser) {
        console.log(userInfo);
      } else {
        console.log("User not found");
      }
    };

    if (userInfo) {
      fetchUsers();
    }
  }, [userInfo]);

  const ProfileHeader = () => {
    return (
      <div className="text-white relative top-16 p-4 flex justify-between items-center">
        <section className="flex items-center justify-center">
          <div className="border-3 border-purple-org p-2 rounded-full">
            <img
              src="src/assets/me.jpg"
              className="w-32 h-32 rounded-full"
              alt="profile avatar"
            />
          </div>
          <div className="mr-4">
            <h3 className="m-2">{userInfo[1].username}</h3>
            <span className="bg-blue-950 text-blue-400 p-2 rounded-xl">
              {userInfo[1].email}
            </span>
          </div>
        </section>
        <section className="bg-purple-950 text-purple-org border-1 border-purple-org font-bold p-2 rounded-xl">
          عضویت 1403/03/17
        </section>
      </div>
    );
  };

  const profilePartData = [
    {
      icon: (
        <i className="fi fi-tr-folders flex items-center justify-center"></i>
      ),
      title: "مدیریت پوشه ها",
    },
    {
      icon: (
        <i className="fi fi-tr-list-check flex items-center justify-center"></i>
      ),
      title: "مدیریت تسک ها",
    },
    {
      icon: (
        <i className="fi fi-tr-newspaper-open flex items-center justify-center"></i>
      ),
      title: "مدیریت ژورنال ها",
    },
    {
      icon: (
        <i className="fi fi-tr-customize-computer flex items-center justify-center"></i>
      ),
      title: "تنظیمات ظاهری",
    },
    {
      icon: (
        <i className="fi fi-tr-challenge flex items-center justify-center"></i>
      ),
      title: "تقویم کارها",
    },
    {
      icon: (
        <i className="fi fi-tr-user-pen flex justify-center items-center"></i>
      ),
      title: "مدیریت حساب",
    },
  ];

  const ProfilePart = ({ icon, title }) => {
    return (
      <li className="w-100">
        <Link
          to="#"
          className="flex transition-all hover:bg-journal-body p-4 bg-journal-border text-white border-3 border-purple-org rounded-3xl m-2 justify-between no-underline items-center"
        >
          <div className="flex items-center">
            <div className="ml-2 text-2xl">{icon}</div>
            <h5 className="m-0">{title}</h5>
          </div>
          <i className="fi fi-tr-angle-small-left flex items-center justify-center text-2xl"></i>
        </Link>
      </li>
    );
  };

  const Options = () => {
    return (
      <ul className="justify-center w-[50%] flex-col p-0 m-0 relative m-5 top-20 items-center flex">
        {profilePartData.map((data, index) => (
          <ProfilePart key={index} icon={data.icon} title={data.title} />
        ))}
      </ul>
    );
  };

  const accessibleTasks = [
    {
      title: "Go to gym",
      status: "undone",
    },
    {
      title: "Play warzone mobile",
      status: "undone",
    },
    {
      title: "Learning react",
      status: "undone",
    },
    {
      title: "Work on ToDing",
      status: "undone",
    },
  ];

  const AccessibleTodo = ({ title }) => {
    return (
      <li
        className={`text-white border-3 w-[100%] m-2 transition-all duration-200 p-4 bg-header-dark rounded-full ${isAccDone ? "border-green-500" : "border-red-500"}`}
      >
        <NormCheckbox title={title} />
      </li>
    );
  };

  const AccessibleTodos = () => {
    return (
      <div>
        <ul
          className={`justify-center bg-journal-border p-4 border-3 border-journal-body rounded-3xl text-white w-[30rem] right-0 flex-col relative m-5 top-20 items-center flex`}
        >
          <div className={`flex mb-4 items-center justify-between w-full`}>
            <h4 className={``}>دم دستی</h4>
            <button
              className={`bg-purple-org flex items-center rounded-xl justify-between p-2`}
            >
              <i className="fa-solid fa-circle-plus ml-2"></i>
              تسک جدید
            </button>
          </div>
          {accessibleTasks.map((task, index) => (
            <AccessibleTodo key={index} title={task.title} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{userInfo[1].username}</title>
      </Helmet>
      <ProfileHeader />
      <div className={`flex justify-between items-start`}>
        <Options />
        <AccessibleTodos />
      </div>
    </>
  );
};

export default Profile;
