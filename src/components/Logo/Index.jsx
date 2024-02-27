import { Link } from 'react-router-dom';
import ImageLogin from '../../assets/fundo2.png';

export default function Logo() {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 h-screen w-full lg:w-1/2">
      <Link className='h-full' to='/'>
        <img
          src={ImageLogin}
          alt="Carbontree"
          className="h-full"
        />
      </Link>
    </div>
  );
}
