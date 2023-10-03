import Image from 'next/image';
import UserAvatar from './userAvatar';

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Image
        src="/images/logo.svg"
        height={30}
        width={140}
        alt="SubFlowz Logo"
      />
      <div className="flex w-full justify-end">
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
