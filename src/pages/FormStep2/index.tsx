import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {

  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect( () => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3');
    } else {
      alert("Preencha todos os dados obrigatórios.")
    }
  }

  return(
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <SelectOption 
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
        />

        <SelectOption 
          title="Sou Desenvolvedor de Sistemas"
          description="Já desenvolvo sistemas há mais de 2 anos"
          icon="😎"
        />
        
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
