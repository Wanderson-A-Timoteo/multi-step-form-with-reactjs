import { ReactNode } from 'react';
import * as C from './styles';

type Props = {
  children: ReactNode;
}

export const Theme = ({Children} : Props) => {
  return (
    <C.Container>
      <C.Area>
        <C.Steps>
          <C.Sidebar>
            ...
          </C.Sidebar>
          <C.Page>
            {Children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
}
