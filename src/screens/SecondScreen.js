import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import money from "../Icons/wired-outline-2510-money-safety-hover-slide.json"
import time from "../Icons/wired-outline-45-clock-time-hover-oscillate.json"
import happy from "../Icons/wired-outline-633-female-standing-hover-success.json"
import infinity from "../Icons/wired-outline-233-arrow-22-hover-cycle (1).json"
import dedicate from "../Icons/wired-outline-977-internship-hover-pinch.json"
import wait from "../Icons/wired-outline-629-yoga-male-hover-pinch.json"
import business from "../Icons/wired-outline-187-suitcase-morph-open.json"
import NewBox from "../components/newBox/NewBox"
import StyledMessages from "../components/trend/Trending"
const SecondScreen=()=>{


    return <>
<div className={styles.descriptionWrapper}><p>אם תמיד חלמת לפתוח עסק בתחום הביוטי</p></div>
     {/* <div className={styles.description}>אם את כאן זה סימן שאת מאוהבת בתחום הביוטי ואת רוצה לקחת את התשוקה שלך צעד אחד קדימה</div> */}
     <div className={styles.title}>ולהגיע למצב ש</div>
    <div className={styles.row}>
        <IconTextComponent text="את מכניסה סכומים שרק חלמת עליהם בכל חודש" icon={money}/>
        <IconTextComponent text="את תקבעי בעצמך את שעות העבודה שלך" icon={time}/>
        <IconTextComponent text="את קמה כל בוקר בתחושה של הגשמה עצמית" icon={happy}/>
        <IconTextComponent text="את תצאי עם מקצוע שיש לו ביקוש אינסופי" icon={business}/>
        
    </div>
    <div className={styles.title}>זה לגמרי אפשרי!</div>
    <StyledMessages/>

    <div className={styles.description}>חשוב לי להבהיר לך שאת יכולה להגיע לגבהים מדהימים! אבל הדרך להצליח למלא יומן בכל תחום היא לא קלה</div>
    <div className={styles.title}>והיא תדרוש ממך</div>
    <div className={styles.row}>
    <NewBox 
                title="השקעה" 
                description="כדי להצליח בתחום הביוטי, תצטרכי להשקיע בציוד מקצועי, קורסים והכשרות שיעזרו לך להתמקצע ולבלוט בשוק" 
                icon={dedicate}
            />
            <NewBox 
                title="סבלנות" 
                description="בניית עסק מצליח לוקחת זמן, צריך סבלנות כדי לבנות מוניטין, להרחיב את מאגר הלקוחות ולראות תוצאות" 
                icon={wait}
            />
            <NewBox 
                title="התמסרות והתמדה" 
                description="כדי לבנות עסק מוצלח בתחום את חייבת להתמיד ולא לעצור כשהדברים לא הולכים בדיוק כמו שחשבת - עם הזמן, ההתמדה תיצור לך את המומנטום " 
                icon={infinity}
            />
    </div>
    </>
}
export default SecondScreen