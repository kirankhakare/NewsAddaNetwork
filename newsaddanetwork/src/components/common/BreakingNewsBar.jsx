import { useEffect, useState } from "react";
import API from "../../services/api";

export default function BreakingNewsBar() {

  const [headlines,setHeadlines] = useState([]);

  // FETCH BREAKING NEWS FROM BACKEND
  useEffect(()=>{

    const fetchBreaking = async()=>{
      try{
        const res = await API.get("/breaking");

        // ✅ FULL DATA STORE (title + link)
        setHeadlines(res.data);

      }catch(err){
        console.log(err);
      }
    };

    fetchBreaking();

  },[]);

  // IF NO DATA
  if(headlines.length === 0){
    return null;
  }

  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="flex items-center">

        {/* LABEL */}
        <div className="bg-black px-4 py-2 font-bold whitespace-nowrap">
          ताज्या बातम्या
        </div>

        {/* SCROLL AREA */}
        <div className="overflow-hidden w-full">
          <div className="ticker-wrapper px-6 py-2 font-semibold whitespace-nowrap">

            {/* LOOP CONTENT */}
            {[...headlines, ...headlines].map((item, index) => (

              item.link ? (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-10 hover:underline cursor-pointer"
                >
                  🔴 {item.title}
                </a>
              ) : (
                <span key={index} className="mx-10">
                  🔴 {item.title}
                </span>
              )

            ))}

          </div>
        </div>

      </div>
    </div>
  );
}