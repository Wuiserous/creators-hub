import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const skills = [
    {
      name: "Adobe Photoshop",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PRJTR3X73uIJXpqD-Nkj4T0SKaEEL2aReA&s",
      color: "bg-white text-white",
      level: 90
    },
    {
      name: "Adobe Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg",
      color: "bg-gray-100 text-white",
      level: 60
    },
    {
      name: "Adobe Premiere Pro",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      color: "bg-white text-white",
      level: 70
    },
    {
      name: "After Effects",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      color: "bg-gray-100 text-white",
      level: 65
    },
    {
      name: "Framer",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6J2ZELsId6CvU8qK2G0NTLYA6U64Bi__9ONZ4j-Qi4aPLxovcpXA0G2X0JXz07VDvR5U&usqp=CAU",
      color: "bg-gray-100 text-white",
      level: 80
    }
  ];
  

const SkillBar = ({ skill }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ width: `${skill.level}%` });
      }
    }, [controls, inView, skill.level]);
  
    return (
      <div
        ref={ref}
        className={`relative w-full h-16 rounded-2xl flex items-center justify-between px-4 py-2 mb-2 shadow-lg overflow-hidden ${skill.color}`}
      >
        {/* Progress Fill Background */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-2xl z-0"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ backgroundColor: "rgba(0,0,0,1)" }}
        />
  
        {/* Content */}
        <div className="flex items-center gap-2 z-10">
          <img src={skill.icon} alt={skill.name} className="w-[50px] bg-white ml-[-9px] rounded-[10px] p-1 h-[50px]" />
          <span className="font-semibold text-base">{skill.name}</span>
        </div>
        <div className="z-10 px-3 py-1 rounded-full bg-gray-400 text-white text-sm">
          {skill.level}%
        </div>
      </div>
    );
  };
  
  

const SkillsProgress = (forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-fit mt-20 mb-20 block w-full lg:w-[700px] mx-auto px-4 py-1 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-1">Skills and Expertise</h2>
  <p className="text-black/60 text-lg mb-6">The tools behind my creativity!</p>

  <div className=" w-full">
    {skills.map((skill, i) => (
      <SkillBar key={i} skill={skill} />
    ))}
  </div>
</div>


  );
}));

export default SkillsProgress;
