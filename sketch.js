let citizenTable;
let crashDry;
let crashWet;


let minlat = 30.32379644486961
let maxlat = 30.559260561666104
let minlon = -91.22161341694176
let maxlon = -91.00110703360933

function preload() {
  crashTable = loadTable('Crash reports.csv', 'header');
  print("Done Loading Data");
}

function setup() {
  createCanvas(800, 800);
  background (0);
  noStroke();
  

  crashDry = crashTable.findRows('Dry', 'ROAD SURFACE');
  crashWet = crashTable.findRows('Wet', 'ROAD SURFACE');

  for (let i = 0; i < crashDry.length; i++) {
    let x = map(crashDry[i].getNum('LONGITUDE'), minlon, maxlon, 0, width);
    let y = map(crashDry[i].getNum('LATITUDE'), minlat, maxlat, 0, height);
    fill(242, 27, 149, 70);
    ellipse(x, y, 5, 5);
  }

  for (let i = 0; i < crashWet.length; i++) {
    let x = map(crashWet[i].getNum('LONGITUDE'), minlon, maxlon, 0, width);
    let y = map(crashWet[i].getNum('LATITUDE'), minlat, maxlat, 0, height);
    fill(27, 55, 242, 150);
    ellipse(x, y, 5, 5);
  }

}