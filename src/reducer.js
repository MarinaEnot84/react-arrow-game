export const COMPLETE = "COMPLETE";
export const UNCOMPLETE = "UNCOMPLETE";

export const initialState = [
  {
    name: "Macbook",
    isCompleted: false,
  },
  {
    name: "IPhone",
    isCompleted: false,
  },
];
export const reducer = (state, action) => {
  switch (action.type) {
    case COMPLETE:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = true;
        return i;
      });
    case UNCOMPLETE:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = false;
      });
    default:
      return state;
  }
};
