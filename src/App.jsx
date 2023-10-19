import logo from "./assets/react.svg";
import groupPic from "./img/Group.png";

export default function App() {
  return (
    <div className="flex justify-center mt-4">
      <div
        className="text-white
         w-[550px] h-[550px]
        bg-secondary-400
      "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center bg-secondary-500 h-[91px]">
          <div className="flex items-center">
            <img
              src={logo}
              alt="ReactFacts"
              className="h-[28.93] w-[28.93] ml-5 mr-2
              "
            />
            <p className="text-primary-300 font-bold text-[22.25px]">
              ReactFacts
            </p>
          </div>
          <p className="mr-5">React Course - Project 1</p>
        </div>

        {/* LIST */}
        <div className="flex flex-col items-center justify-between mt-10">
          <h1 className="self-start  ml-7 text-[39.06px] font-bold mb-7">
            Fun facts about React
          </h1>
          <div className="flex justify-between w-full">
            <ul className="list-image-[url(./img/ellipse.png)] ml-28 mt-3 ">
              <li className="pb-4">Was first release in 2013</li>
              <li className="pb-4">Was originally created by Jordan Walke</li>
              <li className="pb-4">Has well over 100K stars on Github</li>
              <li className="pb-4">Is maintained by Facebook</li>
              <li className="pb-4">
                Powers thousands of enterprise apps, including mobile apps
              </li>
            </ul>
            <img
              src={groupPic}
              alt="React white icon cut in a half"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
