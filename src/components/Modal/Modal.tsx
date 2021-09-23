import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import ReactDOM from 'react-dom';

interface ReactElement {
  children: ReactNode
}

export const Modal = ({ children }: ReactElement) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal')!
  )
}
