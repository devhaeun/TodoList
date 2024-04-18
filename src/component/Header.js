import "./Header.css";

const today = new Date();
const dateString = today.toLocaleString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

const Header = () => {
  return (
    <div className="Header">
      <h1>{ dateString }</h1>
      <div className="day">{dayName}</div>
    </div>
  );
};
export default Header;