import { Steps } from 'antd';
import styles from './modalcontent.module.css'



const Modalcontent: React.FC = ({}) => (


  <div className={styles.stepperWrapper}>
      <div className={styles.steperTitleAside}>
          <div >
            <span>23th October 2023</span>
            <p className={styles.completedStatus}>Completed</p>
          </div>
          <div >
            <span>23th October 2023</span>
           
            <p className={styles.ongoingstatus}>Ongoing</p>
          </div>
      </div>
      <Steps
        rootClassName={styles.stepper}
        direction="vertical"
        percent={100}
        size="small"
        current={1}
        items={[
          {
            title: <div className={styles.steperTitle}>Application Date</div>,
            description: 'Applied for Exam Deferment' ,
          },
          { title: <div  className={styles.steperTitle}>
                            Admin Approval
                  </div>,  description: 'Applied for Exam Deferment' 
          }
        ]}
      />
  </div>
);

export default Modalcontent;