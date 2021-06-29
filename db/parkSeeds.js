const axios = require("axios");
const fetch = require("node-fetch");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

async function getActivities() {
  try {
    const responseData = await axios.get('https://developer.nps.gov/api/v1/activities?api_key=' + process.env.API_KEY);
      return responseData.data.data;
  }
  catch (err){
    console.log("error in get activities");
    if (err) throw err;
  }
}

async function getParks() {
  try {
    const responseData = await axios.get('https://developer.nps.gov/api/v1/parks?limit=467&api_key=' + process.env.API_KEY);
    return responseData.data.data;
  }
  catch (err){
    console.log("error in get parks");
    if (err) throw err;
  }
}

async function seedActivities() {
  try {
    const activities = await getActivities();
    const response = await fetch('http://localhost:3001/api/activities/bulk', {
      method: 'POST',
      body: JSON.stringify(activities),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok){
      console.log("seed activities good");
      return activities;
    }
    else {
      console.log("bad response in seed activities");
    }
  }
  catch (err){
    console.log("error in seed activities");
    if (err) throw err;
  }
}

async function seedParks() {
  try {
    const parksIn = await getParks();
    const parksMap = parksIn.map((park) => {
      const parkOut = {
        name: park.name,
        code: park.parkCode
      }
      return parkOut;
    });
    const response = await fetch('http://localhost:3001/api/parks/bulk', {
      method: 'POST',
      body: JSON.stringify(parksMap),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok){
      console.log("seed parks good");
      return parksIn;
    }
    else {
      console.log("bad response in seed parks");
    }
  }
  catch (err){
    console.log("error in seed parks");
    if (err) throw err;
  }
}

async function seedParkActivity(parks){
  try {
    const parksMap = parks.map((park) => {
      return {
        parkCode: park.parkCode,
        activities: []
      }
    });
    for (let i = 0; i < parksMap.length; i++){
      for (let j = 0; j < parks[i].activities.length; j++) {
        parksMap[i].activities.push(parks[i].activities[j]);
        // parksMap[i].activities.push({id: parks[i].activities[j].id, name: parks[i].activities[j].name });
      }
    }
    console.log(parksMap);
    console.log(parksMap[0].activities)
    const response = await fetch('http://localhost:3001/api/park-activities/bulk', {
      method: 'POST',
      body: JSON.stringify(parksMap),
      headers: { 'Content-Type': 'application/json' },
    });
  }
  catch (err){
    if (err) throw err;
  }
}

async function seedAll(){
  try {
    console.log("in seed all");
    const activities = await seedActivities();
    const parks = await seedParks();
    const response = await seedParkActivity(parks);
  }
  catch (err){
    if (err) throw err;
  }
}

seedAll();