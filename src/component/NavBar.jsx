/** @jsxImportSource theme-ui */
import LinkNavBar from "../data/LinkNavBar.json";

const NavBar = () => {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#090A09",
        padding: 2,
      }}
    >
      {/* <div sx={{ flex: 1 }}> */}
      <a
        href="/"
        sx={{
          marginLeft: 45,
          color: "white",
          textDecoration: "none",
          fontSize: 36,
          fontWeight: "bold",
          flex: 1,
          lineHeight: 2,
        }}
      >
        AbouZayd
      </a>
      <div sx={{ display: "flex" }}>
        {LinkNavBar.map((item, key) => {
          return (
            <ul key={key}>
              <a
                href={item.link}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  marginRight: 130,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </a>
            </ul>
          );
        })}
      </div>
      <a
        href="/"
        sx={{
          color: "white",
          textDecoration: "none",
          padding: 2,
          borderRadius: 7,
          backgroundColor: "#5FDB94",
          fontWeight: "bold",
          marginRight: 90,
        }}
      >
        Contactez-nous
      </a>
    </div>
  );
};

export default NavBar;
