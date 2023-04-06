import { Form, useNavigation } from "@remix-run/react";

export default function () {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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
        <div className="form-actions">
          <button disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Note"}
          </button>
        </div>
      </Form>
    </main>
  );
}
