import styles from './main.module.css'
import { ReactComponent as Plane } from '../../../../svg/plane.svg';

export interface MyDocumentCardProps {
}
const MyDocumentCard  = ({}:MyDocumentCardProps) =>  {
  return <>
    <div className={styles.wrapper}>
        <div>
            <div>
                <div className={styles.iconWrapper}>
                    <Plane/> 
                </div>
                <h3>Examination Syllabus</h3>
            </div>
            <span>
                This is to certify that you attended the induction held on 10th October. 
            </span>
        </div>
        <div>
            Download
        </div>
    </div>
  </>
};

export default MyDocumentCard
