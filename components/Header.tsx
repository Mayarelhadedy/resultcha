type HeaderParams = {
  text: string;
  textsub?: string;
};
function Header({ text, textsub }: HeaderParams) {
  return (
    <>
      <h1>{text}</h1>
      <h3>{textsub} </h3>
    </>
  );
}
export default Header;
