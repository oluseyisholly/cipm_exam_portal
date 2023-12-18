import React from "react"
import styles from './main.module.css'

export interface LabelProps {
    labelArray: any[]
    removemargin?: boolean
}

const array = [
    {
        name: 'Level 1',
        color: ' #11643C'
    },
    {
        name: 'Level 1',
        color: ' #11643C'
    },
    {
        name: 'Level 1',
        color: ' #11643C'
    },
]

const Label  = ({labelArray, removemargin = false }:LabelProps) =>  {
  return <main style={{height: `${removemargin ? 'auto' : '322px' }`}} className={styles.labelWrapper}>
        
        <header> Total Students</header>
        {
            labelArray.map((item: any, index: number) => <div key={index}>
                <div style={{background: `${item.color}`}} className={styles.circle}>
                </div>
                <span>{item.name}</span>
            </div>)
        }
  </main>
};

export default Label
