import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import styles from './main.module.css'
import {ReactComponent as ArrowDown } from '../../svg/angledown.svg';
import {ReactComponent as NotiBell } from '../../svg/bell.svg';
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
import {ReactComponent as Harmbugger} from '../../svg/harmbugger.svg';
import SideBarItem from './sideBarItem';
import SideBar from './sideBar';
import { Button, ConfigProvider, Drawer, Space } from "antd";

const { Header, Content, Sider } = Layout;



const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

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

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);


    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const CLayout: React.FC = () => {

    const [open, setOpen] = useState([false, false]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleDrawer = (idx: number, target: boolean) => {
    setOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  return (
      <main  className={styles.main}>
        <Drawer
        placement="left"
        onClose={() => toggleDrawer(0, false)}
        open={open[0]}
        className={styles.drawer}
        width={'300px'}
        styles={{body: {padding: '0px'}}}
        
      >
         <SideBar className={styles.drawSideBar} />
      </Drawer>
      <SideBar className={styles.sideBar}/>
        <div  className={styles.superHeader}>
            <div className={styles.header}>
                <div>
                    <Harmbugger onClick={() => toggleDrawer(0, true)} className={styles.harmbugger}/>
                    <h1>Profile</h1>
                </div>
                <div>
                    <span>19th February, 2021</span>
                    <div style={{position: 'relative', marginBlockStart:'10px'}}>
                        <NotiBell />
                        <div className={styles.hoveringCircle}>
                            9+
                        </div>
                    </div>
                    <div className={styles.pill}>
                        <div>
                        </div>
                        <ArrowDown/>
                    </div>
                </div>
            </div>
            <Content
                style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                overflow: 'auto'
                }}
            >
                <div>
                    {
                        sideBarItems1.map((item, index) => (
                            <SideBarItem key={index}  name={item.name} icon={item.icon}/>
                        ))
                    }
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
                        sideBarItems1.map((item, index) => (
                            <SideBarItem key={index}  name={item.name} icon={item.icon}/>
                        ))
                    }
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
                        sideBarItems1.map((item, index) => (
                            <SideBarItem key={index}  name={item.name} icon={item.icon}/>
                        ))
                    }
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
                        sideBarItems1.map((item, index) => (
                            <SideBarItem key={index}  name={item.name} icon={item.icon}/>
                        ))
                    }
                </div>
                Content
            </Content>
        </div>
      </main>
  );
};

export default CLayout;