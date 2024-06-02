import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const GradientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  padding: 3rem;
  background: linear-gradient(90deg, #003366 0%, #61878E 100%);
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1.5rem;
  margin-right: -1rem;
  background: white;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 25rem;
  height: 3rem;
  border: none;
  font-size: 1.5rem;
  text-align: end;
`;

const SearchLogo = styled.h1`
  font-size: 1.7rem;
  white-space: nowrap;
  color: black;
`;

const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 0.5rem;
  background: black;
  cursor: pointer;
`;

const SearchIcon = styled(FaSearch)`
  color: white;
  font-size: 2rem;
`;

const PaddingContainer = styled.div`
  padding: 0 0rem;
  background: #F2F2F2;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  color: black;
`;

const MenuItem = styled(HeaderText)`
  display: flex;
  justify-content: center;
  width: 33%;
`;

const BannerOneContainer = styled(ContainerColumn)`
  align-items: center;
  padding: 3rem 0;
`;

const BannerOneHeader = styled(HeaderText)`
  font-size: 3rem;
`;

const BannerOneText = styled.p`
  font-size: 2rem;
`;

const GradientBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  padding: 0.5rem;
  background: linear-gradient(90deg, #003366 0%, #61878E 100%);
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  width: 12rem;
  height: 12rem;
`;

const KlrWithImage = styled(HeaderText)`
  color: white;
`;

const BannerTwoContainer = styled(ContainerColumn)`
  align-items: left;
  padding: 2rem 0;
`;

const BannerTwoHeader = styled(HeaderText)`
  font-size: 3rem;
`;

const BannerTwoText = styled.p`
  font-size: 2rem;
`;

const BannerTwoImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  padding: 3rem 0;
`;

const BannerTwoImage = styled.img`
  width: 12rem;
  height: 8rem;
`;

const BannerTwoImageLarge = styled.img`
  width: 12rem;
  height: 10rem;
`;

const BannerThreeContainer = styled(ContainerColumn)`
  align-items: end;
  padding: 1rem 0;
`;

const BannerThreeHeader = styled(HeaderText)`
  font-size: 3rem;
`;

const BannerThreeText = styled.p`
  font-size: 2rem;
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.$justify_content};
  width: 100%;
  padding: 0.5rem;
`;

const WordBox = styled.div`
  background: ${props => props.$background};
  padding: 0.5rem;
`;

const WordText = styled(HeaderText)`
  font-size: 3rem;
`;

const BannerLikelionContainer = styled(ContainerColumn)`
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  background: #FFEDDF;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BannerLikelionHeader = styled(HeaderText)`
  font-size: 3rem;
`;

const BannerLikelionText = styled.p`
  font-size: 2rem;
`;

const BannerLikelionTextSmall = styled.p`
  font-size: 1.5rem;
`;

const BannerLikelionImage = styled.img`
  width: 400px;
`;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: black;
    color: white;
`;

const DescriptionText = styled.p`
    font-size: 1rem;
    font-family: 'LINE-Rg';
    font-size: ${props => props.$font_size};
    color: ${props => props.$color};
`;

const ListContainer = styled.ul`
    list-style-type: disc;
`;

const ListItem = ({children}) => {
    return (
        <li style={{marginLeft:"1rem"}}>
            <DescriptionText>{children}</DescriptionText>
        </li>
    );
};

const AlertContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AlertText = styled(HeaderText)`
    font-size: 1.5rem;
    color : white;
`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const LoginText = styled.p`
    font-size: 1rem;
`;

const LoginContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const SizedBoxColumn = styled.div`
  height: ${props => props.$size || "2rem"};
`;


export default function MainPageBefore() {
  return (
    <>
      <HeaderContainer>
        <HeaderText $font_size="1.5rem">KLR.KR</HeaderText>
        <LoginContainer>
            <LoginText>로그인</LoginText>
            <LoginText>|</LoginText>
            <LoginText>회원가입</LoginText>
        </LoginContainer>
      </HeaderContainer>
      <ContainerColumn>
        <GradientContainer>
          <ContainerColumn style={{ width: '100%' }}>
            <HeaderText style={{ fontSize: '2rem', color: 'white' }}>도메인, 이제는 무료로</HeaderText>
            <SearchContainer>
              <SearchBox>
                <SearchInput type="text" placeholder="원하는 도메인을 입력" />
                <SearchLogo>.klr.kr</SearchLogo>
              </SearchBox>
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </SearchContainer>
          </ContainerColumn>
        </GradientContainer>
        <PaddingContainer>
          <MenuContainer>
            <MenuItem>내 도메인 관리</MenuItem>
            <p>|</p>
            <MenuItem>Https 인증서 발급</MenuItem>
            <p>|</p>
            <MenuItem>HUFS_G 계정 연동</MenuItem>
          </MenuContainer>
        </PaddingContainer>
        <BannerOneContainer>
          <BannerOneHeader>도메인 무료 발급</BannerOneHeader>
          <BannerOneText>도메인 비용이 소중한 프로젝트 배포의 발목을 잡지 않도록.</BannerOneText>
          <ImageContainer>
            <Image src="img/banner_project.png" />
            <GradientBox>
              <KlrWithImage>KLR.KR</KlrWithImage>
            </GradientBox>
            <Image src="img/banner_internet.png" />
          </ImageContainer>
        </BannerOneContainer>
        <BannerTwoContainer>
          <BannerTwoHeader>프리미엄 서비스 제공</BannerTwoHeader>
          <BannerTwoText>제한없는 월 트래픽 1TB, TTL 갱신시간 5분</BannerTwoText>
          <BannerTwoImageContainer>
            <ImageContainer>
              <BannerTwoImage src="img/oracle_cloud.png" />
              <BannerTwoText>Oracle Cloud Server를 이용하여, 월 1TB 트래픽으로 운용합니다.</BannerTwoText>
            </ImageContainer>
            <ImageContainer>
              <BannerTwoImageLarge src="img/server_interaction.png" />
              <BannerTwoText>TTL 시간을 300초로 획기적으로 줄여, 빠른 갱신속도를 보장합니다.</BannerTwoText>
            </ImageContainer>
          </BannerTwoImageContainer>
        </BannerTwoContainer>
        <BannerThreeContainer>
          <BannerThreeHeader>사용자 편의 서비스 및 UI 제공</BannerThreeHeader>
          <BannerThreeText>이해하기 어려운 용어는 쉬운 용어로.</BannerThreeText>
          <WordContainer>
            <WordBox $background="#A6A6A6">
              <WordText>A, AAAA, CNAME, Redirection, ...</WordText>
            </WordBox>
          </WordContainer>
          <WordContainer $justify_content="right">
            <WordBox $background="#00F6CA">
              <WordText>유동 연결(주소창 주소로), 고정 연결(입력한 주소로)</WordText>
            </WordBox>
          </WordContainer>
        </BannerThreeContainer>
        <BannerLikelionContainer>
          <TextContainer>
            <BannerLikelionHeader>한국외대 멋쟁이사자처럼 혜택</BannerLikelionHeader>
            <BannerLikelionText>개수 제한 없이 무료로 이용가능</BannerLikelionText>
          </TextContainer>
          <BannerLikelionImage src="img/LIKELION.svg" />
          <BannerLikelionText>기간: ~2024년까지</BannerLikelionText>
          <BannerLikelionTextSmall>기본 사용자는 개수 제한 3개</BannerLikelionTextSmall>
        </BannerLikelionContainer>
      </ContainerColumn>
      <FooterContainer>
        <DescriptionText>대표: 이수혁</DescriptionText>
        <SizedBoxColumn />
        <DescriptionText>소속</DescriptionText>
        <ListContainer>
          <ListItem>한국외국어대학교 정보통신공학과 ( HUFS Information and Communication Engineering)</ListItem>
          <ListItem>한국외국어대학교 글로벌캠퍼스 멋쟁이사자처럼 11기 (아기사자) & 12기 (운영진)</ListItem>
        </ListContainer>
        <SizedBoxColumn />
        <DescriptionText>©LeeSuHyeok All Rights Reserved.</DescriptionText>
        <SizedBoxColumn />
        <AlertContainer>
          <AlertText>현재 시범 운용 단계입니다.</AlertText>
          <AlertText>작업하신 도메인 내역은</AlertText>
          <AlertText>언제든지 고지없이 삭제될 수 있습니다.</AlertText>
        </AlertContainer>
      </FooterContainer>
    </>
  );
}
