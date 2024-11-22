import { useEffect, useState } from "react";
import Search from "./components/Search";
import styled from "styled-components";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  // fetchFoodData();
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoding(true);
      try {
        const responce = await fetch(BASE_URL);
        const json = await responce.json();
        setLoding(false);
        setData(json);
      } catch (error) {
        setError("Unable To fetch DATA");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];
  // console.log(data)
  if (error) return <div>{error}</div>;
  if (loding) return <div>Loading...!</div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="Foody Zone.svg" alt="Logo" />
          </div>

          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food"
            />
          </div>
        </TopContainer>

        <FilterButton>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterButton>
      </Container>
      <Search data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (0< width < 600px) {
    flex-direction: column;
    height: 120px;
    margin: 20px;
  }
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      ::placeholder{
        color: white;
      }
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
  background-color: ${({ isSelected }) => (isSelected ? "#eb1b1b" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  border-radius: 5px;
  color: white;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #eb1b1b;
  }
`;
