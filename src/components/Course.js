import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Course = ({ course, clicked }) => {
  const { courseName, instructorName, price, img } = course

  return (
    <Card className="mb-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <p>
          <small>Created By</small> {instructorName}
        </p>
        <p>Price: ${price.toFixed(2)}</p>
        <Button variant="success" onClick={() => clicked(course)}>
          Enroll now
        </Button>
      </Card.Body>
    </Card>
  )
}
