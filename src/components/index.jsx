import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Protected = () => {
  const [isAuth, setIsAuth] = useState();

  // Kullanıcıdan oturum verilerini al
  useEffect(() => {
    //Bu method kullanıcı oturumu izler
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  // Eğer kullanıcının yetkisi yoksa logine yönlendir
  if (isAuth === false) {
    return <Navigate to="/" replace />;
  }

  // Oturum açıksa alt route'un bileşenini ekrana bas
  return <Outlet />;
};

export default Protected;
