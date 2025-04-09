import { Theme } from '@/types'

export const lightTheme: Theme = {
  appBackground: '#F9F9F9',
  appColor: '#1A1F36',
  appDefaultStroke: '#DADCE0',
  appLogo: 'luminare-logo-blue.png',
  appLogoTxt: 'luminare-logo-txt-blue.png',
  appSkeletonFrom: '#EAECEF',
  appSkeletonTo: '#CCD1D9',
  buttons: {
    alert: '#B00020',
    alertColor: '#FFFFFF',
    alertHover: '#9B001B',
    disabled: '#D3D6DA',
    disabledColor: '#9CA3AF',
    primary: '#C8A35F',
    primaryColor: '#F9F9F9',
    primaryHover: '#E8C27B',
  },
  card: {
    alert: '#B00020',
    background: '#FFFFFF',
    border: '#DADCE0',
    success: '#1E8E3E',
    warning: '#F7A300',
  },
  textInput: {
    active: '#FFFFFF',
    activeColor: '#1A1F36',
    borderColor: '#DADCE0',
    disabled: '#F0F2F5',
    disabledBorderColor: '#E0E3E7',
    disabledColor: '#9CA3AF',
    placeholderColor: '#9CA3AF',
  },
  typographies: {
    error: '#FF0202',
    subtitle: '#5C6370',
    success: '#1E8E3E',
  },
}

export const darkTheme: Theme = {
  appBackground: '#1A1F36',
  appColor: '#F5F5F5',
  appDefaultStroke: '#2A3B5C',
  appLogo: 'luminare-logo-gold.png',
  appLogoTxt: 'luminare-logo-txt-gold.png',
  appSkeletonFrom: '#0C1022',
  appSkeletonTo: '#2A3B5C',
  buttons: {
    alert: '#B00020',
    alertColor: '#FFFFFF',
    alertHover: '#9B001B',
    disabled: '#313649',
    disabledColor: '#6D7D8E',
    primary: '#C8A35F',
    primaryColor: '#1A1F36',
    primaryHover: '#E8C27B',
  },
  card: {
    alert: '#B00020',
    background: '#0F1535',
    border: '#2A3B5C',
    success: '#1E8E3E',
    warning: '#F7A300',
  },
  textInput: {
    active: '#0F1535',
    activeColor: '#F5F5F5',
    borderColor: '#2A3B5C',
    disabled: '#282D49',
    disabledBorderColor: '#2E3F55',
    disabledColor: '#58677C',
    placeholderColor: '#89A7CE',
  },
  typographies: {
    error: '#FF0202',
    subtitle: '#A9B8CC',
    success: '#1E8E3E',
  },
}
