import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect( () => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '' && state.portfolio !== '') {
      history.push('/step4');
    } else {
      alert("Preencha todos os dados obrigatórios.")
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch( {
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch( {
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  const handlePortfolioChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch( {
      type: FormActions.setPortfolio,
      payload: e.target.value
    });
  }

  return(
    <Theme>
      <C.Container>
        <p>Passo 3/4</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os dados para conseguirmos entrar em contato. </p>

        <hr />

        <label>
          Qual seu e-mail? <span>*</span>
          <input 
            type="email" 
            autoFocus 
            value={state.email} 
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu Github? <span>*</span>
          <input 
            type="url" 
            value={state.github} 
            onChange={handleGithubChange}
          />
        </label>

        <label>
          Qual seu Portfólio ou LinkedIn <span>*</span>
          <input 
            type="url" 
            value={state.portfolio} 
            onChange={handlePortfolioChange}
          />
        </label>
        <Link to="/step2" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
}
