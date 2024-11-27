import React, { useState, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Microscope, 
  Spray, 
  Scissors, 
  Layout, 
  Timer,
  Ruler,
  Heart,
  Tool,
  Shield,
  GraduationCap,
  Users,
  Camera,
  DollarSign,
  Package
} from 'lucide-react';
import { GiEyelashes, GiBarbedNails } from 'react-icons/gi';
import { PiScissorsFill } from "react-icons/pi";
import styles from './Courses.module.css';
import Button from '../button/Button';
import CommonBenefits from '../benefits/Benefits';

const getMainIconForCourse = (title) => {
  if (title.includes('ריסים')) return <GiEyelashes className={styles.mainIcon} />;
  if (title.includes("לק ג'ל")) return <GiBarbedNails className={styles.mainIcon} />;
  if (title.includes('גבות')) return <PiScissorsFill className={styles.mainIcon} />;
  return <GraduationCap className={styles.mainIcon} />;
};

const getIconForDetail = (detail) => {
  if (detail.includes('אנטומ')) return <Microscope />;
  if (detail.includes('מחלות')) return <Heart />;
  if (detail.includes('עיקור')) return <Shield />;
  if (detail.includes('שיופי')) return <Scissors />;
  if (detail.includes('סימטריה')) return <Ruler />;
  if (detail.includes('מניקור')) return <Scissors />;
  if (detail.includes('מבנה')) return <Layout />;
  if (detail.includes('השלמת')) return <BookOpen />;
  if (detail.includes('תעודת')) return <GraduationCap />;
  if (detail.includes('שיווק')) return <Camera />;
  if (detail.includes('תמחור')) return <DollarSign />;
  if (detail.includes('ערכה')) return <Package />;
  if (detail.includes('מודליסטית')) return <Users />;
  return <Timer />;
};

const SyllabusCard = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
      >
        <div className={styles.buttonContent}>
          <div className={styles.iconWrapper}>
            {getMainIconForCourse(content.title)}
          </div>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.subtitle}>{content.subtitle}</p>
          </div>
        </div>
        <div className={`${styles.toggleIconWrapper} ${isOpen ? styles.open : ''}`}>
          <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
        </div>
      </button>

      <div 
        style={{ height: `${height}px` }}
        className={styles.contentWrapper}
      >
        <div ref={contentRef} className={styles.content}>
          <div className={styles.detailsSection}>
            <h3 className={styles.sectionTitle}>{content.detailsTitle || 'בקורס נלמד על:'}</h3>
            <ul className={styles.detailsList}>
              {content.details.map((detail, index) => (
                <li key={index} className={styles.detailItem}>
                  <div className={styles.detailIconWrapper}>
                    {getIconForDetail(detail)}
                  </div>
                  <span className={styles.detailText}>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {content.cta && (
            <div className={styles.ctaSection}>
              <Button text={content.cta} message={content.message} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SyllabusCards = () => {
  const gelCourse = {
    title: "קורס לק ג'ל למתחילות",
    subtitle: "הקורס כולל 4 מפגשים, סך הכל 20 שעות לימוד",
    details: [
      "אנטומיית הציפורן",
      "מחלות ובעיות רפואיות בציפורניים",
      "הורדת העיקור והחיטוי",
      "שיופי צורה",
      "סימטריה",
      "מניקור משולב",
      "פסול מבנה אנטומי",
      "השלמת ציפורן"
    ],
    cta: "סוזנה, קורס לק ג'ל נשמע לי מתאים!",
    message: "היי סוזנה, אני מתעניינת בקורס לק ג'ל למתחילות ואשמח לשמוע פרטים נוספים!"
  };

  const lashCourse = {
    title: "קורס הדבקת ריסים",
    subtitle: "קורס פרטני 1:1, 6-7 שעות מרוכזות",
    detailsTitle: "מה נלמד בקורס:",
    details: [
      "מהי הדבקת ריסים בשיטה החדשה",
      "הבדלים בין השיטות הקיימות בשוק",
      "מחזור צמיחה ונשירה",
      "מבנה עיניים",
      "סוגי ריסים, אורך וקימור",
      "הכנה נכונה של העין",
      "הסרה בטוחה",
      "למי מותר/אסור לבצע טיפול",
      "הכרת כל סוגי החומרים",
      "תרגול מעשי",
      "עבודה על מודליסטית - טיפול מלא",
      "שיעור שיווק וצילום לניהול עסק מצליח",
      "שיעור תמחור והגדרת נהלי עבודה",
      "ערכה מלאה לתחילת עבודה מיידית",
      "שיעור מקיף על פתיחת עסק",
      "חוברת הדרכה מפורטת"
    ],
    cta: "סוזנה, קורס הדבקת ריסים נשמע לי מתאים!",
    message: "היי סוזנה, אני מתעניינת בקורס הדבקת הריסים ואשמח לשמוע עוד פרטים על הקורס!"
  };

  const eyebrowCourse = {
    title: "קורס עיצוב גבות טבעיות",
    subtitle: "קורס פרטני 1:1, 2 מפגשים של 5 שעות",
    detailsTitle: "מה נלמד בקורס:",
    details: [
      "למידת מורפולוגיה של הגבות",
      "התאמה נכונה למבנה פנים",
      "בעיות שכיחות בגבות",
      "שיקום גבות דלילות",
      "הכרת שיטות עבודה",
      "צביעה והדגשת גבות",
      "עבודה על שיערה קשה",
      "סטריליזציה",
      "גזירה ומריטה נכונה",
      "עבודה על מודליסטית - טיפול מלא",
      "שיעור שיווק וצילום לניהול עסק מצליח",
      "שיעור תמחור והגדרת נהלי עבודה",
      "ערכה מלאה לתחילת עבודה מיידית",
      "שיעור מקיף על פתיחת עסק",
      "חוברת הדרכה מפורטת"
    ],
    cta: "סוזנה, קורס עיצוב גבות נשמע לי מתאים!",
    message: "היי סוזנה, אני מתעניינת בקורס עיצוב הגבות ואשמח לשמוע פרטים נוספים על הקורס!"
  };

  return <>
    <div className={styles.cardsContainer}>
      <SyllabusCard content={gelCourse} />
      <SyllabusCard content={lashCourse} />
      <SyllabusCard content={eyebrowCourse} />
    </div>
    <CommonBenefits/>
    <Button text="סוזנה, אני רוצה לשמוע עוד!" message="היי סוזנה, אשמח לשמוע עוד ולהתייעץ איתך לגבי הקורסים שלך"/>
  </>
};

export default SyllabusCards;