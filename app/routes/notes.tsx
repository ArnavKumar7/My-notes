import { Form } from "@remix-run/react";
import notestyles from "~/styles/Notes.css";

export default function () {
  return (
    <main>
      <Form method="post" id="note-form">
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" required />
        </p>
        <button>Add Note</button>
      </Form>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: notestyles }];
}
