import React from "react";
import styled from "@emotion/styled";
import { Poster } from "../components";
import { GetServerSidePropsContext } from "next";
import IMG_API from "../api/Image";

function index({ data }) {
  if (!data) {
    return <>loading..</>;
  } else {
    const slicedDatas = data.reduce((acc, cur, i) => {
      if (i % 5 === 0) acc.push([cur]);
      else acc[acc.length - 1].push(cur);

      return acc;
    }, []);

    return (
      <Container>
        {slicedDatas.map((data, i: number) => (
          <Poster key={i} data={data} />
        ))}
      </Container>
    );
  }
}

export default index;

const Container = styled.div`
  width: clac(100% - 48px);
  height: fit-content;
  padding-top: 70px;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(3, clamp(300px, 33%, 381px));
  grid-template-rows: repeat(auto-fill, 331px);
  gap: 24px;
  @media (max-width: 991px) {
    width: 100%;
    grid-template-columns: repeat(2, minmax(calc(50% - 24px), 381px));
  }
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(1, 381px);
  }
`;

interface GetImg {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = await IMG_API.get().then(res =>
    res.data.map((el: GetImg, i: number) => {
      return i % 5 === 0 ? { src: el.url, title: el.title } : { src: el.url };
    })
  );

  return { props: { data } };
}
