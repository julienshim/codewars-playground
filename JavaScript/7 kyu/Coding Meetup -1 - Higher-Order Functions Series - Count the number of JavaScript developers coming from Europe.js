function countDevelopers(list) {
  // your awesome code here :)
  return list.filter(developer => developer.continent === 'Europe' && developer.language === 'JavaScript').length
}


