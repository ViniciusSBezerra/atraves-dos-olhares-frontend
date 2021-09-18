
import api from '../../api'

import { Container, Row, Card, CardGroup, CardImg, Jumbotron } from 'reactstrap'

import React, { useEffect, useState } from "react"


export default function Homepage() {

  const [data, setData] = useState({});

  const listImage = async () => {
    await api.get("list-image").then((res) => {
      setData(res.data.response)

    })
  }

  useEffect(() => {
    listImage();
  }, [])

  return (

    <Container style={{ background: "#ededed" }} >
      <Row xl="3">

        {Array.isArray(data) && data.map(image => (
          <CardGroup key={image.id} style={{ marginTop: "15px" }}>
            <Card >
              <CardImg top width="100%" height="400px" src={image.url}></CardImg>
            </Card>
          </CardGroup>
        )

        )}

      </Row>

      <Jumbotron style={{ border: "solid 1px black", height: "150px", border: "1px black", alignItems: "center", justifyContent: "center", backgroundColor: "#ededed", marginBottom: "0", display: "flex" }}>
        <a style={{ marginRight: "10px", textDecoration: "none", color: "black" }} target="_blank" href="https://web.facebook.com/atravesdosolhares/?_rdc=1&_rdr"> <img src="/facebook.png"></img> Facebook </a>
        <a style={{ marginRight: "10px", textDecoration: "none", color: "black" }} target="_blank" href="https://instagram.com/atraves_dos_olhares?utm_medium=copy_link"> <img src="/instagram.png"></img> Instagram</a>
      </Jumbotron>
    </Container>
  )
}


