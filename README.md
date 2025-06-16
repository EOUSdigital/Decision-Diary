# Module 5 – Lesson 01.02: Logic and Control Flow
## ✅ Step 4: Project Challenge Summary

---

## 🏁 Overview

This README summarizes the completed project challenges for Lesson 01, Step 4, based on three distinct real-world logic scenarios. Each scenario emphasizes control flow, conditional logic, and practical JavaScript function design.

---

## 📘 Scenario 1: Morning Routine

**Objective:**  
Simulate a weekday vs. weekend morning routine using current system time and control flow.

**Logic Features:**
- Uses `new Date()` to retrieve and format the current time and day.
- `if/else if` blocks based on `currentHour`.
- Logic branch based on whether today is a weekday or weekend.
- Activities like “Wake up”, “Eat breakfast”, “Ride to work” are printed based on current hour.

**Example Outcome:**
- On a weekday at 07:00 → "Wake up"
- On a weekend at 08:00 → "Sleep until late"

**What Was Practiced:**
- Conditional statements
- Time evaluation
- Modularity with a function

---

## ☁️ Scenario 2: Weather-Based Activity Planner

**Objective:**  
Generate a personal plan for the day based on the day of the week and weather conditions.

**Inputs:**
- `day` (e.g., "Monday")
- `weather` (e.g., "rainy")

**Logic Features:**
- Uses `.includes()` to categorize the day.
- Branches into three day types: office days (Mon–Wed), work-from-home days (Thu–Fri), weekends (Sat–Sun).
- Nested logic based on `weather`.

**Example Logic:**
- If day is "Tuesday" and weather is "sunny" → "Walk to office"
- If day is "Saturday" and weather is "cloudy" → "Go to a café or library"

**What Was Practiced:**
- Multiple branching layers (`if` inside `if`)
- Clean categorization using arrays and `.includes()`
- Descriptive, user-friendly logic modeling

---

## 🛒 Scenario 3: Shopping Cart with Discounts

**Objective:**  
Simulate a checkout system applying coupon discounts, loyalty points, and shipping costs.

**Inputs:**
- `cartTotal`
- `hasCoupon`
- `couponCode` (`'SAVE10'`, `'FREESHIP'`, etc.)
- `isLoyaltyMember`

**Logic Features:**
- Free shipping for orders >= $100
- `switch` statement to handle different coupon codes
- Loyalty members get a 5% discount
- Correct calculation of final total: `cartTotal - discounts + shippingCost`

**Example Outcome:**
If `cartTotal = 120`, coupon = `'SAVE10'`, loyalty = true:
- Final total = `120 - 10 - 6 + 0 = 104`

**What Was Practiced:**
- Nested logic
- `switch` usage
- Combining multiple inputs and condition types
- Realistic, expandable logic pattern

---

## 🔚 Conclusion

These three projects provided hands-on practice with:
- Branching logic using `if/else` and `switch`
- Variable condition handling
- Simulated real-world behavior in functional code
- Clean, modular thinking through parameterized functions

Each challenge served as a self-contained logic model and collectively reinforced fundamental programming skills for dynamic, decision-driven behavior in JavaScript.
