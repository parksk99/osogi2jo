import styled from "styled-components";

export default function TitleBox() {
  return (
    <Box>
      <span className="title">Novelism</span>
      <span className="subtitle">Standard</span>
      <span className="content">
        {
          "소설을 직접 업로드하고, 배경음악과 함께 즐겨보세요!\n텍스트 파일의 위치를 변경하거나 삭제하면 인식할 수 없어요 :("
        }
      </span>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > .title {
    background: linear-gradient(135deg, #43c6ac, #191654);
    font-weight: 900;
    font-family: "Pretendard Variable";
    color: transparent;
    -webkit-background-clip: text;
    font-size: 26px;
  }

  & > .subtitle {
    font-size: 26px;
    font-weight: 900;
    color: #242424;
  }

  & > .content {
    font-size: 16px;
    color: #242424;
    white-space: pre-line;
    margin-top: 10px;
  }
`;
