import styles from './main.module.css'
import {ReactComponent as Home } from '../../svg/home.svg';
import {ReactComponent as Examination } from '../../svg/examination.svg';
import {ReactComponent as StatementOfPurpose } from '../../svg/statementofpurpose.svg';
import {ReactComponent as Transcript } from '../../svg/transcript.svg';
import {ReactComponent as Induction } from '../../svg/induction.svg';
import {ReactComponent as ExamDefferment } from '../../svg/examdeferment.svg';
import {ReactComponent as PayDues} from '../../svg/paydues.svg';
import {ReactComponent as MyDocument} from '../../svg/mydocument.svg';
import {ReactComponent as ActiveHistory} from '../../svg/activityhistory.svg';
import {ReactComponent as StudyCenterLink} from '../../svg/studycenterlink.svg';
import {ReactComponent as PaymentHistory} from '../../svg/paymenthistory.svg';
import SideBarItem from './sideBarItem';
import {ReactComponent as CipmLogo } from '../../svg/ciipmlogo.svg';
import { CSSProperties } from 'react';

interface SideBarProps {
    icon?: React.ReactNode;
    name?: string;
    display? : string;
    className?: any;
}

const sideBarItems1 = [
    {
        icon: <Home/>,
        name: 'Home'
    },
    {
        icon: <Examination/>,
        name: 'Examination'
    },
    {
        icon: <StatementOfPurpose/>,
        name: 'Statement Of Purpose'
    },
    {
        icon: <Transcript/>,
        name: 'Transcript'
    },
    {
        icon: <Induction/>,
        name: 'Induction'
    },
    {
        icon: <ExamDefferment/>,
        name: 'Exam Deferment'
    },
    
]

const sideBarItems2 = [
    {
        icon: <PayDues/>,
        name: 'Pay Dues'
    },
    {
        icon: <PaymentHistory/>,
        name: 'Payment History'
    },
]


const sideBarItems3 = [
    {
        icon: <MyDocument/>,
        name: 'My Document'
    },
]

const sideBarItems4 = [
    {
        icon: <ActiveHistory/>,
        name: 'Active history'
    },
    {
        icon: <StudyCenterLink/>,
        name: 'Study Center Link'
    },
]

const SideBar: React.FC<SideBarProps> = ({icon, name, display, className}) => {
    
  
    return (
        <aside  className={className}  style={{ paddingInline: '12px', borderInlineEnd: '1px solid #E5E6E6', display: display}}>
            <div className={styles.sideBarSub}>
                <div className={styles.mainSideBarItem}>
                    <div className= {styles.ciipmlogo}></div>
                    <h1>CIPM</h1>
                </div>
                <div>
                    {
                        sideBarItems1.map((item, index) => (
                            <SideBarItem key={index}  name={item.name} icon={item.icon}/>
                        ))
                    }
                </div>
                <div>
                    {
                        sideBarItems2.map((item, index) => (
                            <SideBarItem key={index} name={item.name} icon={item.icon}/>
                        ))
                    }
                </div>
                <div>
                    {
                        sideBarItems3.map((item, index) => (
                            <SideBarItem key={index} name={item.name} icon={item.icon}/>
                        ))
                    }
                </div>
                <div>
                    {
                        sideBarItems4.map((item, index) => (
                            <SideBarItem key={index}  name={item.name} icon={item.icon}/>
                        ))
                    }
                </div>
            </div>
        </aside>
    );
  };
  
  export default SideBar;