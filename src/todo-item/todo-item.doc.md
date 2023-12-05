# TodoItem

A todo Item represents one todo in the list of similar todos. It receives these props:

- id — to track it in the list and perform tasks such as completion or deletion
- dueTo — serves as a deadline for a task and serves the date when the task is estimated to be completed
- title — is text that this particular todo has a it description
- onComplete — is a callback. It receives the Id of a task, and updates task with this Id. The callback should be a pure function that returns the transformed props of a TodoItemProps
- onDelete — is a callback. It receives the Id of a task, and deletes the TodoItem with this Id. The callback should be a pure function that returns unchanged props of a TodoItemProps
- onUpdate — is a callback. It receives the Id of a task and UpdateTodoItemProps, it updates the props of todo with this Id replacing it's properties with UpdateTodoItemProps. The callback should be a pure function that returns updated TodoItemProps
