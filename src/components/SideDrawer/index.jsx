const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <button>Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
