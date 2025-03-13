import React from 'react'
import { MdCall } from "react-icons/md";

const Mymsg1 = () => {
  return (
    <div>
        <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full justify-center">
            <div className="text-neutral-700 w-full md:w-[60%] bg-white/50 p-6 md:p-8 rounded-2xl text-lg md:text-xl font-bold shadow-md">
              <p className="text-center leading-relaxed">
                Are Kya Huaa Navyaaa Itni Sad kyu ho tum? Koi problem hai kuch
                ho gya kya agar huaa hai to bta do agar nhi bta sakti to aisa
                kro upar na message kr do ispe koi nhi dekhega kabhi kisi ko nhi
                pta lagega aur tum strong bhi rahogi ye sochke ki tumne to kisi
                ko bataya hi nhi, agar koi badi tension ho gyi hai to call kr lo
                kisi ko koi nhi tumhe weak nhi samjhega...
              </p>
            </div>

            <div className="flex gap-6 md:flex-col items-center text-[#ff4e6b] ">
              <a
                href="tel:+918126620140"
                className="h-24 w-28 bg-white/50 rounded-2xl flex flex-col justify-center items-center gap-2 shadow-md hover:bg-white/70 transition"
              >
                <MdCall className="text-3xl font-bold" />
                <h4 className="text-base font-bold">Juhi</h4>
              </a>
              <a
                href="tel:+918126620140"
                className="h-24 w-28 bg-white/50 rounded-2xl flex flex-col justify-center items-center gap-2 shadow-md hover:bg-white/70 transition"
              >
                <MdCall className="text-3xl font-bold" />
                <h4 className="text-base font-bold">Manvi</h4>
              </a>
            </div>
          </div>




    </div>
  )
}

export default Mymsg1