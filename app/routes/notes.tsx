import { Form } from "@remix-run/react";
import notestyles from "~/styles/Notes.css";
import NewNote from "~/components/NewNote";

export default function () {
  return <NewNote />;
}

export function links() {
  return [{ rel: "stylesheet", href: notestyles }];
}
