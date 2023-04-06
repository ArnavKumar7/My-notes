import { Form, useLoaderData } from "@remix-run/react";
import notestyles from "~/styles/Notes.css";
import NewNote from "~/components/NewNote";
import { ActionArgs, redirect } from "@remix-run/node";
import axios from "axios";
import NoteList from "~/components/NoteList";

import notelist from "~/styles/NoteList.css";

interface notes {
  title: string;
  content: string;
  id: string;
}

export default function () {
  const notesData: notes[] = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notesData} />
    </main>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: notestyles },
    { rel: "stylesheet", href: notelist },
  ];
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  await axios.post("http://localhost:8000/notes", noteData);
  return redirect("/notes");
}

export async function loader() {
  const notes = await axios.get("http://localhost:8000/getnotes");
  return notes.data;
}
