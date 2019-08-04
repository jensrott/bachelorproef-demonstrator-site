import { keyframes } from "styled-components"

export const shakeAnimation = keyframes`
0% {
  transform: rotate(0);
}
33% {
  transform: rotate(15deg);
}
66% {
  transform: rotate(-15deg);
}
99% {
  transform: rotate(15deg);
}
100% {
  transform: rotate(0);
}
`
