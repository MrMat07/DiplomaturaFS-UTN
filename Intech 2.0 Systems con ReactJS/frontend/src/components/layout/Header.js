import '../../styles/components/layout/Header.css';

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <div className="Logo">
        <img
            src="images/logo/logo_small_icon_only.png" width="100"
            alt="Intech 2.0 Systems"
          />
          <h1>Intech 2.0 Systems</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
