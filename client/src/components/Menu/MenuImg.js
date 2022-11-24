import { useState } from 'react';
import styled from 'styled-components';
import IconPhoto from './../../assets/img/icon_menu_photo.png';

const PicWrap = styled.div`
   width: 133px;
   margin-right: 25px;
   & p {
      font-size: 14px;
      margin-bottom: 8px;
   }
   & input {
      display: none;
   }
   @media screen and (max-width: 700px) {
      width: 100%;
      margin-bottom: 13px;
   }
`;
const LabelPhoto = styled.label`
   width: 133px;
   height: 133px;
   background-color: #f4f4f4;
   border-bottom: ${p => (p.background === '' ? '4px solid #B6B6B6' : `none`)};
   background-image: ${p => (p.background === '' ? 'none' : `url(${p.background})`)};
   background-size: cover;
   background-position: center;
   display: block;
   position: relative;
   cursor: pointer;
   @media screen and (max-width: 700px) {
      width: 100px;
      height: 100px;
      border: none;
      border-radius: 5px;
   }
   & img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      display: ${p => (p.background === '' ? 'block' : 'none')};
   }
`;

const MenuImg = idx => {
   const [imgSrc, setImageSrc] = useState('');
   const encodeFileToBase64 = fileBlob => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      return new Promise(resolve => {
         reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
         };
      });
   };
   return (
      <PicWrap>
         <p>사진</p>
         <LabelPhoto background={imgSrc} htmlFor={`picture${idx}`}>
            <img src={IconPhoto} alt="add" />
         </LabelPhoto>
         <input
            onChange={e => encodeFileToBase64(e.target.files[0])}
            type="file"
            name={`picture${idx}`}
            id={`picture${idx}`}
         />
      </PicWrap>
   );
};

export default MenuImg;
