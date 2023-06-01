import { HomeIcon, YoutubeLogo } from "assets";
import "./styles.css";
import { useSelector } from "react-redux";

export const Contacts = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <h1>{count}</h1>
      <h1>Contacts Page</h1>
      <HomeIcon className="homeicon" />
      <div
        className="background"
        style={{
          backgroundImage: `url(${YoutubeLogo})`,
        }}
      ></div>
    </>
  );
};
