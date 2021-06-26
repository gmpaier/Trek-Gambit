async function seedActivities() {
  const responseData = await fetch('https://developer.nps.gov/api/v1/activities?api_key=1y0zIuzR0jebuL5GGN8LUNA07CshBja9C5SBzN3F', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'  },
  });
  const response = await responseData.json();
}

async function seedParks() {
  const responseData = await fetch('https://developer.nps.gov/api/v1/parks?limit=467&api_key=1y0zIuzR0jebuL5GGN8LUNA07CshBja9C5SBzN3F', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'  },
  });
  const response = await responseData.json();
}


