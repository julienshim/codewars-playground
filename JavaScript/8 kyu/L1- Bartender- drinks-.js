function getDrinkByProfession(param) {
  return (
    {
      jabroni: "Patron Tequila",
      "school counselor": "Anything with Alcohol",
      programmer: "Hipster Craft Beer",
      "bike gang member": "Moonshine",
      politician: "Your tax dollars",
      rapper: "Cristal",
    }[param.toLowerCase()] || "Beer"
  );
}
