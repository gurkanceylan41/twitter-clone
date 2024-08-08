import { NavLink } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

import Post from "../../components/Post";
import Loader from "../../components/Loader/index";

const Main = ({ user }) => {
  const [tweets, setTweets] = useState();

  useEffect(() => {
    //Verileri alınıcak koleksiyonun referansını al
    const ref = collection(db, "tweets");

    // Sorgu ayarlarını yap
    const q = query(ref, orderBy("createdAt", "desc"));

    // Koleksiyona abone
    const unsub = onSnapshot(q, (snapshot) => {
      // Tweet'lerin geçici olarak tutulucagı dizi
      const temp = [];
      // doc'ların içerisindeki veriye erişip geçici diziye aktar
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      // State'i güncelle
      setTweets(temp);
    });

    // Bileşen ekrandan ayrıldıgında aboneliği durdur
    return () => unsub();
  }, []);

  return (
    <main className=" o border border-zinc-600 overflow-y-auto  ">
      <div>
        <header className="fixed top-0 w-[41.5%] border-b border-zinc-600 p-4 flex justify-between px-[95px] bg-black z-50">
          <NavLink>For You</NavLink>
          <NavLink to={"feed"}>Following</NavLink>
        </header>

        {/* Header'ın altında içeriklerin üst üste binmemesi için yeterli padding-top ekleniyor */}
        <div className="pt-[72px]">{/* Diğer içerikler buraya gelecek */}</div>
      </div>

      <Form user={user} />

      {!tweets ? (
        <div className="flex justify-center mt-5 scale-[1.3]">
          <Loader />
        </div>
      ) : (
        tweets.map((tweet) => <Post tweet={tweet} key={tweet.id} />)
      )}
    </main>
  );
};

export default Main;
