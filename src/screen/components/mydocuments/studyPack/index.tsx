import styles from "./main.module.css"
import { ReactComponent as BackArrow} from "../../../../svg/backArrow.svg";
import StudyPackCard from "../bar";
import { Drawer } from "antd";
import { useState } from "react";

export interface StudyPackProps {
}


const StudyPack  = ({}:StudyPackProps) =>  {

    const [open, setOpen] = useState([false, false]);

    
    const toggleDrawer = (idx: number, target: boolean) => {
    

        setOpen((p) => {
        p[idx] = target;
        return [...p];
        });
    };

  return <>
        <div className={styles.wrapper}>
        <div className={styles.header}>
            <div>  
                <BackArrow/>
                <h1>Study Packs</h1>
            </div>
            <span  onClick={() => toggleDrawer(0, true)}>fliter</span>
        </div>
        <section>
            <StudyPackCard/>
            <StudyPackCard/>
            <StudyPackCard/>
        </section>
        <Drawer
        placement="right"
        onClose={() => toggleDrawer(0, false)}
        open={open[0]}
        className={styles.drawer}
        width={'300px'}
        styles={{body: {padding: '0px'}}}
        >
            <div className={styles.drawerContent}>
                <h2>Filter</h2>

                <label>Exam Level</label>
                <select name="pets" id="pet-select">
                    <option value="option"> Option 1</option>
                    <option value="option"> Option 2</option>
                    <option value="option"> Option 3</option>
                </select>

                <button>Apply Filters</button>
            </div>
      </Drawer>
    </div>
  </>
};

export default StudyPack
