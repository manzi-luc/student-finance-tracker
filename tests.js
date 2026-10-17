
import { isValidAmount, isValidCategory, isValidDate, isValidDescription, isValidDuplicate } from "./validator.js";


const list = document.getElementById("results");

function check (name,actual,expected) {
    const li = document.createElement("li");
    const passed = actual === expected;
    li.textContent = (passed ? "PASS: " : "FAIL: ")+ name;
    list.appendChild(li);

}
// Amount check
check("Amount: 12 should pass", isValidAmount("12"), true);
check("Amount: 07 should fail", isValidAmount("07"), false);

// Category check

check("Category: food should pass", isValidCategory("food"), true);
check("Category: food2 should fail", isValidCategory("food2"), false);


// Date check
check("Date: 2025-02-31 should fail", isValidDate("2025-02-31"), false);
check("Date: 2026-02-23 should pass", isValidDate("2026-02-23"),true);
// Description check

check("Description: Lunch should pass", isValidDescription("lunch"), true);
check("Description: Bus  ride should fail", isValidDescription("Bus  ride"), false);


// Duplicate check 


check("Duplicate: coffee coffee is flagged", isValidDuplicate("coffee coffee"), true);
check("Duplicate: Fast-fast should fail", isValidDuplicate("fast-fast"), false);






