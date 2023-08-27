import { useEffect, useRef } from "react";
import { SidebarProps } from "../types/sidebar";
import Star from "../assets/star.png";

const Sidebar: React.FC<SidebarProps> = ({ show, setShow }) => {
  const trigger = useRef<any>(null);
  const modal = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!modal.current) return;
      if (
        !show ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setShow(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  const logoutHandle = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    window.location.replace("/login");
  };

  // ? close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!show || keyCode !== 27) return;
      setShow(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className={`container_sidenav ${show ? "active" : ""}`}>
      <div className={"sidenav"}>
        <div>
          <img src={Star} width={100} alt="Awards" />
        </div>
        <div>
          <h2>Awards Menu</h2>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Cards</a>
          </li>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="#" onClick={(e) => logoutHandle(e)}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
