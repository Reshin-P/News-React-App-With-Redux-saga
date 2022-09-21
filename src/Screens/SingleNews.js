import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { NEWS_START, SINGLE_NEWS_START } from "../redux/actionTypes";
import { Link, useParams } from "react-router-dom";
const SingleNews = () => {
  const params = useParams();
  const news = useSelector((state) => {
    return state.news.news;
  });
  console.log("nww", news);
  let SingleNews = news.filter((item) => {
    if (item.uniqueid === params.id) {
      return item;
    }
  });
  SingleNews = SingleNews[0];
  return (
    <>
      <Container>
        SingleNews
        <div>
          <img src={SingleNews.urlToImage}></img>
          <h3>Description</h3>
          <p>{SingleNews.description}</p>
        </div>
      </Container>
    </>
  );
};
export default SingleNews;
