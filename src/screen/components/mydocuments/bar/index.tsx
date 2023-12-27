import styles from './main.module.css';
import {ReactComponent as Dot} from '../../../../svg/dot.svg'

export interface BarProps {
}
const Bar  = ({}:BarProps) =>  {
  return <>
        <div className={styles.wrapper}>
            <div>
                <div>
                    <span>.pdf</span>
                </div>
                <div>
                    <h3>Letter-of-recommendation.doc</h3>
                    <span>34MB</span> <Dot style={{marginBottom: '3px', marginInline: '8px'}}/> <p>Foundation Level</p>
                </div>
            </div>
            <h5>
                Download
            </h5>
        </div>
  </>
};

export default Bar
