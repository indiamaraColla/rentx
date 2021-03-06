import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  font-size: ${RFValue(15)}px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalCars = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})``;
