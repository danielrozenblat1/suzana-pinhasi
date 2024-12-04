import SyllabusCards from "../components/courses/Courses"
import styles from "./ThirdScreen.module.css"
import Recommends from '../components/recommends/Recommends';
const ThirdScreen=()=>{


return <>
{/* הצגת סילבוסים */}

    <div className={styles.title}>ולרגע האמת!</div>
    <div className={styles.description}>אני רוצה להציג בפנייך את שלושת התחומים המבוקשים ביותר בתחום שאת יכולה להתחיל לעסוק בהן דרכי </div>
    <SyllabusCards/>
    <Recommends/>
</>


}
export default ThirdScreen