import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardPerson = (props) => (
  <Card>
    <Image src={props.avatar} size = 'massive' />
    <Card.Content>
      <Card.Header>{props.firstName} {props.lastName}</Card.Header>
      <Card.Meta>
        <span>{props.country}</span><br />
        <span>{props.city}</span>
      </Card.Meta>
      <Card.Description>{props.desc}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='mail' />
        {props.email}
      </a>
    </Card.Content>
  </Card>
)

export default CardPerson