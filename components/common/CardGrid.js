const CardGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">{children}</div>
  );
};
export default CardGrid;
