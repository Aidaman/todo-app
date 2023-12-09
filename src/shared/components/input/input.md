# Custom Input

This component is supposed to provide some custom styling for a vanila input. It is optional but highly recomended to pass the type property

## props

- initialValue — optional parametre. If passed the initial value of the input will be changed to this, but otherwise the initial value will be empty string
- onCustomInput — callback that suppose to replace vanila onInput event and create no conflicts with
- this component can receive all the properties that vanila input can, but I'd not recomend passing onInput since it could call an unexpected behaiviour, so please use onCustomInput instead
