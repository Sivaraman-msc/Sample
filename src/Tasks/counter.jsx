import React, { useEffect, useState } from 'react'

export default function () {

    const [count,setCount]=useState(0)
    const [isOn,Seton]=useState(false)
    const[visible,setVisible]=useState(false)
    const[text,setText]=useState('')
    const[open,setOpen]=useState(false)

    const name="Siva"

    const handleClick=()=>{
        setCount(count+1)
    }
    const Toggle=()=>{
        Seton(!isOn)
    }
    const Passvisible=()=>{
        setVisible(!visible)
    }
    const TextLength=(e)=>{
        setText(e.target.value)
    }
    const ShowText=()=>{
        setOpen(!open)
    }
    useEffect(()=>{
       setTimeout(()=>{
        console.log(count)
       },3000)
    },[count])
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleClick}>increment</button> <br />
       <h2> {isOn?'On':'off'}</h2>
       <button onClick={Toggle}>Toggle</button>
       <input type="text" value={text} onChange={TextLength} />
       <h2>{text.length}</h2>
        <input type={visible?"password":"text"} />
        <button onClick={Passvisible}>{visible?"hide":"show"}</button> <br />
        <button disabled={!text}>Disabled button until pass data</button> <br />
        <button onClick={ShowText}>ShowText : </button>
        {open && name}
    </div>
  )
}
/*import { useState, useEffect } from 'react';

function DebouncedInput() {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(query), 500);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    // simulate API call
    console.log("API Call:", debounced);
  }, [debounced]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}

function Demo() {
  useEffect(() => {
    console.log("Mounted");
    return () => console.log("Unmounted");
  }, []);
  return <div>Check console</div>;
}  

function Tabs() {
  const [active, setActive] = useState(0);
  const tabs = ['Home', 'About', 'Contact'];
  const content = ['Welcome!', 'We are cool.', 'Say hello!'];

  return (
    <div>
      {tabs.map((tab, i) => (
        <button key={i} onClick={() => setActive(i)}>{tab}</button>
      ))}
      <div>{content[active]}</div>
    </div>
  );
}
function SearchFilter() {
  const [search, setSearch] = useState('');
  const data = ['Apple', 'Banana', 'Mango', 'Grapes'];

  const filtered = data.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <ul>{filtered.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
function CopyText() {
  const [text] = useState("Copy me!");
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => navigator.clipboard.writeText(text)}>Copy</button>
    </div>
  );
}
*/