const intialState = {
  firstName: 'oi',
  secondName: 'oi',
};

const NameReducer = (statename = intialState, action = {}) => {
  switch (action.type) {
    case 'FIRST_NAME':
      return {
        ...statename,
        firstName: statename.firstName,
      };
    case 'SECOND_NAME':
      return {
        ...statename,
        secondName: statename.secondName,
      };
    default:
      return statename;
  }
};
export default NameReducer;
