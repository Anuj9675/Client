import React from "react";
import styles from "../style";


const Play = [
    {
        id: 1,
        image: "../RDX.png",
        title: "RDX",

    },
    {
        id: 2,
        image: "../TNC.jpg",
        title: "TNC",

    },
    {
        id: 3,
        image: "../GXM.png",
        title: "GXM",

    },
    {
        id: 4,
        image: "../ENF.png",
        title: "ENF",

    },
    {
        id: 5,
        image: "../OFE.jpg",
        title: "OFE",

    },

];



const Members = () => {
    return (
        <section id="Team" className={`${styles.paddingY} ${styles.padding}`}>
            <div className="container mx-auto">
                <div className="text-white text-3xl lg:text-5xl font-bold mx-auto my-14 text-center">
                <h1 >Our Participant</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {Play.map(({ id, image, title }) => (
                        <div key={id} className="lg:w-[18%] md:w-[42%] sm:w-[100%] bg-slate-900 p-4 mb-4 rounded-t-lg">
                            <div className="relative w-full h-24">
                                <img
                                    src={image}
                                    alt="img"
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="p-2">
                                <h1 className="text-xl text-white font-semibold my-2">{title}</h1>
                            </div>
                            <div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Members;
