interface IProps {
  headerContent: string;
}
const Header: React.FC<IProps> = ({ headerContent }) => {
  return <div className="title">{headerContent}</div>;
};

export default Header;
