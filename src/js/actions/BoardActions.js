import dispatcher from "../dispatcher"

export function updateBoard(coords) {
  dispatcher.dispatch({
    type: "UPDATE_BOARD",
    coords,
  })
}

export function resetBoard() {
  dispatcher.dispatch({
    type:"RESET_BOARD"
  })
}
