/* 

1- Context -> Será a caixinha que armazenará os dados  
2 - Reducer - Agrupará as ações do sistema
3 - Provider -> Será o ambiente para que dentro dele eu tenha acesso aos dados do meu Context
4 - Hook -> Simplifica os processos, em todas as páginas que precisamos de acesso as informações do Context ele vai salvar e buscar no Context as informações

*/
import { createContext, ReactNode, useContext, useReducer } from "react";

// Types de InitialData
type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
  portfolio: string;
}

// Types de action
type Action = {
  type: FormActions;
  payload: any;
}

//Type para a Context Api
type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

// Types ou Props do Provider
type FormProviderProps = {
  children: ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
  portfolio: ''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
  setPortfolio
}

const FormReducer = (state: State, action: Action) => {
  switch(action.type) {
    case FormActions.setCurrentStep:
      return {...state, currentStep: action.payload};
    case FormActions.setName:
      return {...state, name: action.payload};
    case FormActions.setLevel:
      return {...state, level: action.payload};
    case FormActions.setEmail:
      return {...state, email: action.payload};
    case FormActions.setGithub:
      return {...state, github: action.payload};
    case FormActions.setPortfolio:
      return {...state, portfolio: action.payload};
    default: 
    return state;
  }
}

// Provider será um componente, ele será chamado no App.tsx, será o componente principal da aplicação
// Tudo que tiver na aplicação estará dentro do ambiente e assim teremos acesso aos dados do Context
export const FormProvider = ({children}: FormProviderProps) => {

  const [state, dispatch] = useReducer(FormReducer, initialData);
  const value = {state, dispatch};
  
  return(
    <FormContext.Provider value={value} >
      {children}
    </FormContext.Provider>
  );
}

// Context Hook
// Será usado para ter acesso aos dados do Context
export const useForm = () => {
  const context = useContext(FormContext);

  if(context === undefined) { // Verifica se os dados recebidos esta fora do Provider
    throw new Error('useForm precisa ser usado do FormProvider');
  }
  return context;
}
