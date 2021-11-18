import React, { Fragment, useState } from 'react'
import {
  SCSwitch,
  SCSwitchInput,
  SCSwitchInputWrapper,
  SCSwitchText,
  SCSwitchToggle,
  SCSwitchWrapper
} from './styles'
import { ISwitch } from './types'

const Switch: React.FC<ISwitch> = ({
  defaultValue,
  offText,
  onChange,
  onText
}: ISwitch) => {
  const [currentState, setCurrentState] = useState<boolean>(defaultValue)
  return (
    <Fragment>
      <SCSwitchWrapper
        onClick={() => {
          setCurrentState((previous) => {
            onChange(!previous)
            return !previous
          })
        }}
      >
        <SCSwitchInputWrapper>
          <SCSwitch>
            <SCSwitchInput
              checked={currentState}
              readOnly={true}
              type='checkbox'
            />
            <SCSwitchToggle />
          </SCSwitch>
        </SCSwitchInputWrapper>
        <SCSwitchText>{currentState ? onText : offText}</SCSwitchText>
      </SCSwitchWrapper>
    </Fragment>
  )
}

export default Switch
