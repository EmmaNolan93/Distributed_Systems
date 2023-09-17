import {Friend, Colleague, EmailContact, PhoneContact} from './myTypes'

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
function highestExtension(cs: Colleague[]){
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  function addcolleague(cs:Colleague[], newname: string, newdeparment: string, newemail:string){
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

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

  function findFriends(
    friends: Friend[],
    finder: (f1: Friend) => boolean
  ):  Friend []{
    const sorted = friends.filter(finder)// Colleague[] inferred
    const result: Friend[] = sorted.map((ce)=> ({name: ce.name, phone: ce.phone, age: ce.age}))
    return result;

  }
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));