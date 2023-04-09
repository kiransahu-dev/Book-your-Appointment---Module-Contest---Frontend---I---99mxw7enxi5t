export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

export function addAppointment(name, time, description) {
  return {
    type: ADD_APPOINTMENT,
    payload: {
      name,
      time,
      description,
    },
  };
}
