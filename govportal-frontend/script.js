
// Youth eligibility check
function checkEligibilityYouth(event) {
  event.preventDefault();
  const age = parseInt(document.getElementById('youth-age').value);
  const isStudent = document.getElementById('student').checked;
  const result = document.getElementById('youth-result');
  const submitBtn = document.querySelector('#youth-form button[type="submit"]');

  if (age >= 18 && age <= 25 && isStudent) {
    result.textContent = '✅ You are eligible for youth schemes.';
    result.style.color = 'green';
    submitBtn.disabled = false;
  } else {
    result.textContent = '❌ You are not eligible for youth schemes.';
    result.style.color = 'red';
    submitBtn.disabled = true;
  }
}

// Senior eligibility check
function checkEligibilitySenior(event) {
  event.preventDefault();
  const age = parseInt(document.getElementById('senior-age').value);
  const result = document.getElementById('senior-result');
  const submitBtn = document.querySelector('#senior-form button[type="submit"]');

  if (age >= 60) {
    result.textContent = '✅ You are eligible for senior citizen schemes.';
    result.style.color = 'green';
    submitBtn.disabled = false;
  } else {
    result.textContent = '❌ You are not eligible for senior citizen schemes.';
    result.style.color = 'red';
    submitBtn.disabled = true;
  }
}

// Youth Enrollment: Send data to backend
async function enrollYouth(event) {
  event.preventDefault();
  const citizen = {
    name: document.getElementById('enroll-name').value,
    phone: document.getElementById('enroll-number').value,
    address: document.getElementById('enroll-address').value,
    aadhar: document.getElementById('enroll-aadhar').value,
    education: document.getElementById('enroll-education').value,
    category: 'Youth'
  };
  try {
    const res = await fetch('http://localhost:9090/api/citizens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(citizen)
    });
    if (res.ok) {
      alert('Youth enrolled successfully!');
      event.target.reset();
    } else {
      alert('Error enrolling youth.');
    }
  } catch (err) {
    alert('Cannot connect to server.');
    console.error(err);
  }
}

// Senior Enrollment: Send data to backend
async function enrollSenior(event) {
  event.preventDefault();
  const citizen = {
    name: document.getElementById('senior-name').value,
    phone: document.getElementById('senior-number').value,
    address: document.getElementById('senior-address').value,
    aadhar: document.getElementById('senior-aadhar').value,
    education: document.getElementById('senior-education').value,
    category: 'Senior'
  };
  try {
    const res = await fetch('http://localhost:9090/api/citizens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(citizen)
    });
    if (res.ok) {
      alert('Senior citizen enrolled successfully!');
      event.target.reset();
    } else {
      alert('Error enrolling senior citizen.');
    }
  } catch (err) {
    alert('Cannot connect to server.');
    console.error(err);
  }
}
