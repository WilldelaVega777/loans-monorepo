import { Fragment } from 'react'
import { SCInputText, SCInputTextLabel } from './styles'
import { IInputText } from './types'

const InputText: React.FC<IInputText> = ({ label }: IInputText) => {
  return (
    <Fragment>
      <SCInputTextLabel>
        {label}
        <br />
        <SCInputText type='text' />
      </SCInputTextLabel>
    </Fragment>
  )
}

export default InputText
