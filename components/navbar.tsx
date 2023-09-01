import UserAvatar from './userAvatar';

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <h1>SubsFlow</h1>
      <div className="flex w-full justify-end">
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
