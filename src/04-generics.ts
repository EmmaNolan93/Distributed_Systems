import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

function sortMatch<T>( data : T[], criteria: (a: T, b:T) => number ) : T[] | undefined {
    return data.sort((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))
// Sort friends by age
console.log(sortMatch<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sortMatch<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);