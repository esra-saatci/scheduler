export function getAppointmentsForDay(state, day) {
  const filteredAppointments = state.days.filter(d => d.name === day);
  let appointments = [];

  if (filteredAppointments.length){
    appointments = filteredAppointments[0].appointments.map(x => state.appointments[x]);
  }
  return appointments;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null
  }

  const interviewObj = { 
    student: interview.student,
  }

  interviewObj.interviewer = state.interviewers[interview.interviewer]

  return interviewObj;
}


export function getInterviewersForDay(state, day) {
  // Find the day in state.days
  const selectedDay = state.days.filter(thisDay => thisDay.name === day);
  // Ensure that it has truthy length
  if (selectedDay.length){
    const intIds = selectedDay[0].interviewers;
    // Convert interviewers objec to array
    const myInterviewersArray = [...Object.values(state.interviewers)];
    // Compare ID's from day interviewers to interviewer ids.
    const selectedInts = myInterviewersArray.filter(int => intIds.includes(int.id))
    return selectedInts;
  }
  // If no interviewers that day, return empty []
  return [];
}