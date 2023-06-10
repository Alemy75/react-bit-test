
import LogoSvg from '../assets/svg/LogoSvg';

const Navbar = () => {
  return (
      <nav className="h-[90px] border-b border-gray-100 z-20 bg-white">
          <div className="flex h-[100%] items-center ml-[24px]">
              <LogoSvg />
              <h1 className="ml-[12px]">Энергия</h1>
          </div>
      </nav>
  );
}

export default Navbar