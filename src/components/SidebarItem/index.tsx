import { Link } from 'react-router-dom';
import * as C from './styles';

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export const SidebarItem = ({title, description, icon, path} : Props) => {
  return(
    <C.Container>
      <Link to={path}>
        
      </Link>
    </C.Container>
  );
}