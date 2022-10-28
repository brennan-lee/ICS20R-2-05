// Copyright (c) 2020 Brennan Lee All rights reserved
//t
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  const hours = parseInt(
    document.getElementById("number-of-hours-worked").value
  )
  const rate = parseInt(document.getElementById("Hourly-rate").value)

  const take = hours * rate * 0.18
  const wage = hours * rate * (1.0 - 0.18)

  document.getElementById("take").innerHTML =
    "The governemnt will take: " + take + "$"
  document.getElementById(
    "wage"
  ).innerHTML = `Your pay will be: $ ${takeHomeSalary.toFixed(2)}`
}
