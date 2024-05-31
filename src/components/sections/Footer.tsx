import { FOOTER_DATA } from '../../constants/';
import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';

const FooterColumn: React.FC<{ title: string, data: { icon: React.ElementType, name: string, link: string }[] }> = ({ title, data }) => (
  <motion.div
    variants={fadeIn('', 'spring', 0.5, 0.75)}
    className="min-w-[200px] h-auto flex flex-col items-center justify-start"
  >
    <h3 className="font-bold text-[16px]">{title}</h3>
    {data.map(({ icon: Icon, name, link }) => (
      <a
        key={`${title}-${name}`}
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="flex flex-row items-center my-[15px]"
      >
        {Icon && <Icon />}
        <span className="text-[15px] ml-[6px]">{name}</span>
      </a>
    ))}
  </motion.div>
);

const Footer = () => {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 relative z-0 mx-auto max-w-7xl" id="footer">
      <span className="hash-span">&nbsp;</span>
      <div className="min-h-[300px] rounded-2xl">
        <div className={`${styles.paddingX} flex flex-wrap justify-around`}>
          {FOOTER_DATA.map((column, index) => (
            <FooterColumn key={index} title={column.title} data={column.data} />
          ))}
        </div>
        <div className="mt-10 mb-[20px] text-[15px] text-center text-gray-200">
          &copy; Jorge Holguin {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
