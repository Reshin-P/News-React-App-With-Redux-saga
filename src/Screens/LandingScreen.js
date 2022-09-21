import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NEWS_START } from "../redux/actionTypes";
const LandingScreen = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => {
    return state.news.news;
  });
  useEffect(() => {
    dispatch({ type: NEWS_START });
  }, []);
  return (
    <>
      <Container>
        <Row>
          <h1>Today's News</h1>
          {news &&
            news.map((item) => (
              <Col sm={12} md={3} xl={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.urlToImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Link to={`/news/${item.uniqueid}`}>
                      <Button size="small">Learn More</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
export default LandingScreen;
