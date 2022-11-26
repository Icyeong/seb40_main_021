import CallAlarms from '../../components/AdminComponents/StoreAlarm/CallAlarms';
import OrderAlarms from '../../components/AdminComponents/StoreAlarm/OrderAlarms';
import styled from 'styled-components';

const Alarms = () => {
   return (
      <Container>
         <CallAlarms></CallAlarms>
         <OrderAlarms></OrderAlarms>
      </Container>
   );
};
const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-grow: 1;
   width: 100%;
   padding-left: 300px;
   background-color: rgb(246, 246, 246);

   @media screen and (max-width: 700px) {
      width: 100%;
      padding-left: 0px;
   }
`;
export default Alarms;
