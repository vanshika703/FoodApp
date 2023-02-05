import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste react op");
    }, 1000);
    console.log("use effect");

    //cleaning functions
    return () => {
      clearInterval(timer);
      console.log("use effect return");
    };
  }, []);

  console.log("render");

  return (
    <div>
      <h2>Profile</h2>
      <h3>Name : {props.name}</h3>
    </div>
  );
};

export default Profile;