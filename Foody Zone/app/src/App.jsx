import { useEffect, useState } from "react";
import Search from "./components/Search";
import styled from "styled-components";

export const BASE_URL = "http://localhost:9000"

const App = () => {

  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);
  

  // fetchFoodData();
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoding(true);
      try{
        const responce = await fetch(BASE_URL)
        const json = await responce.json()
        setLoding(false)
        setData(json);
      }catch(error){
        setError("Unable To fetch DATA")
      }
    }
    fetchFoodData()
  }, [])
  // console.log(data)
  if(error) return <div>{error}</div>
  if(loding) return <div>Loading...!</div>
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

    <Search data={data}/>
      
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
padding-bottom: 40px;
`;

export const Button = styled.div`
  background-color: #ff4343;
  border-radius: 5px;
  color: white;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
`;

