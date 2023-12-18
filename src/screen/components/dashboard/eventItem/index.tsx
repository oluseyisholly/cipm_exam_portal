import React from "react"
import styles from './main.module.css'

interface Data {
    name?: string;
    time?: string;
    date?: string;
}

export interface EventItemProps {
   data: Data | any
}
const EventItem  = ({data}:EventItemProps) =>  {
  return <main className={styles.main}>
        <div>
            <span>{data.date}</span>
        </div>
        <div>
            <span>{data.name}</span>
            <span>{data.time}</span>
        </div>
  </main>
};

export default EventItem
