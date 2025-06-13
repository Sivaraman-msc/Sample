import CskVsRcb from './assets/CSKvsRCB.jfif';
import CskVsMi from './assets/CSKvsMI.jfif';
import Ipl from './ipl';
import { useState } from 'react';

function MatchList() {

 /* const matches = [
    { id:1, name: "Csk vs Rcb", image: CskVsRcb, price:2000, place: "Chennai" },
    { id:2,  name: "Csk vs Mi", image: CskVsMi, price:1500, place: "Mumbai" }
  ];*/

  const [one,setOne]=useState( [
    { id:1, name: "Csk vs Rcb", image: CskVsRcb, price:2000, place: "Chennai" },
    { id:2,  name: "Csk vs Mi", image: CskVsMi, price:1500, place: "Mumbai" }
  ])

  const delete1=(id)=>{
    const filterMatch=one.filter((match)=>match.id!==id)
    setOne(filterMatch)
  }

  //const sort=matches.sort((x,y)=>x.price-y.price)

 // const low=matches.filter((match)=>match.price<1700)

  const matchList = one.map((match) => (
    <Ipl key={match.id} name={match.name} image={match.image} price={match.price} place={match.place} show={true} delete={delete1} id={match.id} />
  ));

  return (
    <div>
      {matchList}
      
    </div>
  );
}

export default MatchList;