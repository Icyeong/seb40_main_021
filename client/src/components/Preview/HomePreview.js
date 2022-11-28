/* eslint-disable import/namespace */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuDetailed } from '../usermenu/MenuDetailed';
import { StoreMenuList } from '../usermenu/StoreMenuList';
import { NavMenu } from '../usermenu/NavMenu';
import { saveMenuId } from '../../redux/actions/menuAction';
import { Wrapper } from '../../style/menu.style';
import { motion } from 'framer-motion';

export const HomePreview = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      return () => {
         dispatch(saveMenuId(null));
      };
   });
   return (
      <Wrapper className="preview">
         <motion.main
            className="no-padding preview"
            initial={{
               opacity: 0
            }}
            animate={{
               opacity: 1,
               transition: { duration: 0.3 }
            }}>
            <NavMenu />
            <StoreMenuList />
            <MenuDetailed />
         </motion.main>
      </Wrapper>
   );
};
