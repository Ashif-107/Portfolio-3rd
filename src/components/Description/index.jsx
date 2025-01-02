import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase = "I am a Web Development Lead at IEEE RAS Club, specializing in crafting dynamic web experiences with React and Next.js. As a Game Developer at Google Developer Groups , I bring creativity to interactive projects. Currently, I'm diving into the world of 3D modeling and animation, blending artistry with technology to expand my skillset.";
    const description = useRef(null);
    const isInView = useInView(description)

    const highlightedWords = ["Web","Development","Lead","IEEE", "RAS","Game", "Google", "Developer", "Groups"];

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
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>- Student at VIT Chennai uni <br/><br/> - 14 months of experience <br/><br/> - Based in India <br/><br/> <span> #living life unfiltered </span> </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
