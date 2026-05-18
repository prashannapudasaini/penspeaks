import { Outlet } from 'react-router-dom';

export default function ReaderLayout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Outlet />
    </div>
  );
}