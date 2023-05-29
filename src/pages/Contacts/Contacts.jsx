import { HomeIcon, YoutubeLogo } from "assets";
import "./styles.css";

export const Contacts = () => {
  return (
    <>
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
