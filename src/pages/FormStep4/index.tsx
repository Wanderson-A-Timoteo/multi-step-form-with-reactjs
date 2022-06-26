import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';

export const FormStep4 = () => {

  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect( () => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      });
    }
  }, []);

  return(
    <Theme>
      <C.Container>
        <p>Passo 4/4</p>
        <h1>Cadastro Finalizado</h1>
        <p>Dados enviados com sucesso!</p>

        <hr />

        <h3>Confira seus dados enviados.</h3>

        <span>Nome:</span>
        <p> {state.name} </p>

        <span>Nível:</span>
        <p> {state.level === 0 ? 'Programador Iniciante' : 'Programador Profissional'} </p>

        <span>E-mail:</span>
        <p> {state.email} </p>

        <span>Github:</span> 
        <p> {state.github} </p>

        <span>Portfólio ou LinkedIn:</span> 
        <p> {state.portfolio} </p>
        
      </C.Container>
    </Theme>
  );
}
