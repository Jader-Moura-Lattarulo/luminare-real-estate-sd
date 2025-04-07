import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    appBackground: string
    appColor: string
    appLogo: string
    buttons: {
      alert: string
      alertColor: string
      alertHover: string
      disabled: string
      disabledColor: string
      primary: string
      primaryColor: string
      primaryHover: string
    }
    textInput: {
      active: string
      activeColor: string
      borderColor: string
      disabled: string
      disabledBorderColor: string
      disabledColor: string
      placeholderColor: string
    }
  }
}
