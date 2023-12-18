import React from "react"
import styles from './main.module.css'
import ChartBoard from "./chartboard";
import Label from "./chartboard/label";
import {AreaChart, Cell, Pie, PieChart, Area, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import EventItem from "./eventItem";

import { ReactComponent as ArrowRight } from "../../../svg/arrow_right.svg"

export interface DashboardProps {
}

const areaDataColor = [
    {
        color:'#11643C',
        name: 'Level 1',
    },
    {
        color:'#8DC467',
        name: 'Level 2',
    },
    {
        color:'#5CA2D8',
        name: 'Level 3',
    }
]

const areaData = [
    {
      "name": "0",
      "uv": 400,
      "pv": 240,
      "sv": 300,
      "amt": 240
    },
    {
      "name": "1",
      "uv": 300,
      "pv": 139,
      "sv": 300,
      "amt": 221
    },
    {
      "name": "2",
      "uv": 200,
      "pv": 980,
      "sv": 300,
      "amt": 229
    },
    {
      "name": "3",
      "uv": 278,
      "pv": 390,
      "sv": 800,
      "amt": 200
    },
    {
      "name": "4",
      "uv": 189,
      "pv": 480,
      "sv": 343,
      "amt": 218
    },
    {
      "name": "5",
      "uv": 239,
      "pv": 380,
      "sv": 700,
      "amt": 250
    },
    {
      "name": "6",
      "uv": 349,
      "pv": 430,
      "sv": 500,
      "amt": 210
    },
    {
        "name": "7",
        "uv": 349,
        "pv": 430,
        "sv": 500,
        "amt": 210
      },
      {
        "name": "8",
        "uv": 349,
        "pv": 430,
        "sv": 500,
        "amt": 210
      },
      {
        "name": "9",
        "uv": 349,
        "pv": 430,
        "sv": 500,
        "amt": 210
      },
      {
        "name": "10",
        "uv": 349,
        "pv": 430,
        "sv": 500,
        "amt": 210
      },
      {
        "name": "11",
        "uv": 349,
        "pv": 430,
        "sv": 500,
        "amt": 210
      },
  ]

const events = [
    {
        name: 'HRM Examination',
        time: '9:00am',
        date: '07 Sep 2023'
    },
    {
        name: 'HRM Examination',
        time: '9:00am',
        date: '07 Sep 2023'
    },
    {
        name: 'HRM Examination',
        time: '9:00am',
        date: '07 Sep 2023'
    }
]

const piedata = [
    { name: 'Registered', value: 818, color: '#388DCC' },
    { name: 'Deffered', value: 209, color: '#4CAF4F'},
  
  ];


  const ringdata = [
    { name: 'Fully Paid', value: 400, color: '#FFCC00' },
    { name: 'Owing', value: 300, color: '#11643C'},
  
  ];
  
const Dashboard  = ({}:DashboardProps) =>  {

  return <main>
    <div className={styles.wrapper}>
    <div className={styles.header}>
        <h1>Overview</h1>
    </div>
    <section>
        <ChartBoard header={'Students'} className={styles.chartboard}>
            <Label labelArray={piedata}/>
            <ResponsiveContainer  width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                    data={piedata}
                    cx="50%"
                    cy="50%"
                    startAngle={40}
                    endAngle={400}
                    outerRadius={125}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {piedata.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie >
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </ChartBoard>
        <ChartBoard header={'Dues'} className={styles.chartboard}>
            <Label labelArray={ringdata}/>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                    data={ringdata}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={125}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    label
                    >
                    {ringdata.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </ChartBoard>
    </section>
    <section>
        <div>
        <Label removemargin={true} labelArray={areaDataColor}/>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={730} height={250} data={areaData} >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#11643C" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#11643C" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8DC467" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8DC467" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorSv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5CA2D8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#5CA2D8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="30000 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#11643C" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#8DC467" fillOpacity={1} fill="url(#colorPv)" />
            <Area type="monotone" dataKey="sv" stroke="#5CA2D8" fillOpacity={1} fill="url(#colorSv)" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
        <div>
            <header>Upcoming Events</header>
            <div>
                {
                    events.map((item: any, index: number) => <EventItem key={index} data={item}/>)
                }
            </div>
            <footer>
                <span>View more Events</span>
                <ArrowRight/>
            </footer>
        </div>
    </section>
    </div>
  </main>
  
};

export default Dashboard

