import { Received, Reversal, Scheduled } from '../../assets/icons';

const Header = () => {
  return (
    <h1>
      <i>
        <Received />
      </i>
      <i>
        <Reversal />
      </i>
      <i>
        <Scheduled />
      </i>
      Extrato
    </h1>
  );
};

export default Header;
