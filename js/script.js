// Copyright (c) 2020 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of triangle.
 */
function enterClicked() {
  // input
  const base = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById("area-of-triangle").innerHTML =
    "the area of the triangle is: " + area + " cm²."
}

document.getElementById('pay').innerHTML = `Your pay will be: $ ${takeHomeSalary.toFixed(2)}`
document.getElementById('pay').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
xx = parseFloat(document.getElementById('length-of-rectangle').value)
const TAX_RATE = 0.18