import React, { ReactNode } from "react"
import styles from './main.module.css'
import { ReactComponent as ArrowRight } from "../../../../svg/arrow_right.svg"

export interface ChartBoardProps {
    children: ReactNode
    className?: string
    header? : string
}
const ChartBoard  = ({children, className, header}:ChartBoardProps) =>  {
  return <>
    <div className={`${styles.wrapper} ${className}`}>
        <h2>{header}</h2>
        <div>
            {children}
        </div>
        <footer>
            <span>
                <span>View All </span>
                <ArrowRight/>
            </span>
        </footer>
    </div>
  </>
  
};

export default ChartBoard
