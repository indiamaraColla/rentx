import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(BorderlessButton).attrs({})``;
