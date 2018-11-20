import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const CardPerson = (props) => {
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

  export default CardPerson;