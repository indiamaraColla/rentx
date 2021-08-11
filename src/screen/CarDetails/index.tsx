import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  About,
  Footer,
} from './styles';

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>
      <CarImage>
        <ImageSlider
          imagesUrl={[
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFRIVFRcVGBcWFxcaExYVFxUXFhUWFhcYHSggGBolGxUYITEhJykrLi4uGB8zODMsNygtLisBCgoKDg0OGBAQGysmHyUrLS0tLTItLS0tLS0rLS0tLS0tLS0vLi0tLS8vLS0tLS0tLS0tLi0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABJEAACAQIDBAcEBQkFBwUAAAABAgADEQQSIQUxQVEGEyJhcYGhBzJCkVJyscHRFCNDU2KCkqLCF3Oy4fAVFmOD0tPxJDNUdJT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAOBEAAgECAgYHBQcFAAAAAAAAAAECAxEEIQUSEzFBUWFxkaGxwdEUMoHh8BUiQlJigpIjcqLC8f/aAAwDAQACEQMRAD8A7jERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEwa21KCe/XpL9aoo+0zEq9KMGu/E0/Jr/ZeVcorijSFGpNXjFvqRMxIH/fHA/8AyE+TfhPB0uwX675K5HosjaQ5ov7LX/JL+L9CfiQH+92C/XAeKuP6ZfTpNhDa1dNd17i/zEnXjzIeGrR3wkvgyYiYdHaVF/drU28HU/fMsGWujJxcd6sexEQQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCJYxFdaal3ZURRcsxAUDmSdBNR2307p0swornYb2a4RfEe94C1zwBGsrKcY72a0qFSs7U43+ue42+vWVFLOwVRvLEADxJml7c9otCiG6pTUy72Jy0x3337+dr8JzLpd0wqu16rs7b1pDs277bkU+bHvGs0HF42pV99gANyjRF8Bff3m575mpSnuyXedU6VDDZT+/Pksorrazb5pNPg2mdM2n7W673CMB3U1sPm3a+RmrYvpx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',
          ]}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name="380/km" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É
          um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
