import './Header.css';

function Header({ leftChildren, rightChildren }) {

  return (
    <>
      <header className='width-full flex justify-between'>
        {leftChildren}
        {rightChildren}
      </header>
    </>
  );
}

export default Header;
