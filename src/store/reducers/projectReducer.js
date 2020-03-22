const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content: "sad adsasd asda"
    },
    { id: "2", title: "collect all the stars", content: "sada asda adas" },
    {
      id: "3",
      title: "egg hunt with Can",
      content: "sad ada adas"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
