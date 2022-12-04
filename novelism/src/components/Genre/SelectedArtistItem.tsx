import styled from "styled-components";

export function NoArtist() {
  return (
    <Item>
      <span>아티스트를 추가해주세요.</span>
    </Item>
  );
}

export function Artist() {
  return <></>;
}

const Item = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 3px dashed #636363b5;
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: pre-line;
  word-break: keep-all;
  font-size: 14px;
  text-align: center;
`;
