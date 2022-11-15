import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../../assets/img/logo.png'
import UserExImg from './../../assets/img/user_ex_img.png'
import IconSignout from './../../assets/img/icon_signout.png'
import IconList from './../../assets/img/icon_list.png'
import * as S from './Header.style'

const Header = () => {
    const isLogin = true
    const [gnbToggleOpen, setGnbToggleOpen] = useState(false)
    const GnbOpen = () => {
        setGnbToggleOpen(true)
    }
    return (
        <S.HeaderWrap>
            <S.Inside>
                <S.LogoImg src={Logo} alt='주문해조 logo' />
                <S.IconBtn onClick={GnbOpen}><S.MListIcon src={IconList} alt='리스트' /><span>알람</span></S.IconBtn>
                <S.ButtonWrap>
                    {
                        isLogin ?
                            <>
                                <S.LineBtnUser> <Link to='/'><img src={UserExImg} alt='username' /><span>상호명</span></Link></S.LineBtnUser>
                                <S.LineBtnUserNoUnder>  <Link to='/'><img src={IconSignout} alt='sign out' />로그아웃</Link ></S.LineBtnUserNoUnder>
                            </>
                            :
                            <>
                                <S.LineBtn> <Link to='/'>로그인</Link></S.LineBtn>
                                <S.Button>  <Link to='/'>회원가입</Link ></S.Button>
                            </>
                    }

                </S.ButtonWrap>
            </S.Inside>

        </S.HeaderWrap>
    );
};

export default Header;