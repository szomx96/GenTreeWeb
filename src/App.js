import React, { Component } from 'react';
import './App.css';
import faker from 'faker';
import rd3 from 'react-d3-library'
import CardPerson from './Components/CardPerson'
import TreeGraph from './Components/TreeGraph'
import Test from './Components/Test'


const persons = [];

for(let i = 0; i < 10; i++){
  persons.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    birthDate: faker.date.past(),
    deathDate: faker.date.past(),
    avatar: faker.image.avatar(),
    country: faker.address.country(),
    city: faker.address.city(),
    desc: faker.lorem.sentence(),
    id: faker.random.number(),
  })
}

class App extends Component {
  render() {
    return (
      <>
    
    {( persons.map((person) => <CardPerson key={person.id} 
                                         id={person.id} 
                                         avatar={person.avatar}
                                         firstName={person.firstName} 
                                         lastName={person.lastName} 
                                         email={person.email}
                                         desc={person.desc}
                                         birthDate={person.birthDate}
                                         deathDate={person.deathDate}
                                         country={person.country}
                                         city={person.city}
                                         /> ))}

{/* <TreeGraph /> */}
<Test />
        </>
       
    );
  }
}

export default App;
