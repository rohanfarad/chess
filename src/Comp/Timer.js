import React, { useEffect, useState, memo } from "react";
import reactDom from "react-dom";

const Timer = () => {
  const [whiteCellTimer, setwhiteCellTimer] = useState(360);

  useEffect(() => {
    // setInterval(() => setwhiteCellTimer((prev) => prev - 1), 1000);
    setTimeout(() => {
      setwhiteCellTimer((prev) => prev - 1);
    }, 1000);
  }, [whiteCellTimer]);
  return <div>{whiteCellTimer}</div>;
};
export default memo(Timer);
