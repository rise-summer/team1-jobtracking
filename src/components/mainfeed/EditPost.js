import Modal from "./Modal";
import React, { useState, useEffect } from "react";

export default function EditPost({
  title,
  description,
  handlePostUpdate,
  handleEdit,
}) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [error, setError] = useState("");

  const handleTitleChange = (newTitle) => {
    setEditedTitle(newTitle);
  };
  const handleDescriptionChange = (newDescription) => {
    setEditedDescription(newDescription);
  };
  const handleSubmit = () => {
    if (editedTitle && editedDescription) {
      handlePostUpdate(editedTitle, editedDescription);
      setError("");
    } else {
      setError("Post contents cannot be empty!");
    }
  };
  const handleClose = () => {
    // handleModalClose
  };
  return (
    <Modal
      contentType="Edit Post"
      title={editedTitle}
      description={editedDescription}
      buttonValue={"Save Changes"}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      error={error}
      handleSubmit={handleSubmit}
      handleCancel={() => handleEdit()}
    />
  );
}
