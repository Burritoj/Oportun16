import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import {Page1} from '../../Page1.jsx'
import {Page2} from '../../Page2.jsx'
import {Page3} from '../../Page3.jsx'
import {Page4} from '../../Page4.jsx'
import {Page5} from '../../Page5.jsx'
import '../../Tree.css'

export function Navbar(props){

    const {dbCacheArray, setdbCacheArray} = props;
    const [active, setActive] = useState(1);
    const [entryToUpdate, setEntryToUpdate] = useState({
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    });

    return(
        <React.Fragment>
        <div>
            <Pagination size="lg">
                <PageItem key={1} active={1 === active} onClick={()=>setActive(1)} variant="success">Risk Tool</PageItem>
                <PageItem key={2} active={2 === active} onClick={()=>setActive(2)}>DB Entries</PageItem>
                <PageItem key={3} active={3 === active} onClick={()=>setActive(3)}>Heatmap</PageItem>
                <PageItem key={4} active={4 === active} onClick={()=>setActive(4)}>Info</PageItem>
            </Pagination>
        </div>
        <Pages>
            <Page1 key={1} active={1 === active} dbCacheArray={dbCacheArray} setdbCacheArray={setdbCacheArray}></Page1>
            <Page2 key={2} active={2 === active} dbCacheArray={dbCacheArray} setdbCacheArray={setdbCacheArray} setActive={setActive} setEntryToUpdate={setEntryToUpdate}></Page2>
            <Page3 key={3} active={3 === active} dbCacheArray={dbCacheArray} setdbCacheArray={setdbCacheArray}></Page3>
            <Page4 key={4} active={4 === active}></Page4>
            <Page5 key={5} active={5 === active} dbCacheArray={dbCacheArray} setdbCacheArray={setdbCacheArray} Entry={entryToUpdate}></Page5>
        </Pages>
        </React.Fragment>
    );
}

function Pages(props){
    return(
        props.children
    );
}
