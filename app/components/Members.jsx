import React from "react";
import styles from "../style";
import { FaArrowAltCircleRight } from "react-icons/fa";

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
        image: "../OFE.jpg",
        title: "OFE",
    },
];

const Members = () => {
    return (
        <section className={`${styles.paddingY} ${styles.padding}`}>
            <div className="container mx-auto">
                <h1 className="text-white text-3xl sm:text-5xl font-bold m-6 text-center">Our Participants</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {Play.map(({ id, image, title }) => (
                        <div key={id} className="lg:w-[22%] md:w-[45%] sm:w-full bg-slate-900 p-4 mb-4">
                            <div className="relative w-full h-24">
                                <img
                                    src={image}
                                    alt="img"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-2">
                                <h1 className="text-sm text-white font-semibold mt-2">{title}</h1>
                            </div>
                            <div>
                            <FaArrowAltCircleRight className="text-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Members;
