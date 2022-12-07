// update the below URLs as required
const linkedinURL   = "https://www.linkedin.com/in/dev-varma-mvss/";
const GithubURL     = "https://github.com/DevVarma19";
const LeetCodeURL   = "https://leetcode.com/DevVarma19/";
const CodeForcesURL = "https://codeforces.com/profile/devvarma19";
const CodeChefURL   = "https://www.codechef.com/users/varmamandapati";

document.getElementById("linkedin").addEventListener("click", copyLinkedIn);
document.getElementById("github").addEventListener("click", copyGithub);
document.getElementById("leetcode").addEventListener("click", copyLeetCode);
document.getElementById("codeforces").addEventListener("click", copyCodeForces);
document.getElementById("codechef").addEventListener("click", copyCodeChef);

function copyLinkedIn() {
  navigator.clipboard.writeText(linkedinURL);
}

function copyGithub() {
  navigator.clipboard.writeText(GithubURL);
}

function copyLeetCode() {
  navigator.clipboard.writeText(LeetCodeURL);
}

function copyCodeForces() {
  navigator.clipboard.writeText(CodeForcesURL);
}

function copyCodeChef() {
  navigator.clipboard.writeText(CodeChefURL);
}