const Place = ({ name, address, isOpen }) => {
  return (
    <div className="places">
      <ul>
        {name}
        <li>
          {address}
        </li>
        <li>{isOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
  );
};

export default Place;
