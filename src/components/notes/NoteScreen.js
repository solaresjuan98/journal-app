import React from "react";
import { NotesAppBar } from "../journal/NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="What are you thinking?"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="Write a complete description"
          className="notes__textarea"
          autoComplete="off"
        ></textarea>

        <div className="note__image mt-5">
          <img
            src="https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip"
            alt="description"
          />
        </div>
      </div>
    </div>
  );
};
