import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import OptionCard from "../../components/OptionCard";
import pixabayApi from "../../services/bingApi";
import swApi from "../../services/swApi";

import { ApiDataType, ApiPeopleType } from "../../types/ApiTypes";
import * as S from "./styled";

const People = () => {
  const [people, setPeople] = useState<ApiPeopleType[]>([]);

  const getPeopleList = async () => {
    const { data } = await swApi.get<ApiDataType>("/people");

    getAndSetPeopleImageList(data.results);
  };

  const getAndSetPeopleImageList = async (peopleList: ApiPeopleType[]) => {
    const newList: ApiPeopleType[] = [];

    for (const character of peopleList) {
      const { data } = await pixabayApi.get("/", {
        params: {
          q: `${character.name} star wars`,
        },
      });

      if (data.total !== 0) {
        character.urlImage = data.value[0].contentUrl;
      }
      newList.push(character);
    }

    setPeople(newList);

    // const newList = peopleList.map(async (character) => {
    //   const { data } = await pixabayApi.get("/", {
    //     params: {
    //       q: character.name,
    //     },
    //   });

    //   if(data.total !== 0){
    //     character.urlImage = data.hits[0].webformatURL;
    //     return character;
    //   }
    //   return character;
    // });
  };

  useEffect(() => {
    getPeopleList();
  }, []);

  return (
    <S.PeopleContent>
      <Header />
      <h2>Characters</h2>
      <S.PeopleListContainer>
        {people.map((character, index) => (
          <OptionCard
            label={character.name}
            key={index}
            photoUri={character.urlImage}
          />
        ))}
      </S.PeopleListContainer>
    </S.PeopleContent>
  );
};

export default People;
