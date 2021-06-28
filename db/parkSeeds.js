require('dotenv').config();
async function getActivities() {
  try {
    const responseData = await fetch('https://developer.nps.gov/api/v1/activities?api_key=' + process.env.API_KEY, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'  },
    });
    if (responseData.ok){
      const response = await responseData.json();
      return response.data;
    }
  }
  catch (err){
    if (err) throw err;
  }
}

async function getParks() {
  try {
    const responseData = await fetch('https://developer.nps.gov/api/v1/parks?limit=467&api_key=' + process.env.API_KEY, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'  },
    });
    if (responseData.ok){
      const response = await responseData.json();
      return response.data;
    }
  }
  catch (err){
    if (err) throw err;
  }
}

async function seedActivities() {
  try {
    const activities = await getActivities();
    const response = await fetch('/api/activities/bulk', {
      method: 'POST',
      body: JSON.stringify(activities),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok){
      return activities;
    }
  }
  catch (err){
    if (err) throw err;
  }
}

async function seedParks() {
  try {
    const parks = await getParks();
    const response = await fetch('/api/parks/bulk', {
      method: 'POST',
      body: JSON.stringify(parks),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok){
      return parks;
    }
  }
  catch (err){
    if (err) throw err;
  }
}

async function seedParkActivity(parks){
  try {
    const response = await fetch('/api/park-activites/bulk', {
      method: 'POST',
      body: JSON.stringify(parks),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok){
      return true;
    }
  }
  catch (err){
    if (err) throw err;
  }
}

async function seedAll(){
  try {
    const parks = await seedParks();
    const activites = await seedActivities();
    const response = await seedParkActivity(parks);
  }
  catch (err){
    if (err) throw err;
  }
}

seedAll();