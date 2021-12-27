function getParticipants(handshakes){
    // ...
    let participants = 1;
    while (Math.floor((participants * (participants - 1)) / 2) < handshakes) {
      participants += 1;
    }
    return participants;
  }