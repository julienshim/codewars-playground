function abbrevName(name){

    // code away
    return name.split(" ").map(n => n[0].toUpperCase()).join(".");
}
