import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Modal, theme } from 'antd';
import styles from './main.module.css'
import {ReactComponent as ArrowDown } from '../../svg/angledown.svg';
import {ReactComponent as NotiBell } from '../../svg/bell.svg';
import {ReactComponent as Harmbugger} from '../../svg/harmbugger.svg';
import SideBar from './sideBar';
import {  Drawer } from "antd";
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import MyDocument from '../components/mydocuments';
import StudyPack from '../components/mydocuments/studyPack';
import PastQuestion from '../components/mydocuments/pastQuestions';
import ExaminationPhotoCard from '../components/mydocuments/examinationPhotoCard';

const { Header, Content, Sider } = Layout;



const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


const darkModeAtom = atomWithStorage('darkMode', false);



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

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    const [open, setOpen] = useState([false, false]);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                margin: 0,
                minHeight: 280,
                overflow: 'auto'
                }}
                className= {styles.content}
            >
                {/* <StudyPack/> */}
                <ExaminationPhotoCard/>
                {/* <PastQuestion/> */}
                {/* <MyDocument/> */}
                {/* <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
                <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button> */}
                {/* <Dashboard/> */}
                {/* <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button> */}
               {/* <Modal styles={{ header: {fontWeight: 400, fontSize:'22px'}, body: { paddingBlockStart: '80px'}}} title="Exam Deferment Approval" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Modalcontent/>
                </Modal>  */}
            </Content>
        </div>
      </main>
  );
};

export default CLayout;