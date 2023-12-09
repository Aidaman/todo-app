# Edit Todo Dialog

This component represents a dialog window for editing a Todo

It features:

- text input
- datetime input
- row with confirm and cancel actions:
  - confirm will update Todo and save it to the local storage
  - reject will simply close the dialog without any changes to the Todos

## Props

- isShown: if true — the modal window displays, and the opposite
- initialValue (nullable): will pass initial values to the inputs, or the empty values if undefined
- onUpdateConfirm: A function that takes an updated Todo as argument and return void. Generally it requires to call some edit todo methid, and set isShown and initialValue properties to false and undefined
- onUpdateReject: A function that will simply close the window and set the initialValue to undefined to avoid cases when modal window called with prevous value
