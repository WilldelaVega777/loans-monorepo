export interface ISwitch {
  defaultValue: boolean
  onChange: (value: boolean) => void
  onText: React.ReactElement | React.ReactChildren | string
  offText: React.ReactElement | React.ReactChildren | string
}
