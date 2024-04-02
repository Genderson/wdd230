const url = "https://genderson.github.io/wdd230/chamber/data/members.json";
const container = document.querySelector("#advertisement-container");

async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();

    const memberAdvertisement = data.members.filter(member => 
        member.membershipLevel == "Silver Membership" || 
        member.membershipLevel == "Gold Membership");

    displayMembers(memberAdvertisement);
  }
  
  getMembers(url);

  const displayMembers = (members) =>{
    members.forEach((member) =>{
        let memberSection = document.createElement('section');
        memberSection.setAttribute('class', 'card');
        
        let logo = document.createElement('img');
        logo.setAttribute('src', member.imageFile);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');

        let title = document.createElement('h2');
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