const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

// Define a function to format minutes as hh:mm
function formatMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

// Get references to the section elements
const sectionElements = document.querySelectorAll('section');

// Loop through the athletes in the data object
for (const athlete of Object.values(data.response.data)) {
  // Find the section element for this athlete
  const sectionElement = [...sectionElements].find(el => el.dataset.athlete === athlete.id);
  if (!sectionElement) continue; // Skip if section element not found
  
  // Get the latest race
  const latestRace = athlete.races[athlete.races.length - 1];
  
  // Update the section element with athlete data
  sectionElement.innerHTML = `
    <h2>${athlete.id}</h2>
    <dl>
      <dt>Full Name</dt><dd>${athlete.firstName} ${athlete.surname}</dd>
      <dt>Total Races</dt><dd>${athlete.races.length}</dd>
      <dt>Event Date (Latest)</dt><dd>${new Date(latestRace.date).getDate()} ${MONTHS[new Date(latestRace.date).getMonth()]} ${new Date(latestRace.date).getFullYear()}</dd>
      <dt>Total Time (Latest)</dt><dd>${formatMinutes(latestRace.time.reduce((sum, time) => sum + time))}</dd>
    </dl>
  `;
}
