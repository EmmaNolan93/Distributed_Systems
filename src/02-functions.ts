import {Friend, Colleague } from './myTypes'

import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}
function allOlder(friends: Friend[]): string[]{
    const result: string[] = [];
    friends.forEach((friend)=>{
        friend.age += 1;
        result.push(`${friend.name} is now ${friend.age}`);
    });
    return result
}
// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  function addcolleague(cs:Colleague[], newname: string, newdeparment: string, newemail:string): Colleague{
    const ans:number = highestExtension(cs).contact.extension;
    const newColleage : Colleague ={
        name: newname,
        department: newdeparment,
        contact: {
            email: newemail,
            extension: ans+1
        }
    }
    colleagues.current.push(newColleage);
    return newColleage;
  }
  console.log(addcolleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com"));
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));