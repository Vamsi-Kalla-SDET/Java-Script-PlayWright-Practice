<p class="course">Java</p>
<p class="course">Python</p>
<p class="course">JavaScript</p>

Change all paragraphs to:

Playwright


let courses = document.getElementsByClassName("course");

for(let i = 0; i < courses.length; i++){

    courses[i].textContent =
    "Playwright";

}