'use client'
import styles from './page.module.scss'

import VerticalPicsSlider from '../../workcomponents/VerticalPicsSlider/page'

export default function Work() {
    return (
        <main>
            <div className={styles.spacer}></div>
            <VerticalPicsSlider />
            <div className={styles.spacer}></div>
        </main>

    )
}