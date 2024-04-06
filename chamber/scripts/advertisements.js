const url = "https://genderson.github.io/wdd230/chamber/data/members.json";
const container = document.querySelector("#advertisement-container");

async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();

    const memberAdvertisement = data.members.filter(member => 
        member.membershipLevel == "Silver Membership" || 
        member.membershipLevel == "Gold Membership");

    const shuffledArray = shuffleArray(memberAdvertisement);

    displayMembers(shuffledArray.slice(0, 3));
  }
  
  getMembers(url);

  const displayMembers = (members) =>{
    members.forEach((member) =>{
        let memberSection = document.createElement('section');
        memberSection.setAttribute('class', 'advertisement-card');
        
        let logo = document.createElement('img');
        logo.setAttribute('src', member.imageFile);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        let title = document.createElement('h2');
        title.textContent = member.name;

        let message = document.createElement('p');
        message.textContent = member.message;
        
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
        memberSection.appendChild(message);
        memberSection.appendChild(address);
        memberSection.appendChild(phone);
        memberSection.appendChild(webSite);
        memberSection.appendChild(membershipLevel);
        container.appendChild(memberSection);
    });
  }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

