import { map } from "./data.json";

function getItemInMeetingRoom() {
  let result = [];
  map((item) => {
    let itemLocation = item.placement.name;
    if (itemLocation === "Meeting Room") {
      result.push(item.name);
    }
  });
  return result;
}
console.log(getItemInMeetingRoom());

function getElectronicDevices() {
  let result = [];
  map((item) => {
    if (item.type === "electronic") {
      result.push(item.name);
    }
  });
  return result;
}
console.log(getElectronicDevices());

function getFurniture() {
  let result = [];
  map((item) => {
    item.tags.map((tag) => {
      if (tag === "furniture") {
        result.push(item.name);
      }
    });
  });
  return result;
}
console.log(getFurniture());

function getPurchasedItem() {
  let result = [];
  map((item) => {
    let time = new Date(item.purchased_at).toString();
    let date = time.slice(0, 10);
    if (date == "Sun Jan 16") {
      result.push(date);
    }
  });
  return result;
}
console.log(getPurchasedItem());

function getBrownColor() {
  let result = [];
  map((item) => {
    item.tags.map((tag) => {
      if (tag === "brown") {
        result.push(item.name);
      }
    });
  });
  return result;
}
console.log(getBrownColor);
