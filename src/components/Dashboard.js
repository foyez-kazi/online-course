import React, { useState, useEffect } from 'react'
import { courseData } from '../fakeData/courseData'
import { Course } from './Course'
import { Container, Row, Col } from 'react-bootstrap'

const Dashboard = () => {
  const [courses, setCourses] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => setCourses(courseData), [])

  const handleEnroll = (course) => {
    setCart([...cart, course])
  }

  const totalPrice = cart
    .reduce((total, course) => total + course.price, 0)
    .toFixed(2)

  return (
    <Container>
      <h1 className="display-4 text-center my-4">Online Course</h1>
      <Row>
        <Col sm={5}>
          {courses.map((course) => (
            <Course key={course.id} course={course} clicked={handleEnroll} />
          ))}
        </Col>
        <Col sm={{ span: 4, offset: 3 }}>
          <p>Total courses: {cart.length}</p>
          <p>Total Price: ${totalPrice}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
