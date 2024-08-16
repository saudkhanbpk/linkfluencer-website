const MembershipProfile = () => {
  return (
    <div className="bg-[#F5F7FA] p-6 rounded-2xl shadow-md max-w-xs text-center">
      <h2 className="text-lg font-semibold text-black">Hey Rahul</h2>
      <p className="text-gray-500 mt-1">Your Profile is left Incomplete</p>
      
      <div className="relative mt-4 h-2 w-full bg-gray-300 rounded-full">
        <div className="absolute top-0 left-0 h-2 w-3/5 bg-black rounded-full"></div>
        <div className="absolute top-0 right-0 h-2 w-1 bg-white rounded-full"></div>
      </div>

      <button className="mt-4 px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
        Complete Profile
      </button>
    </div>
  );
};
export default MembershipProfile
