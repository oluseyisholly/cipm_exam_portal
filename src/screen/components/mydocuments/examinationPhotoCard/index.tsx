import styles from "./main.module.css"
import { ReactComponent as BackArrow} from "../../../../svg/backArrow.svg";
import PastQuestionBar from "../bar";
export interface PastQuestionProps {
}


const ExaminationPhotoCard  = ({}:PastQuestionProps) =>  {


  return <>
        <div className={styles.wrapper}>
        <div className={styles.header}>
            <div>  
                <BackArrow/>
                <h1>Examination Photocard</h1>
            </div>
            <span>Download</span>
        </div>
        <section>
            <img width='200px' height='200px' src='/image.jpeg'></img>
        </section>
    </div>
  </>
};

export default ExaminationPhotoCard
