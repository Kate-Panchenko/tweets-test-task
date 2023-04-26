import { HomePage, StyledLink } from "./Home.styled";

const Home = () => {
    return (
        <HomePage>
            <p>Welcome to the Tweets App</p>
            <p>Check your tweets <StyledLink to='/tweets'>here</StyledLink></p>
        </HomePage>
    )
};

export default Home;