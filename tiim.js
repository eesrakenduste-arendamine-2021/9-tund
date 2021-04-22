
let memberIndex = 1;
showMembers(memberIndex);

function showMembers(n) {
    let i;
    let members = document.getElementsByClassName("member");
    if (n > members.length) {memberIndex = 1}
    if (n < 1) {memberIndex = members.length}
    for (i = 0; i < members.length; i++) {
        members[i].style.display = "none";
    }
    members[memberIndex-1].style.display = "block";
}

function changeMember(n) {
    showMembers(memberIndex += n);
}