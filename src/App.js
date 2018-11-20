import React, { Component } from 'react';
//import Konva from 'konva';
import './App.css';
//import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import faker from 'faker';
import { Card, Icon, Image } from 'semantic-ui-react'
import rd3 from 'react-d3-library'



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

const CardTest = (props) => {
  return(
  <Card>
    <Image src = {props.avatar} size="massive"/>
    <Card.Content>
      <Card.Header>{props.firstName} {props.lastName}</Card.Header>
      <Card.Meta>
        <span>{props.country}</span><br />
        <span>{props.city}</span>
        {/* <span className='date'>Birth date: {props.birthDate}</span> */}
        {/* {props.deathDate && <span className='date'>Death date: {props.deathDate}</span>} */}
      </Card.Meta>
      <Card.Description>{props.desc}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name = 'mail'></Icon>{props.email}
      </a>
    </Card.Content>
  </Card>)
}



class App extends Component {
  render() {
    return (
        (persons.map(person => <CardTest key={person.id} 
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
                                         /> ))
    );
  }
}

export default App;
