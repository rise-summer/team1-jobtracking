import Modal from "./Modal";
import React from "react";

export default function DeletePost({ handlePostDelete, handleDelete }) {
  return (
    <Modal
      contentType="Delete Post"
      description={"Are you sure you want to delete this post?"}
      buttonValue={"Delete"}
      handleCancel={() => handleDelete()}
      handleSubmit={() => handlePostDelete()}
    />
  );
}
