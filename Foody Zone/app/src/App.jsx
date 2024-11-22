import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="Foody Zone.svg" alt="Logo" />
        </div>

        <div className="search">
          <input type="text" placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterButton>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterButton>

      <FoodCard>
        <Cards>

        </Cards>
      </FoodCard>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterButton = styled.div`

display: flex;
justify-content: center;
gap: 12px;
`;

const Button = styled.div`
  background-color: #ff4343;
  border-radius: 5px;
  color: white;
  padding: 6px 12px;
  border: none;
`;

const FoodCard = styled.section`
height: calc(100vh - 170px);
  background-image: url(BG.png);
`

const Cards = styled.div`
  
`