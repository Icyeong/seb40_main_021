import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuDetailed } from '../../components/Menu/MenuDetailed';
import { StoreMenuList } from '../../components/Menu/StoreMenuList';
import { NavMenu } from '../../components/Menu/NavMenu';
import { saveMenuId } from '../../redux/actions/menuAction';
import { Wrapper } from '../../style/menu.style';
import { motion } from 'framer-motion';

export const Home = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      return () => {
         dispatch(saveMenuId(null));
      };
   });
   return (
      <Wrapper>
         <motion.main
            className="no-padding"
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
