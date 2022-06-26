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

        <h4>Nome:</h4>
        <p> {state.name} </p>

        <h4>Nível:</h4>
        <p> {state.level === 0 ? 'Programador Iniciante' : 'Programador Profissional'} </p>

        <h4>E-mail:</h4>
        <p> {state.email} </p>

        <h4>Github:</h4> 
        <p> {state.github} </p>
        
      </C.Container>
    </Theme>
  );
}
