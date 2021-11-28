import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { backlog, inProgress, evaluation, done, backToLog } from './store/action'

function App() {
  const [text, setText] = useState('')
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  function savebacklog() {
    dispatch(
      backlog(text)
    )
  }

  function backlogButton(kanbanId) {
    //console.log(kanbanId)
    dispatch(
      inProgress(kanbanId)
    )
  }

  function toBacklogButton(kanbanId) {
    dispatch(
      backToLog(kanbanId)
    )
  }

  function inProgressButton(kanbanId) {
    dispatch(
      evaluation(kanbanId)
    )
  }

  function evaluationButton(kanbanId) {
    dispatch(
      done(kanbanId)
    )
  }

  return (
    <>
      <Container>
        <Card>
          <Card.Header >
            Kanban Board
          </Card.Header>
          <Card.Body>
            <div style={{ marginBottom: "50px" }}>
              <input type="text" placeholder="New Task" style={{ marginRight: "20px" }} value={text} onChange={(e) => setText(e.target.value)} />
              <Button disabled={!text.trim()} onClick={savebacklog} variant="primary">Save to Backlog</Button> <br />
              
            </div>
            <Row className="g-2">
              <Col md>
                <Card>
                  <Card.Header className="bg-secondary">
                    Backlog
                  </Card.Header>
                  <Card.Body>
                    {state.kanbanNotes.map(arr => {
                      if (arr.status === 'backlog') {
                        return <Card key={arr.id}>
                          <Card.Body>
                            {arr.title}
                            <div className="date">Created at {arr.date}</div>
                          </Card.Body>
                          <Card.Footer>
                            <Button onClick={() => backlogButton(arr.id)} variant="primary">Take</Button>
                          </Card.Footer>
                        </Card>
                      }
                    })}
                  </Card.Body>
                </Card>
              </Col>
              <Col md>
                <Card>
                  <Card.Header className="bg-warning">
                    In Progress
                  </Card.Header>
                  <Card.Body>
                    {state.kanbanNotes.map((arr) => {
                      if (arr.status === 'inProgress') {
                        return <Card key={arr.id}>
                          <Card.Body>
                            {arr.title}
                            <div className="date">Created at {arr.date}</div>
                          </Card.Body>
                          <Card.Footer>
                            <Button onClick={() => toBacklogButton(arr.id)} variant="warning" style={{ marginRight: '10px' }}>Backlog</Button>
                            <Button onClick={() => inProgressButton(arr.id)} variant="primary">Evaluation</Button>
                          </Card.Footer>
                        </Card>
                      }
                    })}
                  </Card.Body>
                </Card>
              </Col>
              <Col md>
                <Card>
                  <Card.Header className="bg-info">
                    Evaluation
                  </Card.Header>
                  <Card.Body>
                    {state.kanbanNotes.map(arr => {
                      if (arr.status === 'evaluation') {
                        return <Card key={arr.id}>
                          <Card.Body>
                            {arr.title}
                            <div className="date">Created at {arr.date}</div>
                          </Card.Body>
                          <Card.Footer>
                            <Button onClick={() => backlogButton(arr.id)} variant="warning" style={{ marginRight: '10px' }}>In Progress</Button>
                            <Button onClick={() => evaluationButton(arr.id)} variant="primary">Done</Button>
                          </Card.Footer>
                        </Card>
                      }
                    })}
                  </Card.Body>
                </Card>
              </Col>
              <Col md>
                <Card>
                  <Card.Header className="bg-success">
                    Done
                  </Card.Header>
                  <Card.Body>
                    {state.kanbanNotes.map(arr => {
                      if (arr.status === 'done') {
                        return <Card key={arr.id}>
                          <Card.Body>
                            {arr.title}
                            <div className="date">Created at {arr.date}</div>
                          </Card.Body>
                          <Card.Footer>
                            <Button onClick={() => inProgressButton(arr.id)} variant="primary">Evaluation</Button>
                          </Card.Footer>
                        </Card>
                      }
                    })}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;
