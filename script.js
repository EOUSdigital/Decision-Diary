//TODO 📗 Module 5. Logic and Control Flow - Lesson 01.02: Introduction - Challenge


//TODO  📝 Step 4: Project Challenge – “Decision Diary”

//* 🛠️ 📝 Project Title: Decision Diary: A Day in the Life of a Wimpy Kid

//? 🎯 Objective:
//  Create a JavaScript program that simulates a real-life routine (your own “day in the life”), using logic and control flow to handle decisions and outcomes.

//* ✅ Step 1: Scenario
//  Choose a real-world situation to model in code. Some examples:
//  1. A morning routine (e.g., wake up, eat breakfast, go to work/school)
//  2. A weather-based activity planner (e.g., decide what to wear or do based on weather)
//  3. A simple shopping cart experience (e.g., free shipping threshold, coupon application)

//* ✅ Step 2: Identify the Decision Points
//  Think about key questions your program needs to evaluate. For example:
//  • “Is it a weekday?”
//  • “Is it raining?”
//  • “Do I have enough money?”
//? 🧠 Consider:
//  • At least 3 conditions to evaluate.
//  • Use if/else, logical operators (&&, ||), or even a switch statement later if it fits.

//* ✅ Step 3: Plan the Control Flow
//  What order should the actions occur in? Where does the flow branch or loop?
//  Sketch this as:
//  1. Start
//  2. Evaluate condition
//  3. Decide what happens next
//  4. Repeat or move to the next step
//? 🎯 Write the first version of the plan in natural language (pseudocode).


//! Scenarios

//* 📘 Scenario 1: Morning Routine
//  A morning routine for a person who works 5 days per week. He wakes up every day at the same hour, takes breakfast, gets dressed, and rides his motorcycle daily to work. He returns home around the same hour, takes his dinner in the evening, and goes to bed at the same time.

//? Strengths:
//  • Linear, clear daily flow (good for control flow basics)
//  • Repetitive routine ideal for if/else and maybe a for loop (e.g., days of the week)
//  • Great for introducing guard clauses or branching based on day type (weekday vs. weekend?)

//? Challenges:
//  • Might feel a bit too predictable unless you introduce variation (e.g., weekend sleep-in, traffic delays)

//? Suggestion:
//  Enhance it with conditional variety: “If it’s Saturday, he sleeps in; if it rains, he drives instead of riding.”

//* ☁️ Scenario 2: Weather-Based Activity Planner
//  A weather-based activity planner for someone who commutes Monday, Tuesday, and Wednesday to the office, and two days per week is working from home. On weekends, she likes to explore different activities depending on the weather.

//? Strengths:
//  • Realistic and dynamic: uses days, weather conditions, and activity decisions
//  • Great opportunity to use if/else, switch, and logical operators
//  • Can simulate a whole week with different conditions (arrays or loops later)

//? Challenges:
//  Slightly more logic to manage—weather conditions and days must be modeled

//? Suggestion:
//  Include variables like isRaining, dayOfWeek, and maybe isWorkingFromHome to drive behavior. This is great for showcasing decision trees.

//* 🛒 Scenario 3: Shopping Cart with Discounts
// A simple shopping cart experience for a customer who buys from an online store. The cart should include a free shipping threshold, coupon application, or loyalty points.

//? Strengths:
//  • Very practical—connects directly to real-world commerce logic
//  • Excellent for showcasing:
//      → if/else
//      → && / ||
//      → Nested conditions (e.g., “If total > 100 AND coupon applied…”)
//      → switch (maybe for coupon codes)

//? Challenges:
//  • Slightly more abstract; requires simulating user input or predefined cart data
//  • We will need to fake or simulate totals, discounts, etc.

//? Suggestion:
//  Include conditions like cartTotal, hasCoupon, and isLoyaltyMember. Easy to add reward logic or upgrade this into a more advanced future project.


//! Solution

//* 📘 Scenario 1: Structure the Morning Routine

//? 🧠 Scenario Summary
//  A person works 5 days per week (Monday–Friday).
//  He wakes up every day at the same hour, takes breakfast, gets dressed, and rides his motorcycle to work.
//  He returns home at the same time, eats dinner, and goes to bed at the same hour.
//  We will simulate this for one day, adjusting the routine for weekends or weather conditions to make it more dynamic.

//? 🔍 Decisions Map

//  1. Is today a weekday or weekend?
//  • Weekday → follow work routine
//  • Weekend → maybe sleep in, relax, or do something else

//  2. (Optional upgrade) Is the weather good for riding a motorcycle?
//  • Good → ride the motorcycle
//  • Bad → take a car or stay home

//  3. (Optional upgrade) Add time-based behavior (just simulated as steps)
//  • Morning → breakfast, dress, commute
//  • Evening → dinner, sleep

//? ✍️ Pseudocode

//  • Set the day (e.g., Monday)
//  • If it is a weekday
//      > Wake up at 7am
//      > Eat breakfast
//      > Get dressed
//      > Ride motorcycle to work
//      > Return home
//      > Eat dinner
//      > Go to sleep
//  • Else (weekend)
//      > Sleep in
//      > Have a relaxed day
//      > Maybe go for a walk
//      > Eat dinner
//      > Go to sleep

//! Code

const now = new Date();
const currentHour = now.getHours();
const currentHourString = currentHour.toString().padStart(2, '0') + ':00';

const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekend = ['Saturday', 'Sunday'];
const today = now.toLocaleString('en-US', { weekday: 'long' });

function dailyRoutine(day) {
    if (weekDay.includes(day)) {
        if (currentHourString === '07:00') {
            console.log('Wake up');
        } else if (currentHourString === '07:05') {
            console.log('Eat your breakfast');
        } else if (currentHourString === '07:15') {
            console.log('Get dressed, otherwise you will be late at work.');
        } else if (currentHourString === '07:30') {
            console.log('Ride motorcycle to work');
        } else if (currentHourString === '13:00') {
            console.log('Return home');
        } else if (currentHourString === '18:00') {
            console.log('Serving dinner');
        } else if (currentHourString === '20:00') {
            console.log('Watch a movie or Read a book');
        } else if (currentHourString === '23:00') {
            console.log('Go to Sleep');
        }
    } else {
        if (currentHourString  === '08:00') {
            console.log('Sleep until late');
        } else if (currentHourString === '09:00') {
            console.log('Have a relaxed day in bed');
        } else if (currentHourString === '13:00') {
            console.log('Maybe go for a walk');
        } else if (currentHourString === '18:00') {
            console.log('Eating dinner at the restaurant');
        } else if (currentHourString === '23:00') {
            console.log('Go to Sleep');
        }
    }
}

dailyRoutine(today);


//! Solution

//* ☁️ Scenario 2: Weather-Based Activity Planner
//  A person commutes to the office on Monday, Tuesday, and Wednesday, and works from home on Thursday and Friday.
//  On weekends, they explore different activities based on the weather.

//? ✅ Step 1: Explore the Topic
//  🔹 Key Concepts Practiced
//  • Conditional logic (if/else if/else)
//  • Logical operators (&&, ||)
//  • Day-based flow control
//  • Weather-based decision making
//  • Clean branching and readable decision trees

//? 🔧 Step 2: Scenario Breakdown
//  📅 Weekday Logic:
//  • Mon–Wed (commute days):
//      > If sunny → walk to office
//      > If rainy → take a taxi or drive
//  • Thu–Fri (remote days):
//      > Work from home
//      > If stormy → plan indoor breaks
//      If sunny → take short walks during breaks
//  📆 Weekend Logic (Sat–Sun):
//  • If sunny → go hiking or visit a park
//  If cloudy → go to a café or library
//  If rainy → stay in and work on hobbies

//? 🎯 Step 3: Goal of the Function:
//  Build a function that takes two arguments:
//  • dayOfWeek (string: "Monday" to "Sunday")
//  • weather (string: "sunny", "rainy", "cloudy", "stormy")
//  And based on that, logs a personalized plan for the day.

//? ✍️ Pseudocode 

//  Set the day of the week (e.g., Monday, Tuesday, ..., Sunday)
//  Set the weather (e.g., sunny, rainy, stormy, cloudy)

//  If day is Monday, Tuesday, or Wednesday
//      If weather is sunny
//          Walk to office
//      Else if weather is rainy
//          Take a taxi or drive

//  Else if day is Thursday or Friday
//      Work from home
//      If weather is stormy
//          Plan indoor breaks
//      Else if weather is sunny
//          Take short walks during breaks

//  Else if day is Saturday or Sunday
//      If weather is sunny
//          Go hiking or visit a park
//      Else if weather is cloudy
//          Go to a café or library
//      Else if weather is rainy
//          Stay in and work on hobbies

//! Code

const officeWeekDay = ['Monday', 'Tuesday', 'Wednesday'];
const homeWeekDay = ['Thursday', 'Friday'];
const weekEnd = ['Saturday', 'Sunday'];
const weather = ['sunny', 'rainy', 'stormy', 'cloudy'];

const validDays = [...officeWeekDay, ...homeWeekDay, ...weekEnd];
const validWeather = ['sunny', 'rainy', 'stormy', 'cloudy'];

function planMyDay(day, weather) {
    if (!validDays.includes(day) || !validWeather.includes(weather)) {
        console.log('Invalid day or weather input.');
        return;
    };

    if (officeWeekDay.includes(day)) {
        if (weather === 'sunny') {
            console.log('Walk to office');
        } else if (weather === 'rainy') {
            console.log('Take a taxi or drive');
        }
    } else if (homeWeekDay.includes(day)) {
        console.log('Work from home');
        if (weather === 'stormy') {
            console.log('Plan indoor breaks');
        } else if (weather === 'sunny') {
            console.log('Take short walks during breaks');
        }
    } else if (weekEnd.includes(day)) {
        if (weather === 'sunny') {
            console.log('Go hiking or visit a park');
        } else if (weather === 'cloudy') {
            console.log('Go to a café or library');
        } else if (weather === 'rainy') {
            console.log('Stay in and work on hobbies');
        };
    };
}

planMyDay('Tuesday', 'sunny');

//! Solution

//* 🛒 Scenario 3: Shopping Cart with Discounts

//? ✅ Step 1: Explore the Topic
//  🛍️ What are we modeling?
//  A customer places items in a cart on an online store. The checkout logic will:
//  • Check if they qualify for free shipping
//  • Apply a discount if they have a valid coupon
//  • Add or multiply rewards if they’re a loyalty member

//? ✅ Step 2: Real-World Concepts We’ll Simulate
//  We will work with simulated inputs:
//  • cartTotal (e.g., 85, 120)
//  • hasCoupon (true/false)
//  • couponCode (optional string like 'SAVE10', 'FREESHIP')
//  • isLoyaltyMember (true/false)
//  We will output:
//  • Final price after discounts
//  • Whether shipping is free or paid
//  • Loyalty bonus messages

//? ✅ Step 3: Plan the Control Flow (Pseudocode)

//* 1. Start
//  • Input: cartTotal, hasCoupon, couponCode, isLoyaltyMember

//* 2. Evaluate Free Shipping
//  • If cartTotal is over $100, shipping is free
//  • Otherwise, add a $5 shipping fee

//* 3. Apply Coupon Code
//  • If hasCoupon is true:
//      >   Use a switch or if/else to evaluate the couponCode:
//          → 'SAVE10' → subtract $10
//          → 'FREESHIP' → shipping becomes free
//          → Any other code → print “Invalid coupon”

//* 4. Check Loyalty Member Status
//  • If isLoyaltyMember is true:
//      > Print: “You earned loyalty points!”
//      > Optional: apply a small % discount (e.g., 5%)

//* 5. Calculate Final Price
//  • Start with cartTotal
//  • Subtract any coupon discounts
//  • Add or remove shipping cost
//  • Optionally apply loyalty discount

//* 6. Output Summary
//  • Show:
//      > Original cart total
//      > Discounts applied
//      > Shipping cost
//      > Final amount to pay
//      > Loyalty message if applicable

//* 7. End
//  • Return or display the final checkout summary

//! Code

let cartTotal = 120;
let hasCoupon = true;
let couponCode = 'SAVE10';
let isLoyaltyMember = true;


function processCart(cartTotal, hasCoupon, couponCode, isLoyaltyMember) {
    let shippingCost = cartTotal >= 100 ? 0 : 5;
    let couponDiscount = 0;
    
    if (cartTotal >= 100) {
        console.log("Shipping is free");
    } else if (cartTotal < 100) {
        shippingCost = 5;
        console.log("Shipping cost: $5");
    }

    if (hasCoupon) {
        switch (couponCode) {
            case 'SAVE10':
                couponDiscount = 10;
                break;
            case 'FREESHIP':
                shippingCost = 0;
                break;
            default:
                console.log('Invalid coupon');
        }
    }

    let loyaltyDiscount = isLoyaltyMember ? cartTotal * 0.05 : 0;
    if (isLoyaltyMember === true) {
        console.log('You earned loyalty points!');
    }

    let finalTotal = cartTotal - couponDiscount - loyaltyDiscount + shippingCost;
    if (finalTotal) {
        console.log("Final price: $" + finalTotal);
        return finalTotal;
    }
}

processCart(cartTotal, hasCoupon, couponCode, isLoyaltyMember);
