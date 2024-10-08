import { Link, useLocation } from "react-router-dom";
import style from './GoBackBtn.module.css';
import { useRef } from "react";

export const GoBackBtn = () => {
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? "/");
  console.log(location);

  // return <Link to={location.state ?? "/"} className={style.link}>Go Back</Link>;
  return <Link to={goBack.current} className={style.link}>Go Back</Link>;
};
