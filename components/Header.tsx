import StaggeredMenu from "./StaggeredMenu";

const FACEBOOK = "https://www.facebook.com/profile.php?id=61591285815713";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          <img src="/images/a-logo-trimmed.png" alt="AmaDah Pastries" />
        </a>
        <nav className="site-nav">
          <a href="#story">Our story</a>
          <a href="#menu">Menu</a>
          <a href="#order">Order</a>
          <a
            className="button button-small"
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
          >
            Message us
          </a>
        </nav>
      </header>
      <StaggeredMenu />
    </>
  );
}
