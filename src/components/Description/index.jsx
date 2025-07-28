import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase = "Your Friendly neighborhood Developer here, I Lead the Web Dev team at IEEE RAS , engineer digital solutions at OSPC as a Game Dev Lead , and fuel my passion for data as a former Analyst & Engineer at Vyastics. A Data Enthusiast at heart, I love turning raw information into meaningful stories. Currently exploring 3D modeling and animation — blending logic, visuals, and interactivity to craft immersive web experiences.";
    const description = useRef(null);   
    const isInView = useInView(description)

    const highlightedWords = ["Web","Dev","Lead","IEEE","RAS","Game", "Data" , "Enthusiast", "Analyst","Engineer", "3D", "modeling", "animation", "immersive", "experiences"];

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        const isHighlighted = highlightedWords.includes(word);
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}  className={isHighlighted ? styles.highlight : ''} >{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>- Student at VIT Chennai uni <br/><br/> - 24 months of experience <br/><br/> - CGPA of 9.36/10 <br/><br/> <span> #living life unfiltered </span> </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
