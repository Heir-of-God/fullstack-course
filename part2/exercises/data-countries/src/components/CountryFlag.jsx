function CountryFlag({ country }) {
  return (
    <div
      style={{
        display: "flex",
        height: "120px",
        gap: "16px",
        marginBottom: "20px",
      }}
    >
      <img
        src={country.flags.png}
        alt="country's flag"
        style={{ height: "100%", objectFit: "contain" }}
      />
      <img
        src={country.coatOfArms.png}
        alt="country's coat of arms"
        style={{ height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

export default CountryFlag;
