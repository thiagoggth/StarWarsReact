import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import api from "../../services/api";

interface ApiPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homewold: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
}

interface ApiData {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiPeople[];
}

const People = () => {
  const [people, setPeople] = useState<ApiPeople[]>([]);

  const getPeopleList = async () => {
    const { data } = await api.get<ApiData>("/people");

    setPeople(data.results);
  };

  useEffect(() => {
    getPeopleList();
  }, []);

  const PeopleContent = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const PeopleListContainer = styled.div`
    padding: 10px;
    display: flex;
    margin: 20px;
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  `;

  const PeopleCard = styled.div`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid rgba(253, 242, 83, 1);
  `;

  const PeopleCardImg = styled.div`
    width: 250px;
    height: 300px;
    background-color: #ccc;
    background-image: url("https://starwars-visualguide.com/assets/img/characters/1.jpg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 4px;
  `;
  const PeopleCardTitle = styled.div`
    text-align: center;
    p {
      font-size: 16px;
      font-weight: bold;
      color: rgba(253, 242, 83, 1);
    }
  `;

  return (
    <PeopleContent>
        <Header />
        <h2 style={{color: 'white'}}>
          Personagens
        </h2>
      <PeopleListContainer>
        <PeopleCard>
          <PeopleCardImg></PeopleCardImg>
          <PeopleCardTitle>
            <p>Luke Skywalker</p>
          </PeopleCardTitle>
        </PeopleCard>
        <PeopleCard>
          <PeopleCardImg></PeopleCardImg>
          <PeopleCardTitle>
            <p>Luke Skywalker</p>
          </PeopleCardTitle>
        </PeopleCard>
        <PeopleCard>
          <PeopleCardImg></PeopleCardImg>
          <PeopleCardTitle>
            <p>Luke Skywalker</p>
          </PeopleCardTitle>
        </PeopleCard>
        <PeopleCard>
          <PeopleCardImg></PeopleCardImg>
          <PeopleCardTitle>
            <p>Luke Skywalker</p>
          </PeopleCardTitle>
        </PeopleCard>
        <PeopleCard>
          <PeopleCardImg></PeopleCardImg>
          <PeopleCardTitle>
            <p>Luke Skywalker</p>
          </PeopleCardTitle>
        </PeopleCard>
        <PeopleCard>
          <PeopleCardImg></PeopleCardImg>
          <PeopleCardTitle>
            <p>Luke Skywalker</p>
          </PeopleCardTitle>
        </PeopleCard>
        <PeopleCard>
          <PeopleCardImg></PeopleCardImg>
          <PeopleCardTitle>
            <p>Luke Skywalker</p>
          </PeopleCardTitle>
        </PeopleCard>
      </PeopleListContainer>
    </PeopleContent>
  );
};

export default People;
