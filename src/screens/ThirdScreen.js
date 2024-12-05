import SyllabusCards from "../components/courses/Courses"
import styles from "./ThirdScreen.module.css"
import Recommends from '../components/recommends/Recommends';
const ThirdScreen=()=>{


return <>
{/* הצגת סילבוסים */}

<div className={styles.description}>נמאס לך להסתפק במשכורת קבועה? עייפה משעות עבודה ארוכות בלי תחושת סיפוק אמיתית?</div>
{/* <div className={styles.description}>הגיע הזמן לשנות מסלול ולהתחיל קריירה שבה את שולטת בקצב ובהכנסה שלך!</div> */}

    <div className={styles.description}>אני רוצה להציג בפנייך את שלושת התחומים המבוקשים ביותר בתחום שאת יכולה להתחיל לעסוק בהן דרכי </div>
    <div className={styles.title} id="הקורסים שלי">תחזיקי חזק.. מתחילות!</div>
    <div className={styles.description}>כל אחד מהקורסים הבאים הולך להפוך אותך לאישה שתמיד חלמת להיות</div>
    <SyllabusCards/>
    <Recommends/>
</>


}
export default ThirdScreen