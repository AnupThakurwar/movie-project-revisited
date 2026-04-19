const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="fixed bottom-0 w-full items-center flex justify-center border border-gray-300 p-1 bg-gray-200 text-black">
      © {year} React Movies
    </div>
  );
};

export default Footer;
