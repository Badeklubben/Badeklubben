
/*
'use client';
import './style.css';
import {useEffect, useId, useState } from 'react';
import ActionBoX from './ui/ActionBox';
import PropField from './ui/PropField';
import TextInput from './ui/TextInput';
import Choice from './ui/Choice';
import DropDown from './ui/DropDown';


export default function Latexplot() {

    const [gridXAxis,setGridXAxis] = useState<boolean>(false);
    const [gridYAxis,setGridYAxis] = useState<boolean>(true);

    const [dropdownValue,setDropdownValue] = useState<string>("dashed");
    const dropdownOptions = ["solid","dashed","dotted","solid","dashed","dotted","solid","dashed","dotted"];
    
    const [ldropdownValue,setLDropdownValue] = useState<string>("outer north east");
    const ldropdownOptions = ["outer north east", "none"];

    const welcome_text = "Welcome!This is a tool meant to simplify the process of creating and customizing plots for LaTeX. I hope you find it as helpfull as I have :) Feedback is very welcomed!";

    return (
        <div>
            <ActionBoX title='welcome to the LaTeX-plotter!' button={{name:'feedback', action: () => {console.log("feedback")}}}>
                <div>{welcome_text}</div>
            </ActionBoX>
            <ActionBoX title='axis' button={{name:'clear all plots', action: () => {confirm("This will delete all plots, are you sure?"); console.log("clear")}}}>
                <PropField title='title'>
                    <TextInput title='main'></TextInput>
                    <TextInput title='x-label'></TextInput>
                    <TextInput title='y-label'></TextInput>
                </PropField>
                <PropField title='grid'>
                    <DropDown title='style' options={{options:dropdownOptions,state:dropdownValue,setState:setDropdownValue}}></DropDown>
                    <Choice options={[{label:'x-axis',state:gridXAxis,setState:setGridXAxis},{label:'y-axis',state:gridYAxis,setState:setGridYAxis}]}></Choice>
                </PropField>
                <PropField title='legend'>
                    <DropDown title='style' options={{options:ldropdownOptions,state:ldropdownValue,setState:setLDropdownValue}}></DropDown>
                </PropField>
            </ActionBoX>
            <ActionBoX title='plot' button={{name:'remove', action: () => {confirm("This will delete this plot, are you sure?"); console.log("remove")}}}>
                <PropField title='plot'>
                    <DropDown title='plot' options={{options:dropdownOptions,state:dropdownValue,setState:setDropdownValue}}></DropDown>
                </PropField>
                <PropField title='legend'>
                    <TextInput title='name'></TextInput>
                </PropField>
                <PropField title='color'>
                    <DropDown title='color' options={{options:dropdownOptions,state:dropdownValue,setState:setDropdownValue}}></DropDown>
                </PropField>
                <PropField title='mark'>
                    <DropDown title='mark' options={{options:ldropdownOptions,state:ldropdownValue,setState:setLDropdownValue}}></DropDown>
                </PropField>
            </ActionBoX>
        </div>
    );
}

*/