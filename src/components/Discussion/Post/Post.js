import React from 'react';
import '../Post/Post.css';

const Post = (props) => (
  <div className="panel panel-default post-body">
    <div className="panel-body">
      {
        props.postBody.map((postPart, idx) => (
          <p className="panel-body-div" key={idx}>{postPart}</p>
        ))
      }
    </div>
  </div>
);

export default Post;