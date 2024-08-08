import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/index";

const Feed = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    //  onAuthStateChanged fonksiyonu bir "unsubscribe" fonksiyonu döndürür. Bu, unsub değişkenine atanır ve çağrıldığında, oturum açma durumu değişikliklerini dinlemeyi durdurur.
    const unsub = onAuthStateChanged(auth, (user_data) => {
      setUser(user_data);
    });

    // unsub() çağrıldığında, onAuthStateChanged tarafından dinlenen oturum değişiklikleri durdurulur ve bellek sızıntılarını önlemek için bu kullanışlıdır.
    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="feed h-screen bg-black text-white overflow-hidden">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;
