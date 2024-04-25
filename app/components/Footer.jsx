import styles from "../style";
import { FaWhatsapp, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';


const Footer = () => (
  <section id="social" className={`${styles.flexCenter} ${styles.paddingY}`}>
    <div className="w-full flex justify-between items-center  flex-col pt-6 border-t-[1px] border-t-[#3F3E45] gap-6">
      <p className="font-poppins font-normal text-center lg:text-[18px] md:text-[18px] sm:text-[8px] leading-[27px] text-white">
        Copyright Ⓒ 2024 MOONLIT. All Rights Reserved.
      </p>
      
      <div className="flex  flex-col items-center gap-6">
        <span className="font-bold md:text-xl lg:text-xl sm:text-sm">Social Links</span>
        <div className="flex flex-row items-center gap-4">
          <a href="https://chat.whatsapp.com/Kty23pzrxgV4gdvbMHZ8Nt" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-teal-500" size={40} />
          </a>
          <a href="https://www.instagram.com/moonlit_bgmi_scrims/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 " size={40} />
          </a>
          <a href="https://www.youtube.com/@MOONLIT_YT/featured" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500" size={40} />
          </a>
          <a href="https://discord.com/invite/aAJWTx497B" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="hover:text-indigo-500" size={40} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;