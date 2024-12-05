import Button from "../components/button/Button"
import SyllabusCards from "../components/courses/Courses"
import FAQItem from "../components/questions/Questions"
import styles from "./ForthScreen.module.css"

const ForthScreen=()=>{


return <>


    <div className={styles.title}>זמן לענות על השאלות שלכן</div>
    <FAQItem question="התאכזבתי מקורס דומה בעבר - איך אני יכולה לתת שוב אמון בתחום?" answer="ממש מבאס אותי לשמוע שזו החוויה שלך מהתחום! אני יותר מאשמח לשמוע מה חווית ואיך! אני יכולה להגיד לך שהקורסים איתי הם אישיים כדי למנוע מקרים כאלה! אני איתך מהרגע שאת נרשמת וממשיכה לתמוך ולעזור לך אחרי הקורס"/>
    <FAQItem question="יש כל כך הרבה בנות שעוסקות בתחום הביוטי איך אני לא אבלע בין כולן?" answer="הסיבה שיש הרבה בנות שמתעסקות בתחום היא כי יש ביקוש! התחום לא נגמר! ואני יכולה להגיד לך בפה מלא שאם תתמידי ותשקיעי את תבלטי ותמלאי את היומן שלך מהר מאוד"/>
    <FAQItem question="כמה תלמידות יש בקורס?" answer="כל הקורסים במתכונת של תלמידה אחת בקורס (1:1) או זוגי בלבד!"/>

    <FAQItem question="סוזנה, איך אני יכולה לשלם?" answer="את יכולה לשלם בפייבוקס,מזומן,העברה בנקאית ואשראי"/>

    
    <Button text="יש לי עוד כמה שאלות"/>
    
</>


}
export default ForthScreen