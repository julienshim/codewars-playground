// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let state = "Nothing";
    for (let button of buttons) {
      if (state === button) {
        state = "Nothing";
      } else if (state !== button) {
        state = button;
      };
    };
    return state;
  }
  