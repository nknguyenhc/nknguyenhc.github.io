export default function NotFound(): JSX.Element {
  return (
    <div className="notfound">
      <div className="notfound-logo">
        <img src={import.meta.env.BASE_URL + 'favicon.png'} alt="" />
      </div>
      <div className="notfound-message">
        Oops, looks like the page you are looking for does not exist!
      </div>
    </div>
  );
}
