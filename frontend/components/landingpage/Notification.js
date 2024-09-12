"use client";

import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Notification = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className={`absolute top-5 right-5 p-4 rounded shadow-lg duration-300 flex items-center ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white z-50`}
    >
      {type === "success" ? (
        <FaCheckCircle className="mr-2" />
      ) : (
        <FaTimesCircle className="mr-2" />
      )}
      <span>{message}</span>
    </div>
  );
};

export default Notification;
