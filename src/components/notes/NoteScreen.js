import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NotesAppBar } from "../journal/NotesAppBar";
import { useForm } from "../../hooks/useForm";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;

  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="What are you thinking?"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Write a complete description"
          className="notes__textarea"
          autoComplete="off"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="note__image mt-5">
            <img
              src="https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip"
              alt="description"
            />
          </div>
        )}
      </div>
    </div>
  );
};
