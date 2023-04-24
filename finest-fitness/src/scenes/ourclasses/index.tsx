import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType>  = [
  {
    name: "Weight Training Classes",
    description:
      "Dictum sit amet justo donec enim diam vulputate. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tempus iaculis urna id volutpat.",
    image: image1,
  },
  {
    name: "Cardio Classes",
    description: "Dictum sit amet justo donec enim diam vulputate.",
    image: image2,
  },
  {
    name: "Yoga Classes",
    description: "Dictum sit amet justo donec enim diam vulputate.",
    image: image2,
  },
  {
    name: "Pilates Classes",
    description: "Dictum sit amet justo donec enim diam vulputate.",
    image: image3,
  },
  {
    name: "Zumba Classes",
    description: "Dictum sit amet justo donec enim diam vulputate.",
    image: image4,
  },
  {
    name: "Boxing Classes",
    description: "Dictum sit amet justo donec enim diam vulputate.",
    image: image5,
  },
  {
    name: "MMA Classes",
    description: "Dictum sit amet justo donec enim diam vulputate.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>   
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Sagittis id consectetur purus ut faucibus pulvinar elementum
              integer enim. At urna condimentum mattis pellentesque id nibh
              tortor. Id semper risus in hendrerit gravida rutrum quisque. Neque
              viverra justo nec ultrices dui sapien eget.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[355px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}/>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
