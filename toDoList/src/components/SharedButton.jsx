function SharedBtn({ className, onClick, name, style }) {
  return (
    <button className={className} onClick={onClick} style={style}>
      {name}
    </button>
  );
}

export default SharedBtn;
