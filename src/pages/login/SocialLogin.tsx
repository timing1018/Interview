import React, { useState } from 'react';
import styled from 'styled-components';
import googleImage from './../../img/google.png';
import kakaoImage from './../../img/kakao.png';
import naverImage from './../../img/naver.png';

type SocialLoginProps = {
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
};

const SocialLogin: React.FC<SocialLoginProps> = ({ onSuccess, onFailure }) => {
  const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY || '';

  const handleKakaoLogin = () => {
    // 카카오 로그인 처리를 여기에 추가
    // Kakao.Auth.login({
    //   success: (authObj) => {
    //     // 카카오 로그인 성공 처리
    //     const accessToken = authObj.access_token;
    //     // accessToken을 서버로 보내고 서버에서 로그인 처리 후 성공 시 onSuccess 콜백 호출
    //     onSuccess(accessToken);
    //   },
    //   fail: (error) => {
    //     // 카카오 로그인 실패 처리
    //     onFailure(error);
    //   },
    // });


  };
  const handleGoogleLogin = () => { };
  const handleNaverLogin = () => { };

  return (
    <SocialLoginContainer>
      <CustomLoginButton onClick={handleKakaoLogin}>
        <img src={kakaoImage} alt="카카오 로그인" width="45" height="45" />
      </CustomLoginButton>
      <CustomLoginButton onClick={handleGoogleLogin}>
        <img src={googleImage} alt="구글 로그인" width="45" height="45" margin-left="35" />
      </CustomLoginButton>
      <CustomLoginButton onClick={handleNaverLogin}>
        <img src={naverImage} alt="네이버 로그인" width="45" height="45" margin-left="35" />
      </CustomLoginButton>
    </SocialLoginContainer>
  );
};

export default SocialLogin;

const SocialLoginContainer = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
  margin-left: 0;
`;

const CustomLoginButton = styled.div`
  cursor: pointer;
  margin-left: 15px;
  transition: transform 0.2s;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    transform: scale(1.05);
  }
`;