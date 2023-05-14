import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from '../../helpers/comments';
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
import { useState } from "react";
import { useEffect } from "react";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const { data } = useGetCommentsQuery();
  const filteredValue = useSelector(selectFilter);

  useEffect(() => {
    if (data) setComments(data);
  }, [data])

  const updateComments = (comment) => {
    const { id: selectId } = comment;
    setComments((prevComments) => prevComments.map((item) => {
      if (item.id === selectId) {
        return {
          ...item,
          ...comment
        }
      } 
      return item;
    }) )
  }
  
  const filteredComments = () => {
    return comments.filter(({content}) => content.toLowerCase().includes(filteredValue.toLowerCase()))
  }

  return (
    <Grid>
      {comments &&
        filteredComments().map((comment) => <Comment key={comment.id} {...comment} onUpdateComment={updateComments} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
