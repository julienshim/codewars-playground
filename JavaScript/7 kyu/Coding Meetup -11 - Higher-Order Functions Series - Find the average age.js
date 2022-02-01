function getAverageAge(list) {
    // thank you for checking out the Coding Meetup kata :)
    return Math.round(list.reduce((a, c) => a + c.age, 0) / list.length);
  }