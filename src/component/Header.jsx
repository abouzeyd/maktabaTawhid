/** @jsxImportSource theme-ui */
import ImageHeader2 from "../images/ImageHeader2.jpg";
import ImageHeader3 from "../images/ImageHeader 3.jpg";
import dashe from "../images/DASHE ORANGE.svg";
import dasheBlanc from "../images/DASHE ORANGE (1).svg";
const Header = () => {
  return (
    <div
      sx={{
        backgroundColor: "#63C4F5",
        height: "100vh",
        maxHeight: 577,
        p: 2,
      }}
    >
      <div sx={{ display: "flex" }}>
        <h1
          sx={{
            marginLeft: 49,
            fontSize: 44,
            width: 559,
            paddingTop: 93,
            color: " #FFFEFE",
          }}
        >
          VOUS TROUVEREZ LE PLAISIR DE VOS YEUX AVEC NOUS
        </h1>
        <div sx={{ marginLeft: 170 }}>
          <img src={dashe} alt="dashe" sx={{ position: "absolute", pt: 125 }} />
          <img
            src={ImageHeader2}
            alt="livre islamique"
            width="246px"
            height="181px"
            sx={{ pt: 125, marginLeft: 4 }}
          />
        </div>
      </div>

      <div sx={{ display: "flex" }}>
        <h4
          sx={{
            fontSize: 22,
            marginLeft: 49,
            width: 408,
            color: "#FFFFFF",
            my: 10,
          }}
        >
          Des Auteurs reconnus parmis nos Savants de la Sounah
        </h4>

        <div sx={{ position: "absolute" }}>
          <img
            src={ImageHeader3}
            alt="livre islamique"
            width="246px"
            height="181px"
            sx={{ marginLeft: "56em", paddingTop: 39 }}
          />
          <img src={dasheBlanc} alt="dashe" sx={{ pt: 38, marginLeft: 1 }} />
        </div>
      </div>
      <div sx={{ paddingTop: 30 }}>
        {" "}
        <a
          href="/"
          sx={{
            color: "white",
            textDecoration: "none",
            px: 4,
            py: 3,
            borderRadius: 12,
            backgroundColor: "#5FDB94",
            fontWeight: "bold",
            marginLeft: 49,
            fontSize: 15,
          }}
        >
          {" "}
          Contactez-nous
        </a>
        <a
          href="/"
          sx={{
            color: "white",
            textDecoration: "none",
            padding: 3,
            borderRadius: 12,
            border: "1px solid white",
            fontWeight: "bold",
            marginLeft: 21,
            fontSize: 15,
          }}
        >
          {" "}
          Faite vos commande
        </a>
      </div>
    </div>
  );
};

export default Header;
