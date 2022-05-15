import React from 'react';
import styled from "styled-components"
import Section from "./Section";

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                decrpiption="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                decrpiption="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                decrpiption="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"/>
            <Section
                title="Model X"
                decrpiption="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"/>
            <Section
                title="Lowest Cost Solar Panels in America"
                decrpiption="Money-Back Guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"/>
            <Section
                title="Solar for New Roofs"
                decrpiption="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"/>
            <Section
                title="Accessories"
                decrpiption=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"/>
        </Container>

    );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`