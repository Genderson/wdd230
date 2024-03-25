const url = "https://genderson.github.io/wdd230/chamber/data/members.json";
const container = document.querySelector("#directory-container");

async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
  }
  

  const displayMembers = (members) =>{
    members.forEach((member) =>{
        let memberSection = document.createElement('section');
        
        let logo = document.createElement('img');
        logo.setAttribute('src', member.imageFile);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');

        let title = document.createElement('h3');
        title.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = member.address;

        let phone = document.createElement('p');
        phone.textContent = member.phone;

        let webSite = document.createElement('a');
        webSite.textContent = member.webSiteUrl;
        webSite.href = member.webSiteUrl;
        
        let membershipLevel = document.createElement('p');
        membershipLevel.textContent = member.membershipLevel;

        memberSection.appendChild(logo);
        memberSection.appendChild(title);
        memberSection.appendChild(address);
        memberSection.appendChild(phone);
        memberSection.appendChild(webSite);
        memberSection.appendChild(membershipLevel);
        container.appendChild(memberSection);
    });
  }
