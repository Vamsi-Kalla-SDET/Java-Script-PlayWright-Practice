// ============================================================
//  JavaScript Practice Programs — Set 2
//  Source: Handwritten notes (Images 2 & 3)
//  How to run: node js_practice_programs_2.js
// ============================================================


// ============================================================
//  SECTION 1: ARRAY PROGRAMS
// ============================================================

// -----------------------------------------------------------
// 1. Check if Two Arrays Are Equal
// -----------------------------------------------------------
let a1  = [1, 2, 3, 4];
let a2  = [1, 2, 3, 4];
let equal = true;

if (a1.length !== a2.length) {
  equal = false;
} else {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      equal = false;
      break;
    }
  }
}
console.log("1. Arrays equal?", equal); // true


// -----------------------------------------------------------
// 2. Find Duplicate Elements in Array
// -----------------------------------------------------------
let a3 = [1, 2, 1, 3, 4];

for (let i = 0; i < a3.length; i++) {
  for (let j = i + 1; j < a3.length; j++) {
    if (a3[i] === a3[j]) {
      console.log("2. Duplicate:", a3[i]); // 1
    }
  }
}


// -----------------------------------------------------------
// 3. Find Element in Array (Search)
// -----------------------------------------------------------
let a4    = [1, 2, 3, 4, 5];
let n3    = 2;
let found = false;

for (let i = 0; i < a4.length; i++) {
  if (a4[i] === n3) {
    found = true;
    console.log("3. Found at index:", i); // index 1
  }
}
if (found !== true) console.log("3. Not found");
console.log("3. Found?", found);


// -----------------------------------------------------------
// 4. Sort Elements in Array (Ascending & Descending)
// -----------------------------------------------------------
let a5 = [1, 2, 5, 4];

a5.sort((a, b) => a - b);
console.log("4. Ascending:", a5);  // [1, 2, 4, 5]

a5.sort((a, b) => b - a);
console.log("4. Descending:", a5); // [5, 4, 2, 1]


// -----------------------------------------------------------
// 5. Remove Special Characters from String
// -----------------------------------------------------------
let s5 = "Hello@2";
let p5 = s5.replace(/[^a-zA-Z0-9]/g, "");
console.log("5. Remove special chars:", p5); // Hello2


// -----------------------------------------------------------
// 6. Remove Duplicates from String
// -----------------------------------------------------------
let s6 = "sachins";
let w6 = "";

for (let i = 0; i < s6.length; i++) {
  if (!w6.includes(s6[i])) w6 += s6[i];
}
console.log("6. Remove duplicate chars:", w6); // sachin


// -----------------------------------------------------------
// 7. Move All Zeros to Right
// -----------------------------------------------------------
let s7 = [0, 1, 0, 0, 1, 2];
let b7 = [];

for (let i = 0; i < s7.length; i++) {
  if (s7[i] !== 0) b7.push(s7[i]);
}
while (b7.length < s7.length) {
  b7.push(0);
}
console.log("7. Move zeros to right:", b7); // [1, 1, 2, 0, 0, 0]


// -----------------------------------------------------------
// 8. Merge Two Arrays
// -----------------------------------------------------------
let a8 = [1, 2, 3, 4];
let b8 = [3, 4, 5];
let c8 = [];

for (let i = 0; i < a8.length; i++) c8.push(a8[i]);
for (let i = 0; i < b8.length; i++) c8.push(b8[i]);
console.log("8. Merged array:", c8); // [1, 2, 3, 4, 3, 4, 5]


// -----------------------------------------------------------
// 9. Second Largest Number in Array
// -----------------------------------------------------------
let arr9 = [1, 5, 3, 4];
arr9.sort((a, b) => b - a);
console.log("9. Second largest:", arr9[1]); // 4


// -----------------------------------------------------------
// 10. Reverse an Array
// -----------------------------------------------------------
let arr10 = [1, 2, 3, 4];
arr10.reverse();
console.log("10. Reversed array:", arr10); // [4, 3, 2, 1]


// -----------------------------------------------------------
// 11. Left Rotate Array
// -----------------------------------------------------------
let arr11 = [1, 2, 3, 4];
arr11.push(arr11.shift());
console.log("11. Left rotate:", arr11); // [2, 3, 4, 1]


// -----------------------------------------------------------
// 12. Right Rotate Array
// -----------------------------------------------------------
let arr12 = [1, 2, 3, 4];
arr12.unshift(arr12.pop());
console.log("12. Right rotate:", arr12); // [4, 1, 2, 3]


// -----------------------------------------------------------
// 13. All Permutations of a String
// -----------------------------------------------------------
let s13 = "ABC";

for (let i = 0; i < s13.length; i++) {
  for (let j = 0; j < s13.length; j++) {
    for (let k = 0; k < s13.length; k++) {
      if (i !== j && j !== k && i !== k) {
        console.log("13. Permutation:", s13[i] + s13[j] + s13[k]);
      }
    }
  }
}


// ============================================================
//  SECTION 2: STRING PROGRAMS
// ============================================================

// -----------------------------------------------------------
// 14. Find Word in String
// -----------------------------------------------------------
let s14  = "i love india";
let w14  = s14.split(" ");
let l14  = w14.length;

for (let i = 0; i < w14.length; i++) {
  if (w14[i].length > l14.length) {
    l14 = w14[i];
  }
}
console.log("14. Longest word:", l14);


// -----------------------------------------------------------
// 15. Replace Word in String
// -----------------------------------------------------------
let s15    = "mom";
let old15  = "m";
let new15  = "p";
let final15 = "";

for (let p = 0; p < s15.length; p++) {
  if (p === old15) {
    final15 += new15;
  } else {
    final15 += s15[p];
  }
}
// Simpler built-in approach:
let result15 = s15.replace(/m/g, "p");
console.log("15. Replace in string:", result15); // pop


// -----------------------------------------------------------
// 16. Count Vowels & Consonants in String
// -----------------------------------------------------------
let s16 = "hello";
let v16 = 0;
let c16 = 0;

for (let p of s16) {
  if (p === 'a' || p === 'e' || p === 'i' || p === 'o' || p === 'u') {
    v16++;
  } else {
    c16++;
  }
}
console.log("16. Vowels:", v16, "| Consonants:", c16); // Vowels: 2, Consonants: 3


// -----------------------------------------------------------
// 17. Replace Vowels with a Character (*)
// -----------------------------------------------------------
let s17  = "sachinoie";
let q17  = "*";
let c17  = "";

for (let i = 0; i < s17.length; i++) {
  if ("aeiou".includes(s17[i])) {
    c17 += q17;
  } else {
    c17 += s17[i];
  }
}
console.log("17. Replace vowels with *:", c17); // s*ch*n**


// -----------------------------------------------------------
// 18. Count Vowels in String (Detailed version from Image 3)
// -----------------------------------------------------------
let s18 = "sachinoie";
let o18 = "";
let a18 = 0;

for (let i = 0; i < s18.length; i++) {
  if (
    s18[i] === 'a' || s18[i] === 'e' ||
    s18[i] === 'i' || s18[i] === 'o' || s18[i] === 'u'
  ) {
    a18++;
  } else {
    o18 += s18[i]; // collect consonants
  }
}
console.log("18. Vowels:", a18, "| Consonants (chars):", o18);


// -----------------------------------------------------------
// 19. Reverse Words in a String (Right rotate style)
// -----------------------------------------------------------
let s19  = "sachin sanjay kalyankar";
let w19  = s19.split(" ");
let r19  = "";

for (let i = w19.length - 1; i >= 0; i--) {
  r19 = r19 + w19[i][0] + " ";
}
console.log("19. First letter of each word reversed:", r19.trim());


// ============================================================
//  SECTION 3: PLAYWRIGHT SNIPPET (from Image 3)
//  Note: This requires Playwright installed. Do NOT run with node.
//  Use: npx playwright test
// ============================================================

/*
  --- Playwright: Open new tab, navigate, screenshot, close ---

  const newTab = await context.newPage();
  await newTab.goto(url, { timeout: 15000 });
  await newTab.screenshot({
    path: `screenshots/test2-${i + 1}.png`,
    fullPage: true
  });
  await newTab.close();

  Key concepts used:
  - context.newPage()     → opens a new browser tab
  - goto(url, options)    → navigates with timeout
  - screenshot({ path })  → saves full page screenshot
  - Template literals     → `screenshots/test2-${i+1}.png`
  - newTab.close()        → closes the tab after done
*/

// ============================================================
//  END OF PROGRAMS — Set 2
//  Total programs: 19 JS + 1 Playwright snippet
//  Run: node js_practice_programs_2.js
// ============================================================