import { useReducer, createContext } from "react";

export const NotesListContext = createContext({
  notesList: [],
  addNote: () => {},
  deleteNote: () => {},
});
const notesListReducer = (currentNoteslist, action) => {
  let newNotesList = currentNoteslist;
  if (action.type === "DELETE-NOTE") {
    newNotesList = currentNoteslist.filter(
      (note) => note.id != action.payload.noteId
    );
  } else if (action.type === "ADD-NOTE") {
    newNotesList = [action.payload, ...currentNoteslist];
  }
  localStorage.removeItem;
  // let localNotesList;
  localStorage.setItem("localNotesList", JSON.stringify(newNotesList));
  return newNotesList;
};
let localNotesList = localStorage.getItem("localNotesList");
let objNotesList = JSON.parse(localNotesList);
if (!objNotesList) {
  objNotesList = [];
}
export default function NotesListProvider({ children }) {
  const [notesList, dispatchNotesList] = useReducer(
    notesListReducer,
    // DEFAULT_NOTES_LIST
    objNotesList
  );

  const addNote = (title, body) => {
    dispatchNotesList({
      type: "ADD-NOTE",
      payload: {
        id: Date.now(),
        topicName: title,
        topicDetails: body,
      },
    });
  };

  const deleteNote = (noteId) => {
    dispatchNotesList({
      type: "DELETE-NOTE",
      payload: {
        noteId,
      },
    });
  };

  return (
    <NotesListContext.Provider value={{ notesList, addNote, deleteNote }}>
      {children}
    </NotesListContext.Provider>
  );
}

const DEFAULT_NOTES_LIST = [
  {
    id: 1,
    topicName: "Learning React js",
    topicDetails:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus totam ipsum saepe tempora nam sed! Hic molestiae repellendus cumque in labore neque consequuntur quis dolorum aliquid! Impedit, doloremque. Possimus, provident.",
  },
  {
    id: 2,
    topicName: "Python Asyn Methods",
    topicDetails:
      " Lorem ipsum dolor, sised! Hic molestiae repellendus cumque in labore neque consequuntur quis dolorum aliquid! Impedit, doloremque. Possimus, provident.",
  },
  {
    id: 3,
    topicName: "JS Vanilla vs React js",
    topicDetails:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus totam ipsum saepe tempora nam sed! Hic molestiae repellendus cumque in labore neque consequuntur quis dolorum aliquid! Impedit, doloremque. Possimus, provident.",
  },
];
