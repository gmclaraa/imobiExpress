import React, { Fragment } from 'react';
import { Container, Text } from './styles';

const Banner = () => {
    return (
        <Container>
            <Text>
                <h2>Encontre o lugar perfeito para chamar de seu.</h2>
                <p>Explore imóveis e descubra o espaço ideal para você e sua família.</p>
                <span>Cadastre seu anúncio</span>
            </Text>
        </Container>
    );
};

export default Banner;